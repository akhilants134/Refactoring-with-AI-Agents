# Dev Confessions

An anonymous confession app for developers to share their bugs, deadline stress, imposter syndrome, and vibe-coding sessions.

## ✨ Refactored with MVC Architecture

This codebase was completely refactored from a monolithic 112-line file into a clean MVC structure with:

- ✅ Meaningful variable names (no more `d`, `x`, `arr`)
- ✅ Single-responsibility functions (split from 88-line `handleAll`)
- ✅ MVC folder structure (routes, controllers, services)
- ✅ Environment variables (no hardcoded secrets)
- ✅ Inline comments explaining business logic
- ✅ Full documentation in CHANGES.md

See **CHANGES.md** for complete refactoring details.

## Project Structure

```
.
├── app.js                         # Express app setup and middleware
├── constants/
│   └── categories.js              # Valid confession categories
├── routes/
│   └── confessionRoutes.js        # HTTP endpoint definitions
├── controllers/
│   └── confessionController.js    # Request handling and response formatting
├── services/
│   └── confessionService.js       # Business logic and data persistence
├── .env.example                   # Environment variables template
├── .env                           # Actual environment configuration
├── AUDIT.md                       # Pre-refactor audit findings
├── CHANGES.md                     # Detailed refactoring documentation
└── package.json                   # Dependencies (express, dotenv)
```

## Endpoints

- **POST** `/api/v1/confessions` — Create a new confession
- **GET** `/api/v1/confessions` — Retrieve all confessions (sorted by newest)
- **GET** `/api/v1/confessions/:id` — Retrieve a specific confession
- **GET** `/api/v1/confessions/category/:cat` — Retrieve confessions by category
- **DELETE** `/api/v1/confessions/:id` — Delete a confession (requires `x-delete-token` header)

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure environment (optional):**
   - Copy `.env.example` to `.env`
   - Modify PORT or DELETE_TOKEN if needed

3. **Run the app:**

   ```bash
   npm start
   ```

4. **Development mode with auto-reload:**
   ```bash
   npm run dev
   ```

## Port: 3000

The API runs on `http://localhost:3000` by default.

## Live Deployment

[TBD - Add live URL after deployment]

## Technologies

- **Express.js** — Web framework
- **Node.js** — Runtime
- **dotenv** — Environment variable management

## Authentication

Delete endpoint requires `x-delete-token` header with the correct token (default: `supersecret123`, configurable via `.env`).

## Example Requests

### Create a confession

```bash
curl -X POST http://localhost:3000/api/v1/confessions \
  -H "Content-Type: application/json" \
  -d '{
    "text": "I debug with console.log",
    "category": "vibe-code"
  }'
```

### Get all confessions

```bash
curl http://localhost:3000/api/v1/confessions
```

### Get confession by category

```bash
curl http://localhost:3000/api/v1/confessions/category/bug
```

### Delete a confession

```bash
curl -X DELETE http://localhost:3000/api/v1/confessions/1 \
  -H "x-delete-token: supersecret123"
```

## Documentation

- **AUDIT.md** — Complete pre-refactor audit of issues found
- **CHANGES.md** — Detailed documentation of every refactoring decision
