Looplijn Public Architecture
===========================

This repository is a public, sanitized view of how I structure and build production-grade AI and SaaS systems in Looplijn.

It is intentionally limited and does not contain private business logic, customer data, secrets, or the full production codebase. The goal is to showcase architecture, code quality, security practices, and engineering approach.

What this shows
---------------

- Express API structure used for production endpoints
- Safety patterns for inputs and outputs
- Rate limiting approach (sample)
- A sample Loopy chat endpoint pattern (sanitized)
- Environment configuration example
- Project layout that scales cleanly

Tech stack
----------

- Node.js
- Express
- Serverless deployment compatible patterns
- Environment based configuration

Quick start
-----------

1) Install
npm install

2) Add environment variables
Copy .env.example to .env.local and fill values as needed.

3) Run
npm run dev

Endpoints
---------

- GET /health
  Simple health check

- POST /api/loopy-chat-sample
  Sanitized sample endpoint demonstrating:
  validation, safe responses, rate limiting, and a consistent API contract

Notes
-----

Looplijn is a live product. This repository is a public technical portfolio intended for recruiters, founders, and engineering teams to review how I build production systems.
