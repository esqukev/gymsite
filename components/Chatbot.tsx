"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import { chatbotMockReplies } from "@/lib/mock-landing";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; bot: boolean }[]>([
    { text: "Hola, soy el asistente de FFO GYM. ¿En qué puedo ayudarte?", bot: true },
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { text: input.trim(), bot: false }]);
    setInput("");
    const reply = chatbotMockReplies[Math.floor(Math.random() * chatbotMockReplies.length)];
    setTimeout(() => setMessages((m) => [...m, { text: reply, bot: true }]), 800);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#4FBC01] text-[#121212] flex items-center justify-center shadow-lg hover:scale-110 transition-transform glow-green"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
        >
          <div className="p-4 border-b border-white/10 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4FBC01]" />
            <span className="font-semibold text-[#FEFEFE]">FFO GYM Assistant</span>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.bot ? "justify-start" : "justify-end"}`}
              >
                <span
                  className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                    msg.bot
                      ? "bg-white/10 text-[#FEFEFE]"
                      : "bg-[#4FBC01] text-[#121212]"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2 border-t border-white/10">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Escribe un mensaje..."
              className="flex-1 px-4 py-3 rounded-xl bg-[#121212]/60 border border-white/20 text-[#FEFEFE] placeholder-[#FEFEFE]/50 focus:border-[#4FBC01] text-sm"
            />
            <button
              onClick={send}
              className="p-3 rounded-xl bg-[#4FBC01] text-[#121212] hover:bg-[#6dd118] transition-colors"
              aria-label="Enviar"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
