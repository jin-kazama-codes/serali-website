import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import { AI_AGENTS } from "../data";
import { Send, User, Cpu, RefreshCw, Terminal, Phone, Check, Shield, Database, Sparkles, MessageSquare } from "lucide-react";

interface Message {
  sender: "user" | "agent";
  text: string;
  timestamp: string;
}

interface CrmLog {
  id: string;
  timestamp: string;
  event: string;
  type: "success" | "info" | "secure";
}

interface AgentSandboxProps {
  preselectedAgentId?: string;
}

export default function AgentSandbox({ preselectedAgentId = "arthur" }: AgentSandboxProps) {
  const [selectedAgentId, setSelectedAgentId] = useState(preselectedAgentId);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const [crmLogs, setCrmLogs] = useState<CrmLog[]>([]);
  const [activeCall, setActiveCall] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeAgent = AI_AGENTS.find((a) => a.id === selectedAgentId) || AI_AGENTS[0];

  // Initialize conversations if empty
  useEffect(() => {
    const initialConvs: Record<string, Message[]> = {};
    AI_AGENTS.forEach((agent) => {
      initialConvs[agent.id] = [
        {
          sender: "agent",
          text: agent.initialMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ];
    });
    setMessages(initialConvs);

    // Initial CRM logs
    setCrmLogs([
      {
        id: "1",
        timestamp: new Date().toLocaleTimeString(),
        event: "Serali Core initialized successfully.",
        type: "success",
      },
      {
        id: "2",
        timestamp: new Date().toLocaleTimeString(),
        event: "GDPR/SOC2 Secure Channel Established.",
        type: "secure",
      },
    ]);
  }, []);

  useEffect(() => {
    if (preselectedAgentId) {
      setSelectedAgentId(preselectedAgentId);
    }
  }, [preselectedAgentId]);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedAgentId, loading]);

  const currentChat = messages[selectedAgentId] || [];

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || loading) return;

    const userText = inputText;
    setInputText("");
    setLoading(true);

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // 1. Append user message
    const updatedMessages = {
      ...messages,
      [selectedAgentId]: [
        ...currentChat,
        { sender: "user", text: userText, timestamp },
      ],
    };
    setMessages(updatedMessages);

    // Add local trigger log to CRM logs
    const triggerLog: CrmLog = {
      id: Math.random().toString(),
      timestamp: new Date().toLocaleTimeString(),
      event: `Incoming conversational payload received from user.`,
      type: "info",
    };
    setCrmLogs((prev) => [triggerLog, ...prev]);

    try {
      // 2. Fetch API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId: selectedAgentId,
          messages: updatedMessages[selectedAgentId],
        }),
      });

      const data = await response.json();

      // 3. Append agent response
      setMessages((prev) => ({
        ...prev,
        [selectedAgentId]: [
          ...prev[selectedAgentId],
          { sender: "agent", text: data.text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ],
      }));

      // 4. Update CRM logs
      if (data.crmLog) {
        setCrmLogs((prev) => [
          {
            id: Math.random().toString(),
            timestamp: new Date().toLocaleTimeString(),
            event: data.crmLog,
            type: "success",
          },
          ...prev,
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => ({
        ...prev,
        [selectedAgentId]: [
          ...prev[selectedAgentId],
          { sender: "agent", text: "Deep connection established. My secure channels are synchronizing with your databases.", timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
        ],
      }));
    } finally {
      setLoading(false);
    }
  };

  const handleResetChat = () => {
    const freshMessages = { ...messages };
    freshMessages[selectedAgentId] = [
      {
        sender: "agent",
        text: activeAgent.initialMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ];
    setMessages(freshMessages);
    setCrmLogs((prev) => [
      {
        id: Math.random().toString(),
        timestamp: new Date().toLocaleTimeString(),
        event: `${activeAgent.name} database buffer purged. Session reset.`,
        type: "info",
      },
      ...prev,
    ]);
  };

  return (
    <section id="sandbox" className="relative py-28 bg-[#07090D] overflow-hidden border-t border-[#192032]">
      {/* Decorative gradients */}
      <div className="absolute right-[-15%] bottom-[10%] w-[450px] h-[450px] rounded-full bg-[#DFB74A]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#DFB74A] mb-4 block">
            Interactive Product Demo
          </span>
          <h2
            className="text-3xl md:text-5xl font-light text-[#F8FAFC] tracking-tight leading-[1.2] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Serali <span className="text-[#DFB74A] italic">Agent Sandbox</span>
          </h2>
          <p className="text-[#CBD5E1] font-light leading-relaxed text-base">
            Interact with our specialized digital workforce representing Serali's actual light-themed core dashboard. Toggle between roles, submit prompts, and observe live CRM event logs.
          </p>
        </div>

        {/* Outer Frame - Styled to match high-end corporate dashboard */}
        <div className="bg-[#121824] rounded-[32px] p-1.5 border border-[#192032] shadow-[0_30px_70px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Main Workspace split into sidebars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 bg-[#F8FAFC] rounded-[30px] overflow-hidden min-h-[750px]">
            
            {/* 1. Left Control Panel: Select Agents (Light background style) */}
            <div className="lg:col-span-3 bg-[#FFFFFF] p-6 border-r border-[#E2E8F0] flex flex-col justify-between">
              <div>
                {/* Brand in sandbox uses BLACK logo strictly */}
                <div className="mb-8 border-b border-[#F1F5F9] pb-4 flex justify-between items-center">
                  <Logo theme="light" size="sm" />
                  <span className="bg-[#07090D] text-[#DFB74A] text-[9px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    v1.0 Live
                  </span>
                </div>

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-4 font-mono">
                  Active Digital Workforce
                </h3>
                
                {/* Agent Button Group */}
                <div className="space-y-3">
                  {AI_AGENTS.map((agent) => {
                    const isSelected = agent.id === selectedAgentId;
                    return (
                      <button
                        key={agent.id}
                        onClick={() => setSelectedAgentId(agent.id)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                          isSelected
                            ? "border-[#DFB74A] bg-[#FDFBF2] shadow-sm"
                            : "border-[#E2E8F0] hover:border-[#CBD5E1] bg-[#FFFFFF] hover:bg-[#F8FAFC]"
                        }`}
                      >
                        <img
                          src={agent.avatar}
                          alt={agent.name}
                          className="w-10 h-10 rounded-full object-cover border border-[#E2E8F0]"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-[#07090D] truncate">
                            {agent.name}
                          </h4>
                          <span className="text-[10px] text-[#64748B] font-mono block truncate uppercase">
                            {agent.role}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="w-2 h-2 rounded-full bg-[#DFB74A] animate-ping" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Security Compliance Seal */}
              <div className="border-t border-[#F1F5F9] pt-6 mt-6">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#009678] uppercase font-bold mb-1">
                  <Shield size={12} />
                  SOC2 / GDPR Compliant
                </div>
                <p className="text-[11px] text-[#64748B] font-light leading-relaxed">
                  End-to-end data sanitization rules active. No sensitive customer telemetry is retained in platform caches.
                </p>
              </div>
            </div>

            {/* 2. Middle Column: Secure Conversational Chat Panel */}
            <div className="lg:col-span-6 bg-[#F8FAFC] flex flex-col justify-between h-[500px] lg:h-auto border-r border-[#E2E8F0]">
              {/* Header inside conversational interface */}
              <div className="p-5 bg-white border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={activeAgent.avatar}
                      alt={activeAgent.name}
                      className="w-11 h-11 rounded-full object-cover border border-[#CBD5E1]"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#009678] border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#07090D] flex items-center gap-1.5">
                      {activeAgent.name}
                      <span className="text-[10px] font-mono text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full font-light">
                        {activeAgent.accent}
                      </span>
                    </h3>
                    <p className="text-xs text-[#64748B] font-light">
                      {activeAgent.role} • {activeAgent.industry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleResetChat}
                    title="Purge session"
                    className="p-2 hover:bg-[#F1F5F9] rounded-xl text-[#64748B] hover:text-[#07090D] transition-all"
                  >
                    <RefreshCw size={16} />
                  </button>
                  <div className="px-3 py-1 bg-[#F1F5F9] border border-[#E2E8F0] rounded-full text-[10px] font-mono text-[#64748B]">
                    Active Min: £0.07
                  </div>
                </div>
              </div>

              {/* Message History area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentChat.map((msg, index) => {
                  const isAgent = msg.sender === "agent";
                  return (
                    <div
                      key={index}
                      className={`flex gap-3 max-w-[85%] ${isAgent ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                    >
                      {/* Avatar */}
                      <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border text-[10px] font-mono ${
                        isAgent ? "bg-white text-[#DFB74A] border-[#E2E8F0]" : "bg-[#07090D] text-white border-transparent"
                      }`}>
                        {isAgent ? "AI" : <User size={14} />}
                      </div>

                      {/* Content Bubble */}
                      <div className="space-y-1">
                        <div className={`p-4 rounded-[20px] text-xs leading-relaxed ${
                          isAgent
                            ? "bg-[#FFFFFF] text-[#07090D] border border-[#E2E8F0] shadow-sm rounded-tl-none"
                            : "bg-[#07090D] text-white rounded-tr-none shadow-sm"
                        }`}>
                          {msg.text}
                        </div>
                        <span className="text-[9px] text-[#94A3B8] font-mono block text-right px-1">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Loading wave indicator */}
                {loading && (
                  <div className="flex gap-3 mr-auto max-w-[85%] items-center">
                    <div className="w-8 h-8 rounded-full bg-white text-[#DFB74A] border border-[#E2E8F0] flex items-center justify-center text-[10px]">
                      AI
                    </div>
                    <div className="bg-white border border-[#E2E8F0] p-4 rounded-[20px] rounded-tl-none flex flex-col gap-2 shadow-sm">
                      <span className="text-[10px] text-[#64748B] font-mono tracking-wider animate-pulse flex items-center gap-1.5">
                        <Cpu size={10} className="animate-spin" />
                        Serali Core Routing...
                      </span>
                      {/* Waveform bars */}
                      <div className="flex items-end gap-1 h-4 px-1">
                        <div className="w-0.5 bg-[#DFB74A] rounded-full animate-wave h-3" style={{ animationDelay: "0s" }} />
                        <div className="w-0.5 bg-[#DFB74A] rounded-full animate-wave h-4" style={{ animationDelay: "0.15s" }} />
                        <div className="w-0.5 bg-[#DFB74A] rounded-full animate-wave h-2" style={{ animationDelay: "0.3s" }} />
                        <div className="w-0.5 bg-[#DFB74A] rounded-full animate-wave h-5" style={{ animationDelay: "0.45s" }} />
                        <div className="w-0.5 bg-[#DFB74A] rounded-full animate-wave h-3" style={{ animationDelay: "0.6s" }} />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-[#E2E8F0] flex gap-3 items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={`Chat with ${activeAgent.name} (e.g. "I'd like to book an appointment" or "Validate my account")...`}
                  disabled={loading}
                  className="flex-1 bg-[#F8FAFC] border border-[#E2E8F0] focus:border-[#DFB74A] rounded-2xl px-5 py-3.5 text-xs focus:outline-none transition-all disabled:opacity-50 text-[#07090D] placeholder:text-[#94A3B8]"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || loading}
                  className="p-3.5 rounded-2xl bg-[#07090D] text-white hover:bg-[#DFB74A] hover:text-[#07090D] transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>

            {/* 3. Right Column: CRM Log Console (Simulating backends) */}
            <div className="lg:col-span-3 bg-[#0B0E17] p-6 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#DFB74A] mb-4">
                  <Terminal size={16} />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Serali Telemetry Log
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] font-light leading-normal mb-6">
                  Serali syncs conversation datasets in real-time, stripping PII and validating logic branches before committing records.
                </p>

                {/* Logs container */}
                <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
                  {crmLogs.map((log) => (
                    <div
                      key={log.id}
                      className="border-b border-white/5 pb-3 last:border-0"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded uppercase ${
                          log.type === "success"
                            ? "bg-[#009678]/10 text-[#009678]"
                            : log.type === "secure"
                            ? "bg-[#38BDF8]/10 text-[#38BDF8]"
                            : "bg-white/10 text-[#CBD5E1]"
                        }`}>
                          {log.type === "success" ? "CRM SYNC" : log.type === "secure" ? "SECURE" : "EVENT"}
                        </span>
                        <span className="text-[9px] text-[#64748B] font-mono">
                          {log.timestamp}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-[#CBD5E1] leading-relaxed">
                        {log.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Indicator */}
              <div className="bg-[#182131]/60 border border-[#192032] p-4 rounded-xl mt-6">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-[#94A3B8]">Avg Latency:</span>
                  <span className="text-[#009678] font-semibold">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono mt-2">
                  <span className="text-[#94A3B8]">Encryption:</span>
                  <span className="text-white font-semibold">AES-256</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Embedded waveform animation style */}
      <style>{`
        @keyframes waveAnimation {
          0%, 100% { height: 4px; }
          50% { height: 20px; }
        }
        .animate-wave {
          animation: waveAnimation 1.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
