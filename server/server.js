import express from "express";

import cors from "cors";
import { openai } from "./configs/openai.js";

const app = express();

//Allow multiple origins
const allowedOrigin = [
  "http://localhost:3000",
  "https://smarttalk-ai-weld.vercel.app",
];

app.use(express.json());
app.use(cors({ origin: allowedOrigin, credentials: true }));

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Hello from SmartTalk AI",
  });
});

app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: prompt,
    });
    res.status(200).json({ message: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("server listening on 5000"));
