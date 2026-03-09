require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { SYSTEM_PROMPT } = require('./prompts');

const app = express();
app.use(express.json());

// In-memory storage for conversation history - NO windowing or trimming
const conversationHistory = {};

// GET route to serve minimal frontend
app.get('/', (req, res) => {
    res.send(\`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Code Buddy - Review Assistant</title>
            <style>
                body { font-family: sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; }
                textarea { width: 100%; height: 200px; margin-bottom: 20px; }
                button { padding: 10px 20px; cursor: pointer; }
                #response { white-space: pre-wrap; background: #f4f4f4; padding: 20px; border-radius: 5px; margin-top: 20px; }
            </style>
        </head>
        <body>
            <h1>Code Buddy (v1.0 - Legacy)</h1>
            <p>Paste your code here for a thorough (and expensive) review.</p>
            <textarea id="codeInput" placeholder="Paste code here..."></textarea>
            <button onclick="submitReview()">Get Review</button>
            <div id="response">Response will appear here...</div>

            <script>
                async function submitReview() {
                    const code = document.getElementById('codeInput').value;
                    const responseDiv = document.getElementById('response');
                    const conversationId = "default-session"; // Simplified for the demo
                    
                    responseDiv.innerText = "Processing...";
                    
                    try {
                        const res = await fetch('/review', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ code, conversationId })
                        });
                        const data = await res.json();
                        responseDiv.innerText = data.feedback;
                    } catch (err) {
                        responseDiv.innerText = "Error: " + err.message;
                    }
                }
            </script>
        </body>
        </html>
    \`);
});

// POST route for review
app.post('/review', async (req, res) => {
    const { code, conversationId } = req.body;

    if (!code || !conversationId) {
        return res.status(400).json({ error: "Missing code or conversationId" });
    }

    // Initialize history if new
    if (!conversationHistory[conversationId]) {
        conversationHistory[conversationId] = [];
    }

    const userMessage = \`Please review this code snippet for me:\\n\\n\${code}\`;
    
    // Constructing the full, un-trimmed history for the API call
    // DELIBERATE WASTE: Every single message is sent every time.
    const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory[conversationId],
        { role: 'user', content: userMessage }
    ];

    try {
        // Calling OpenAI API (Compatible with OpenRouter)
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4o',
            messages: messages,
            // DELIBERATE WASTE: No max_tokens set. Model can respond at any length.
        }, {
            headers: {
                'Authorization': \`Bearer \${process.env.OPENAI_API_KEY}\`,
                'Content-Type': 'application/json'
            }
        });

        const aiFeedback = response.data.choices[0].message.content;

        // Store the interaction in history
        conversationHistory[conversationId].push({ role: 'user', content: userMessage });
        conversationHistory[conversationId].push({ role: 'assistant', content: aiFeedback });

        // NOTE: No token logging or usage measurement is performed here.
        res.json({ feedback: aiFeedback });

    } catch (error) {
        console.error("API Error:", error.response ? error.response.data : error.message);
        res.status(500).json({ error: "Failed to fetch AI feedback" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Code Buddy running on port \${PORT}\`));
