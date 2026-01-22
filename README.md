# Looplijn - Public Architecture

This repository is a public, sanitized view of how I structure and build production-grade AI and SaaS systems at Looplijn.

It is intentionally limited and does **not** contain:
- private business logic  
- customer data  
- API keys or secrets  
- internal prompts or workflows  

The purpose is to showcase architecture design, code quality, security practices, and overall engineering approach.

---

## What this shows

- Express API structure used for production systems  
- Safety patterns for inputs and outputs  
- Rate limiting approach (sample implementation)  
- A sanitized Loopy chat endpoint pattern  
- Environment-based configuration  
- Scalable and maintainable project layout  

---

## Tech Stack

- Node.js  
- Express  
- Serverless-compatible patterns  
- Environment-based configuration  

---

## Quick Start

1) Install dependencies  
```bash
npm install
