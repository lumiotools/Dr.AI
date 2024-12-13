'use client';

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  SendIcon,
  MicIcon,
  XIcon,
  MessageSquareIcon,
  ArrowRightIcon,
  LinkIcon,
} from "lucide-react";

const chatbotData = {
  greetings: [
    "Hello! How can I assist you today?",
    "Hi there! I'm here to help with your healthcare needs.",
    "Welcome to Dr. AI! Ask me anything about your health or our services.",
  ],

  faq: {
    symptoms: [
      {
        question: "What should I do if I have a fever?",
        response:
          "If you have a fever, try to rest, stay hydrated, and monitor your temperature. If it persists for more than 3 days, consult a doctor.",
        link: { text: "View Health Pocket", path: "health" },
      },
      {
        question: "I have a cough and sore throat. What can I do?",
        response:
          "A cough and sore throat might indicate a viral infection. Stay hydrated, try warm saltwater gargles, and avoid irritants. If symptoms worsen, visit a healthcare provider.",
        link: { text: "Check Symptoms", path: "symptom" },
      },
    ],

    appointments: [
      {
        question: "How do I book an appointment?",
        response:
          "To book an appointment, please visit the 'Doctor/Hospital Matching' module on the home page and select your preferred doctor.",
        link: { text: "Find Hospitals", path: "global" },
      },
      {
        question: "Can I cancel or reschedule my appointment?",
        response:
          "Yes, you can reschedule or cancel appointments in the 'Health Pocket' module under your profile.",
        link: { text: "Go to Health Pocket", path: "health" },
      },
    ],

    navigation: [
      {
        question: "How can I access my medical records?",
        response:
          "Your medical records are available in the 'Health Pocket' module on the home page.",
        link: { text: "View Records", path: "health" },
      },
      {
        question: "Where can I find information about fertility care?",
        response:
          "Fertility care resources are available in the 'Fertility Care Navigator' module on the home page.",
        link: { text: "Explore Fertility Care", path: "fertility" },
      },
    ],
  },
  fallback: [
    "I'm sorry, I didn't quite understand that. Could you rephrase?",
    "I'm here to help! Try asking about symptoms, booking appointments, or navigating the app.",
  ],
};

interface ChatMessage {
  type: "user" | "bot";
  text: string;
  link?: { text: string; path: string };
}

export function ChatBot({
  onNavigate,
}: {
  onNavigate?: (path: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [voiceMode, setVoiceMode] = useState(false);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const randomGreeting =
        chatbotData.greetings[
          Math.floor(Math.random() * chatbotData.greetings.length)
        ];

      simulateResponse({ type: "bot", text: randomGreeting });
    }
  }, [isOpen,messages.length]);

  useEffect(() => {
    // Load chat history from localStorage
    const savedHistory = localStorage.getItem("chatHistory");
    if (savedHistory) {
      setMessages(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    // Save chat history to localStorage
    if (messages.length > 0) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  const simulateResponse = (response: ChatMessage) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const findResponse = (input: string) => {
    const lowercaseInput = input.toLowerCase();
    let response: ChatMessage | null = null;

    // Search through all FAQ categories
    Object.entries(chatbotData.faq).some(([, items]) => {
      items.some((item) => {
        if (lowercaseInput.includes(item.question.toLowerCase())) {
          response = {
            type: "bot",
            text: item.response,
            link: item.link,
          };
          return true;
        }
        return false;
      });
      if (response) return true;
      return false;
    });

    return (
      response || {
        type: "bot" as const,
        text: chatbotData.fallback[
          Math.floor(Math.random() * chatbotData.fallback.length)
        ],
      }
    );
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: inputValue }]);
    setInputValue("");

    const response = findResponse(inputValue);
    simulateResponse(response);
  };

  const handleVoiceInput = () => {
    setVoiceMode(true);
    // Simulate voice input
    setTimeout(() => {
      setInputValue("How do I book an appointment?");
      setVoiceMode(false);
    }, 1500);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 rounded-full w-12 h-12 bg-amber-500 hover:bg-amber-600 text-emerald-950 shadow-lg animate-pulse"
      >
        <MessageSquareIcon className="h-6 w-6" />
      </Button>

      {isOpen && (
        <Card
          className="fixed bottom-24 right-4 w-96 h-[500px] bg-emerald-900 border-emerald-800 flex flex-col shadow-xl"
        >
          <div
            className="p-4 bg-emerald-900 border-b border-emerald-800 flex justify-between items-center"
          >
            <h3 className="text-lg font-semibold text-amber-500">
              AI Live Concierge
            </h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-amber-500"
            >
              <XIcon className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                id={`jywjca_${index}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === "user"
                      ? "bg-amber-500 text-emerald-950"
                      : "bg-emerald-800 text-white"
                  }`}
                  id={`536ogr_${index}`}
                >
                  <p id={`94aa8x_${index}`}>{message.text}</p>
                  {message.link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 text-amber-500 hover:text-amber-400 p-0 h-auto flex items-center gap-1"
                      onClick={() => onNavigate?.(message.link!.path)}
                      id={`uijc3y_${index}`}
                    >
                      <LinkIcon className="h-3 w-3" id={`t1px0x_${index}`} />
                      {message.link.text}
                      <ArrowRightIcon
                        className="h-3 w-3"
                        id={`ghzxxw_${index}`}
                      />
                    </Button>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div
                  className="bg-emerald-800 text-white p-3 rounded-lg"
                >
                  <span className="inline-flex gap-1">
                    <span className="animate-bounce">
                      .
                    </span>
                    <span className="animate-bounce delay-100">
                      .
                    </span>
                    <span className="animate-bounce delay-200">
                      .
                    </span>
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-emerald-800">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className={`text-amber-500 hover:text-amber-600 ${
                  voiceMode ? "animate-pulse" : ""
                }`}
                onClick={handleVoiceInput}
                disabled={voiceMode}
              >
                <MicIcon className="h-5 w-5" />
              </Button>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 bg-emerald-800/50 border-emerald-700 text-white"
              />

              <Button
                onClick={handleSend}
                className="bg-amber-500 hover:bg-amber-600 text-emerald-950"
              >
                <SendIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
}
