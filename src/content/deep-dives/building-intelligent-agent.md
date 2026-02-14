---
title: "Building the Agent's Brain"
description: "Evolving core intelligence from simple search into a graph-powered AI agent using Gremlin and Neptune for sophisticated multi-hop reasoning."
icon: "MdCode"
color: "purple.400"
tags: ["Graph-RAG", "Gremlin", "Prompt Eng"]
order: 4
---
# Building Memify.ai: From Simple Search to Intelligent Agent – A Journey in Graph-Powered AI

Hello everyone! Welcome back to the Memify.ai build series.

Today, I'm thrilled to share a deep dive into one of the most challenging, yet rewarding, aspects of developing Memify.ai: evolving its core intelligence from a basic search mechanism into a sophisticated, graph-powered AI agent.

Initially, Memify.ai could process documents, extract facts, and store them in a knowledge graph. But when it came to answering questions, it was limited to simple keyword proximity. It struggled with complex questions that required connecting specific dots across time, like "Who was at the meeting that followed up on the June 10th call?"

To overcome this, I pivoted from a linear "Retrieve-Then-Generate" pipeline to an **Agentic Workflow**.

## Phase 1: Laying the Foundation – Graph Structure

The first step was ensuring our knowledge graph in Amazon Neptune could actually *store* the relationships we needed to traverse.

We extended the `fact_extraction` module to explicitly identify semantic edges between nodes. Instead of just storing "Meeting A" and "Meeting B" as isolated events, we added edges like `FOLLOWS_UP_ON` or `PARTICIPATED_IN`. This turned our database from a bucket of facts into a connected web of context.

## Phase 2: Building the Tool Chest – `get_related_facts`

An agent is only as good as its tools. Once the graph had connections, the AI needed a way to navigate them.

I built the `get_related_facts` tool. This function allows the agent to start at a known anchor point (like a specific "Event" node found via search) and "walk" the graph along specific edge types.

For example, if the agent finds the "June 10th Call", it can essentially ask the database: *"Give me all nodes connected to this call via a FOLLOWS_UP_ON edge."* This was implemented using Gremlin queries in our `NeptuneClient` and exposed to the LLM as a callable tool function.

## Phase 3: The Brain – Prompting for Multi-Hop Reasoning

Giving an AI a tool doesn't mean it knows how to use it. My initial queries often failed because the model would stop after finding the first document.

I had to engineer a robust **System Prompt** for the `FactQueryAgent`. The key breakthrough was adding a "Exploration Plan" section to the prompt, which explicitly taught the model a multi-step workflow:
1.  **Search:** Find the entry point (e.g., "June 10th").
2.  **Ambiguity Check:** If multiple events match, STOP and ask the user for clarification.
3.  **Traverse:** If unique, use `get_related_facts` to find connections.
4.  **Loop:** Repeat until the question is answered.

This "Step-by-Step" instruction turned the agent from a chaotic guesser into a methodical researcher.

### Validation: The "Small Data" Problem

To ensure these prompts actually worked, I created a small, focused **Evaluation Set** of 5-10 complex, multi-hop questions based on my own test documents. 

One major challenge in this space is that open-source evaluation datasets don't really exist for this specific kind of personal, graph-based retrieval. You can't just download a benchmark for "my specific meeting notes." A long-term goal for Memify.ai is to partner with forward-thinking companies to safely curate a larger, anonymized pool of testing data, which would allow us to push the boundaries of agentic reasoning even further.

## Phase 4: Integration – The Synthesis Engine

The final piece was integrating this agent into our gRPC backend (`backend_service.py`).

Here’s the architecture we landed on:
1.  **The Agent Run:** When a user sends a message, the `ChatStream` method initializes the `FactQueryAgent`.
2.  **Raw Logic:** The agent runs independently, calling tools and gathering data. Crucially, it **does not** write the final answer. It returns a list of raw, verified facts (JSON objects from the graph).
3.  **The Synthesis:** The backend takes these raw facts, formats them into a clean string (grouped by source document), and feeds them into a final "Synthesizer" LLM call.

This separation of concerns is vital. The Agent focuses purely on *retrieval accuracy*, while the final LLM focuses on *conversational fluency* and creating the timeline.

We also had to tackle **User Experience**. The agent uses a `<think>` block to output its internal reasoning. In the backend, we filter this out of the final saved message so the user sees a polished response, but we keep it during the stream so the user knows the AI is "working on it."

## The Result: A Smarter Memify

Today, Memify.ai can gracefully handle those multi-hop queries. If you ask about a project timeline, it doesn't just keyword-match "project"; it finds the kickoff, traces the `FOLLOWS_UP_ON` edges to the status checks, and builds you a complete history.

This journey highlighted that building "AI" isn't just about the model—it's about the data structure (Graph), the access mechanism (Tools), and the extensive engineering glue that holds it all together.
