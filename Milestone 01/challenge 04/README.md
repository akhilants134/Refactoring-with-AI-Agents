# Assignment — Token Bomb Defusal 💣

## Overview
You will inherit a working AI-powered Express app — a simple code review assistant that accepts code snippets and returns AI feedback. The feature works correctly. The problem is it is expensive to run at scale.

Your job: audit the token usage, identify exactly where the money is going, and fix it across 5 levels. Every fix must be measurable — before and after token counts, before and after cost calculations.

⚡ **Rule:** Read the entire codebase before changing a single line. Understand what the app does and how it calls the AI API before you start measuring.

This app is expensive to run. Your job is to fix it.

## Getting Started

1.  Clone the repository.
2.  Install dependencies: `npm install`
3.  Copy `.env.example` to `.env` and add your `OPENAI_API_KEY`.
4.  Start the application: `npm start`
5.  Open `http://localhost:3000` in your browser.

## Project Structure

-   `index.js`: Main application logic and API routes. Contains the messy history logic.
-   `prompts.js`: Contains the AI system configuration with a bloated prompt.
-   `sample-inputs/`: Contains test data for measuring token usage.
