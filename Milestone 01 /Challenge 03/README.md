# Assignment - The Refactor & Own Challenge 🔧

## Overview
You will receive a working but deliberately messy repository called **Dev Confessions**. The app functions correctly. Your job is not to add features - it is to make the existing code clean, maintainable, and production-ready.

You will audit the codebase, fix 5 specific problems, document every decision in `CHANGES.md`, open a PR against the original, and deploy the refactored version.

⚡ **Rule:** Read the entire codebase before touching a single line. List every problem you find before writing any fix. Engineers who skip the audit step break things they did not intend to touch.

## The Repository
Fork and clone this repo to begin:
[https://github.com/kalvium-program/dev-confessions](https://github.com/kalvium-program/dev-confessions)

The repo contains a working Node.js + Express application. It has an `index.js`, a few utility files, and no folder structure. Read every file before you open your editor to make changes.

## The 5 Fixes - In Order

### Fix 1 - Rename Every Meaningless Variable
Every single-letter variable name (`x`, `d`, `tmp`, `res2`, `cb`) must become a descriptive name that communicates intent.
*   **The rule:** if a new developer reads the variable name in isolation and cannot tell what it holds, rename it.
*   **Approach:**
    *   Go file by file
    *   List every variable name you find
    *   For each one: does this name tell me what it stores? If no - rename it
    *   Record `old name` → `new name` → `why` in `CHANGES.md`

### Fix 2 - Split the Monolithic Function
There is one function in the codebase that is over 60 lines long and does everything: fetches data, transforms it, handles errors, and formats the response.
Split it into single-responsibility functions. Each function should do exactly one thing. If you cannot describe a function's job in one sentence without using "and", it needs to be split further.
**The target:** no function in the codebase should exceed 25 lines.

### Fix 3 - Reorganise into MVC Structure
Create the following folder structure and move files into the correct layer:
*   `/routes`        → HTTP routing only, no logic
*   `/controllers`   → request/response handling, calls services
*   `/services`      → business logic and data operations
*   `/middleware`    → reusable middleware functions

Each layer should only know about the layer directly below it. Routes call controllers. Controllers call services. Services do the work.

### Fix 4 - Centralise All API URLs into Environment Variables
Find every hardcoded API URL, port number, and configuration value in the codebase. Move each one to a `.env` file. Reference them in code using `process.env.VARIABLE_NAME`.
Create a `.env.example` file in the repo root showing all required variables with placeholder values (not real secrets).

### Fix 5 - Add Inline Comments to Every Non-Obvious Block
Every block of logic that is not immediately obvious to a developer reading it for the first time needs a comment explaining what it does and why - not what the code literally says, but why that logic exists.
*   **Good comment:** `// Filters out confessions submitted in the last 24h to prevent spam bursts`
*   **Bad comment:** `// filters array` (this just restates what the code already shows)

## CHANGES.md - Required Structure
Create a `CHANGES.md` file in the repo root with exactly these 4 sections:

### Section 1 - Variable Renames
A table with 3 columns:
| Old Name | New Name | Why |
| :--- | :--- | :--- |
| x | userInputText | Stores the raw text submitted by the user in the confession form |

Include every rename. No blanks.

### Section 2 - Function Split
For each function that was split:
*   Original function name and line count
*   List of new functions created, each with a one-sentence description of its single responsibility
*   Why the split improves the code (testability, readability, reusability)

### Section 3 - Structure Changes
*   **Before:** list the files and their locations in the original flat structure
*   **After:** list where each file now lives in the MVC structure
*   One sentence per file explaining why it belongs in that layer

### Section 4 - Reflection
Three questions to answer (2–4 sentences each):
1.  What was the hardest part of this refactor and why?
2.  Which single change had the most impact on readability and why?
3.  If you had to add a new feature to this codebase tomorrow, which part of your refactored structure makes that easiest?

## Tasks to Be Performed
1.  Fork the Dev Confessions repo and create a branch named `refactor/clean-up`.
2.  Read every file in the codebase before making any change. Write your pre-refactor audit list.
3.  Apply all 5 fixes in order. Commit after each fix with a clear commit message.
4.  Write `CHANGES.md` with all 4 required sections.
5.  Deploy the refactored version (Render, Railway, Vercel, or any free hosting). Copy the live URL.
6.  Open a PR from `refactor/clean-up` against the original repo's main branch.
7.  In the PR description, answer these 3 questions:
    *   What was the biggest structural problem in the original code?
    *   What does your refactored version make easier for the next developer?
    *   What would you fix next if you had another hour?
8.  Record a 2–3 minute video showing 3 key refactoring decisions with before and after for each. No script reading.
9.  Add the live URL to the PR description before submitting.

## Instructions
*   Branch name must be exactly `refactor/clean-up` - other branch names will not be checked.
*   `CHANGES.md` must be in the repo root - not inside a subfolder.
*   The `.env` file must NOT be committed. Only `.env.example` should be in the repo.
*   PR must be opened against the original dev-confessions repo, not a fork-to-fork PR.
*   Video must show your screen and your face. Explaining without reading from a script is required - this is assessed.
*   Live URL must return a working response - a deployed app that shows a 404 or error page scores 0 for that criterion.

## Submission Guidelines
Submit the following two items via the platform:
1.  **GitHub PR Link** Your PR from branch `refactor/clean-up` against the original repo. The PR must include:
    *   `CHANGES.md` committed in the repo
    *   Answers to the 3 PR description questions
    *   The live deployed URL in the PR description
2.  **Video Drive Link** A 2–3 minute Google Drive video link. Access must be set to "Anyone with the link can view".
    *   The video must show:
        *   Your face (camera on)
        *   Your full screen (not just one tab)
        *   3 specific refactoring decisions explained with before and after code visible
        *   No script reading - explain in your own words

⚠️ If the Drive link requires permission or the PR link is broken, the submission scores 0. Check both links before submitting.
⚠️ The GitHub repository must be public. A private repo cannot be evaluated.
