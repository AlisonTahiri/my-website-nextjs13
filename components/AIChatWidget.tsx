"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChatDots, BsX, BsSend, BsStars } from "react-icons/bs";
import { chatbotResponses, chatbotKeywords } from "@/lib/data";
import { useLanguage } from "@/context/language-context";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

function matchResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [category, keywords] of Object.entries(chatbotKeywords)) {
    for (const keyword of keywords) {
      if (lower.includes(keyword)) {
        return chatbotResponses[category] || chatbotResponses.default;
      }
    }
  }

  return chatbotResponses.default;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, text: chatbotResponses.greeting, sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate typing delay
    setTimeout(() => {
      const response = matchResponse(userMessage.text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: response, sender: "bot" },
      ]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <motion.button
        className="fixed bottom-5 right-20 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
        style={{ background: "var(--gradient-primary)" }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <BsX className="text-white text-xl" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <BsChatDots className="text-white text-lg" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-20 right-5 z-50 w-[340px] sm:w-[380px] rounded-2xl overflow-hidden shadow-2xl glass-strong"
          >
            {/* Header */}
            <div
              className="px-4 py-3 flex items-center gap-2"
              style={{ background: "var(--gradient-primary)" }}
            >
              <BsStars className="text-white text-sm" />
              <span className="text-white text-sm font-semibold">
                {t.chat.title}
              </span>
              <span className="ml-auto text-white/70 text-xs">
                {t.chat.poweredBy}
              </span>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "ml-auto bg-[var(--color-primary)] text-white rounded-br-sm"
                      : "mr-auto bg-[var(--color-surface-elevated)] dark:bg-white/5 text-[var(--color-text-primary)] rounded-bl-sm border border-[var(--color-border)]"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-[var(--color-border)] flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t.chat.placeholder}
                className="flex-1 px-3 py-2 rounded-xl text-sm bg-[var(--color-surface)] border border-[var(--color-border)] focus:outline-none focus:border-[var(--color-primary)] transition-colors text-[var(--color-text-primary)]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40 cursor-pointer hover:scale-105"
                style={{ background: "var(--gradient-primary)" }}
                aria-label={t.chat.send}
              >
                <BsSend className="text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
