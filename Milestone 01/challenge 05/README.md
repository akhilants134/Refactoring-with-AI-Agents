# Assignment - Ship Something Real 🚀

## Overview
You will build and deploy a real software product that solves a personal problem using an AI feature. This is a **build-from-scratch** challenge. There is no starter repository. The goal is to move from a vague idea to a deployed, working MVP in one sprint.

## The 5 Constraints
A submission that fails any constraint scores 0.

### Constraint 1 - Personal Problem
The project must solve a problem **you** personally experience. It cannot be:
- A tutorial project (to-do list, weather app, recipe finder)
- A problem you invented just to build something
- A clone of an existing product with only cosmetic changes

### Constraint 2 - AI Feature via Backend Only
Your application must include at least one AI feature. The API call must:
- Be made from your **Express backend** - never from the frontend.
- Use a live API (OpenRouter, Gemini, OpenAI, etc.).
- Read the API key from `process.env`. Never hardcode keys.

### Constraint 3 - Deployed Live URL
The project must be publicly accessible (Render, Vercel, Netlify, etc.).
- It must return a working response (no 404s/sleep screens).
- The AI feature must work in the live version.

### Constraint 4 - Complete README
Your repository must include a README that answers:
1.  **What is it?** (1 sentence description)
2.  **What problem does it solve?** (2 sentences explaining the friction)
3.  **Where was AI used?** (Model name, description of feature, and the system prompt)
4.  **What was intentionally left out?** (2 features you skipped for the MVP)

### Constraint 5 - Demo Video
A 3-minute video (Google Drive) showing:
- Your face (camera on).
- The live deployed application working.
- One piece of code you wrote yourself + one piece of AI-generated code explained.

---

## Tasks to Be Performed
1.  **Step 1: Define the Problem** - Get approval from your mentor.
2.  **Step 2: Backend First** - Set up Express and confirm the AI call works with a test endpoint.
3.  **Step 3: Frontend** - Build a minimal interface (one input, one output).
4.  **Step 4: Token Logging** - Implement logging to measure real costs.
5.  **Step 5: Deploy** - Move the app to a live URL.

## AI Cost Estimate (Required)
You must include a section in your README calculating the monthly cost of your AI feature based on real token usage.
- **Cost per call** = (Input tokens × rate) + (Output tokens × rate)
- **Monthly cost** = Cost per call × Expected calls per day × 30 days
