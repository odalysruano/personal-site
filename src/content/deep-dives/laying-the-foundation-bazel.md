---
title: "Laying the Foundation"
description: "Laying a hermetic foundation for a multi-language AI system using Bazel and a monorepo architecture to manage interconnected services."
icon: "MdSettings"
color: "blue.400"
tags: ["Bazel", "Monorepo", "Protobuf"]
order: 1
---
# Laying the Foundation: Building Memify.ai with Bazel and a Monorepo

Hello everyone! Welcome to the first post in the Memify.ai build series.

## Introduction: The Vision Demands a Strong Foundation

Memify.ai isn't just a simple script or a standalone web app; it's a system of interconnected services designed to be the second brain for your digital life. The vision involves a gRPC backend serving the frontend, Lambda functions for parsing documents, background workers for graph ingestion, and shared libraries for our core AI logic and data models.

When I started planning Memify, I asked myself: "How do I manage a complex, multi-language project like this without it becoming a tangled mess?" 

I needed a way to share data models (like our Protobuf definitions) between the Python backend and the TypeScript frontend. I needed to ensure that a change in our graph database client wouldn't silently break the document parser. The answer wasn't to split everything into micro-repos, but to bring them all together under one roof with a build system powerful enough to handle it.

## The Monorepo Decision: One Repository to Rule Them All

I chose a **monorepo** architecture. This means all the code for Memify.ai—backend, frontend, infrastructure, and shared libraries—lives in a single git repository.

Why?
1.  **Atomic Commits:** I can make a change to a shared library (like `shared/db/neptune.py`) and update the services that use it (like `backend` and `document_parser`) in a single Pull Request.
2.  **Simplified Dependency Management:** No more publishing private packages to PyPI or npm just to consume them in another part of the same project.
3.  **Code Sharing:** Our AI logic in `shared/ai` is easily accessible to both the API server and the offline processing agents.

## Enter Bazel: The Build System for Scalability

To manage this monorepo, I chose **Bazel**. It's the open-source version of the build system Google uses to manage their massive codebase.

It might seem like overkill for a startup, but here's why it's the hero of our story:

*   **Reproducibility (Hermetic Builds):** Bazel builds run in isolated environments. Use a specific version of Python or Node.js? Bazel ensures *everyone* (and the CI server) uses exactly that version. If it builds on my machine, it builds in production.
*   **Speed (Caching):** Bazel is smart. It traces the dependency graph of every file. If I only change a frontend React component, Bazel knows it doesn't need to run the backend Python tests. This incremental build capability is a lifesaver as the project grows.
*   **Clarity:** The `BUILD` files explicitly declare every dependency. There are no "mystery imports" where code works just because something happens to be installed in your global environment.

## A Practical Look: Our Initial Project Structure

Here is a simplified view of the Memify.ai directory structure:

```text
memify-ai/
├── MODULE.bazel          # Modern Bazel dependency management
├── backend/              # gRPC Backend Service
├── frontend/             # Next.js Application
├── document_parser/      # AWS Lambda functions for ingestion
├── shared/               # Shared libraries 
│   ├── ai/               # AI Agents (FactQueryAgent, Bedrock client)
│   ├── db/               # Database clients (Neptune)
│   └── facts/            # Fact extraction logic
└── proto/                # Protocol Buffer definitions
```

The magic happens in the `BUILD` files. Let's look at `shared/db/BUILD`. This defines our Neptune database client as a reusable library:

```python
# shared/db/BUILD
load("@rules_python//python:defs.bzl", "py_library")
load("@pip_shared//:requirements.bzl", "requirement")

py_library(
    name = "neptune",
    srcs = ["neptune.py"],
    deps = [
        "//proto:facts_proto_py_grpc",  # Internal dependency
        requirement("boto3"),           # External dependency
        requirement("gremlinpython"),
    ],
    visibility = ["//visibility:public"],
)
```

Now, when I built the **Fact Query Agent**, which is a complex AI agent responsible for navigating our knowledge graph, I didn't have to copy-paste database code. I simply declared a dependency on the `neptune` library.

Here is `shared/ai/BUILD`:

```python
# shared/ai/BUILD
py_library(
    name = "fact_query_agent_lib",
    srcs = ["fact_query_agent.py"],
    deps = [
        "//shared/ai:bedrock",   # Another shared library
        "//shared/db:neptune",   # reuse the database client!
        "//shared/facts:query",
    ],
)
```

This explicit graph (`fact_query_agent_lib` -> `neptune` -> `boto3`) allows Bazel to only rebuild the agent if the database client changes, but not if I change the frontend CSS.

## The Payoff: Why It Was Worth the Effort

I won't lie—Bazel has a learning curve. Understanding `BUILD` files and hermetic toolchains takes time.

But the payoff was immediate. When I implemented the `FactQueryAgent` to answer user questions, I could confidently import our standardized `NeptuneClient` knowing it would behave exactly the same way it does in the ingestion pipeline. 

This foundation gives me the stability to move fast. I can refactor the core `neptune.py` client, run `bazel test //...`, and instantly know if I've broken the API backend *or* the parsing Lambda *or* the query agent. That peace of mind is what will allow Memify.ai to scale from a prototype to a robust platform.
