---
title: "Chasing a memory leak (and fixing observability on the way)"
org: "AchillesHR"
period: "2025 – present"
summary: "Diagnosed persistent memory issues on our API server, including a leak, and moved our monitoring from New Relic-specific tooling to OpenTelemetry."
stack: ["OpenTelemetry", "New Relic"]
featured: true
order: 2
---

Our API server had persistent memory problems, and one of them turned out to be a genuine memory leak. I tracked them down, and built out our monitoring infrastructure along the way while migrating our observability from New Relic-specific tooling to OpenTelemetry.

<!--
  Draft: debugging stories make great write-ups. Some questions to answer:

  ## Symptoms
  - What did it look like from the outside: restarts, OOM kills, slow responses, a sawtooth memory graph?

  ## The hunt
  - How did you narrow it down (heap snapshots, profiling, bisecting deploys, load tests)?
  - What was the leak, in the end? What were the other memory issues?
  - What was the fix?

  ## Observability
  - What was missing from the old setup that made this hard?
  - Why OpenTelemetry, and what does the setup look like now (traces, metrics, where they're sent)?

  ## Result
  - Any before/after numbers: memory usage, restarts per day, response times?
-->
