---
title: "Debugging the Data Pipeline"
description: "A multi-layered troubleshooting journey through networking, schema initialization, and the shift to a fully async FastAPI pipeline."
icon: "MdTimeline"
color: "red.400"
tags: ["FastAPI", "PostgreSQL", "IAM"]
order: 3
---
# Building Memify.ai: Debugging the Data Pipeline – From Network to Code

Hello and welcome to the next installment of the Memify.ai build series!

Before we can dive into the intelligent agents and knowledge graphs that make Memify special, we have to handle the fundamentals. The most critical function of our platform is processing a user's documents—ingesting PDFs, parsing them, and preparing them for our AI. For that to happen, our data pipeline has to be rock-solid.

This post isn't about a new feature, but about a debugging journey. It’s the story of how I set up the document processing pipeline and the four distinct layers of failure I had to troubleshoot to get it working: networking, database schemas, application runtime, and cloud permissions.

## Layer 1: The Network (Security Groups)

The first hurdle appeared as soon as I tried to connect my application server to the Amazon RDS PostgreSQL instance. I was hit with classic connection timeouts. 

My immediate thought was a network issue—the application simply couldn't reach the database. I started with the basics:
1.  **DNS Verification:** I used `nslookup` to ensure the database's hostname resolved to the correct IP. It did.
2.  **Firewall Rules:** I checked the AWS Security Groups.

It turned out to be a misconfiguration in the Security Group rules. The database was running in a private subnet, but it didn't have an inbound rule allowing traffic specifically from the application server's security group. Once I updated the rules to allow traffic on port 5432 from the app, the timeouts vanished.

## Layer 2: The Schema (Initialization)

With the network path clear, the timeouts were replaced by a new error: `FATAL: database "memify_db" does not exist`.

This was a two-part problem:
1.  **The Connection String:** I was pointing to the default `postgres` maintenance database instead of my target `memify_db`.
2.  **The Empty Instance:** Even after fixing the name, the *tables* didn't exist. AWS RDS gives you a blank slate.

I needed a reproducible way to initialize the schema. I wrote a Python script (`backend/src/scripts/init_db.py`) using SQLAlchemy to define our data models (Users, Documents) and create the necessary tables. I integrated this into our build process, ensuring that we could spin up—and tear down—databases with a single command.

## Layer 3: The Runtime (Async vs. Sync)

The most interesting technical challenge came next. The application was running, but file uploads would occasionally hang or fail effectively silently. 

The root cause was a conflict between synchronous and asynchronous code. Memify.ai's backend is built with **FastAPI**, a modern, high-performance web framework that uses Python's `async`/`await` syntax. However, my initial database implementation used standard, synchronous SQLAlchemy sessions.

In an async framework, a blocking (synchronous) database call pauses the entire event loop. While the app is waiting for a query to return, it can't handle any other requests. 

**The Fix:**
I refactored the database layer to be fully asynchronous:
*   **Libraries:** I added `asyncpg` (a fast PostgreSQL driver) and ensured `greenlet` was installed.
*   **AsyncSession:** I replaced synchronous sessions with SQLAlchemy's `AsyncSession`.
*   **Lifecycle Management:** I tied the database connection setup to the FastAPI `lifespan` handler, ensuring connections are created and closed gracefully when the app starts and stops.

This change resolved the "hanging" issues and significantly improved the throughput of the API.

## Layer 4: The Cloud (IAM Permissions)

The final piece of the puzzle was the trigger mechanism. The architecture is event-driven:
1.  User uploads a file to **S3**.
2.  S3 sends a notification to **SNS** (Simple Notification Service).
3.  SNS triggers an **AWS Lambda** function to parse the document.

The pipeline was breaking between steps 2 and 3. The file landed in S3, but the Lambda never fired. 

The issue wasn't code; it was permissions. In AWS, services need explicit permission to talk to each other. The S3 bucket didn't have the `SNS:Publish` permission to send messages to the topic, or the SNS topic didn't have permission to invoke the Lambda (depending on how you look at the policy).

I had to dive into AWS IAM (Identity and Access Management) and define a policy that strictly allowed these services to interact. Once I applied the correct resource-based policies, the pipeline finally roared to life.

## The Result: A Resilient Foundation

Today, the document upload system is fully functional:
*   It connects securely to RDS within our VPC.
*   It manages metadata with a properly migrated schema.
*   It handles requests asynchronously without blocking.
*   It triggers processing jobs automatically via cloud events.

This debugging session effectively forced me to verify every layer of our stack. Now that we have a reliable way to get data *into* Memify.ai, we can move on to the really fun part: using that data to build our knowledge graph in Amazon Neptune.

Stay tuned for the next post!
