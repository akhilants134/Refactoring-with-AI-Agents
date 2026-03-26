# Challenge: Good Prompt, Bad Prompt

Welcome to the **LearnLens — a student tools platform** prompt engineering challenge. As a prompt engineer, you are tasked with identifying why three existing AI prompts are producing poor, inconsistent results and rewriting them using the five-component prompt structure.

## Context
The application uses AI to:
- **Task A — Notes Reviewer:** Analyze biology notes for clarity, completeness, and accuracy.
- **Task B — Placement Summariser:** Summarize technical interview experiences with structured details.
- **Task C — Error Analyst:** Debug React error messages and suggest fixes.

Currently, the prompts are minimal and perform poorly. Your job is to improve them.

## The Five-Component Structure
Your rewritten prompts must include:
1. **Persona:** Who is the AI? (e.g., "Expert Biology Teacher", "Senior Technical Interviewer")
2. **Context:** What is the AI doing and why? (e.g., "You are helping students review their notes for an upcoming exam.")
3. **Task:** What exactly should the AI do? (e.g., "Analyze the provided mitosis notes and give feedback.")
4. **Constraints/Instructions:** How should it behave? (e.g., "Be encouraging but professional. Do not hallucinate.")
5. **Output Format:** What should the response look like? (e.g., "Return a JSON object with scores for clarity and accuracy.")

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Configure Environment:**
   - Copy `.env.example` to `.env`.
   - Add your `API_KEY`.
   - (Optional) Configure `LLM_BASE_URL` and `LLM_MODEL`.

3. **Explore the Existing Prompts:**
   - Check `prompts/originals.js` to see the "bad" prompts.

## How to Complete the Challenge

### 1. Initial Analysis
Run the "bad" version of each task using the CLI runner and observe the output.
```bash
# Task A
node runner --task=a --version=bad --temperature=0.7

# Task B
node runner --task=b --version=bad --temperature=0.7

# Task C
node runner --task=c --version=bad --temperature=0.7
```
Document why these prompts are poor in `PROMPT_COMPARISON.md`.

### 2. Rewrite the Prompts
Open `prompts/rewritten.js` and implement the improved versions of all three prompts using the five-component structure. Make sure you use **System Messages** for persona and instructions.

### 3. Test and Compare
Run your "good" versions and compare them against the originals.
```bash
# Task A
node runner --task=a --version=good --temperature=0.0

# Task B
node runner --task=b --version=good --temperature=0.0

# Task C
node runner --task=c --version=good --temperature=0.0
```

### 4. Document Your Results
Update `PROMPT_COMPARISON.md` with your findings, comparing the raw responses, structural completeness, and reliability.

## API Endpoints (Optional for testing)
If you want to run the full server:
```bash
npm start
```
The server will be available at `http://localhost:3001`.
- `GET /api/notes/:id/review?version=bad|good&temperature=0.0`
- `GET /api/interviews/:id/summary?version=bad|good&temperature=0.0`
- `POST /api/errors/analyse?version=bad|good&temperature=0.0` (Expects `{ "error_message": "..." }`)
