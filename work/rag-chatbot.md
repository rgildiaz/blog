---
title: "Infrastructure for a RAG-powered Slack bot"
org: "PMG"
period: "2023 – 2025"
summary: "Architected the AWS infrastructure behind a Slack-integrated, RAG-powered chatbot used by 10+ channel advertising teams."
stack: ["AWS", "Slack", "RAG"]
order: 6
---

I architected the AWS infrastructure for a chatbot that lives in Slack and uses retrieval-augmented generation (RAG) to give context-aware answers, rather than relying on the model's general knowledge alone. It served 10+ channel advertising teams and supported dozens of concurrent users.

<!--
  Draft: some questions to answer:

  - What kinds of questions did it answer, and from what sources?
  - What does the architecture look like: compute, vector store, model, how documents get ingested and kept fresh?
  - How did you handle concurrency and Slack's response-time limits?
  - Anything about cost, or what you'd do differently?
  - An architecture diagram would fit well here.
-->
