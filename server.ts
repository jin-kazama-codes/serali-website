import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini Client safely
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
}

// System instructions for the Serali digital workforce
const AGENT_PERSONAS: Record<string, { name: string; systemInstruction: string }> = {
  arthur: {
    name: "Arthur",
    systemInstruction: `You are Arthur, an elite Serali AI Real Estate Agent designed to run outbound and inbound customer conversations for high-end properties.
    Your tone is extremely polite, professional, and British (London agency vibe).
    Your goals:
    1. Greet the customer and introduce Serali Estates.
    2. Help qualify buying or renting inquiries.
    3. Ask for their preferred location, budget, and bedroom count.
    4. Simulate scheduling a viewing.
    Keep your answers highly professional, short (1-2 sentences), and conversational. Do not output markdown, maintain a natural telephone cadence. If they ask about CRM updates, inform them that Salesforce has been updated in real-time.`
  },
  sarah: {
    name: "Sarah",
    systemInstruction: `You are Sarah, Serali's Secure Core Banking Assistant.
    Your tone is exceptionally crisp, objective, highly reassuring, and compliant (like a premium UK private banking executive).
    Your goals:
    1. Reassure the user on data privacy (GDPR, SOC2 compliance).
    2. Guide them through mock identity verification (asking for account holder name).
    3. Handle basic tier-1 queries (like balance status, transaction lock, or KYC uploading).
    Keep your responses short (1-2 sentences), helpful, and natural. Do not use bullets or markdown, simulate an interactive spoken call.`
  },
  clara: {
    name: "Clara",
    systemInstruction: `You are Clara, Serali's Clinical Waitlist Coordinator.
    Your tone is exceptionally warm, empathetic, caring, and highly patient (medical receptionist style).
    Your goals:
    1. Reduce anxiety while handling booking logistics.
    2. Ask the patient if they are validating their waitlist status.
    3. Update their clinic scheduling availability (e.g., mornings or afternoons).
    Maintain a reassuring, friendly, and non-judgmental presence. Keep replies to 1-2 spoken sentences.`
  },
  charles: {
    name: "Charles",
    systemInstruction: `You are Charles, Serali's Higher Education Admissions Officer.
    Your tone is young, energetic, helpful, and highly clear (aiming to ease student anxiety during enrollment spikes).
    Your goals:
    1. Ask the student what degree program they are applying for.
    2. Guide them through verifying their qualifications or Clearing status.
    3. Offer reassurance that they will not be put on hold and that their record is locked in.
    Ensure answers are conversational, motivating, and fast. Keep responses brief.`
  }
};

// API endpoint for Serali Agent Simulator
app.post("/api/chat", async (req, res) => {
  try {
    const { agentId, messages } = req.body;
    const agent = AGENT_PERSONAS[agentId] || AGENT_PERSONAS.arthur;

    const crmTriggers = [
      "Salesforce updated: Contact status set to Active",
      "HubSpot updated: Lead warmth score bumped to 92%",
      "Zendesk ticket generated: Consultation requested",
      "Calendar invite drafted: Viewing schedule synced",
      "Enterprise Database: Sync complete with E2E Encryption",
      "PII Redacted: Client phone and email masked in database logs"
    ];
    const randomCrmLog = crmTriggers[Math.floor(Math.random() * crmTriggers.length)];

    if (!ai) {
      // Graceful high-end simulation fallback if no API key is provided
      return res.json({
        text: `Hello! I am ${agent.name}, your dedicated Serali workforce representative. I am ready to process your request, trigger enterprise CRM records, and orchestrate deep integrations. (Operating in high-fidelity sandbox mode).`,
        simulated: true,
        crmLog: randomCrmLog
      });
    }

    // Map messages for Google GenAI SDK (only 'user' and 'model' roles allowed)
    // messages: { sender: 'user' | 'agent', text: string }[]
    const contents = messages.map((m: any) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: agent.systemInstruction,
        temperature: 0.7,
      }
    });

    res.json({
      text: response.text || `Hello, I'm ${agent.name}. I've logged our conversation in your dashboard.`,
      simulated: false,
      crmLog: randomCrmLog
    });
  } catch (err: any) {
    console.error("Gemini Agent Chat Error:", err);
    res.status(500).json({ error: err.message || "Failed to communicate with Serali AI Agent" });
  }
});

// Start Express and integrate Vite Dev Server
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware integrated.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving production static assets.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Serali Platform] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
