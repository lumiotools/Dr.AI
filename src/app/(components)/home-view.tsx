'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  BrainIcon,
  HeartPulseIcon,
  GlobeIcon,
  BabyIcon,
  SparklesIcon,
  RefreshCwIcon,
  ChevronRightIcon,
} from "lucide-react";
import { ChatBot } from "./chat-bot";

interface HomeViewProps {
  onTabChange: (tab: string) => void;
}

export function HomeView({ onTabChange }: HomeViewProps) {
  const [currentQuote, setCurrentQuote] = React.useState(
    "Stay hydrated, drink 2L of water daily.",
  );

  const quotes = [
    "Stay hydrated, drink 2L of water daily.",
    "Walk 10,000 steps for better health.",
    "Meditate for 10 minutes each day.",
    "Eat more fruits and vegetables.",
  ];

  const refreshQuote = () => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(newQuote);
  };

  return (
    <div className="p-4 space-y-8">
      {/* Welcome Section with Profile */}
      <div
        className="flex items-center justify-between mb-6"
      >
        <div className="flex items-center gap-4">
          <Avatar
            className="h-16 w-16 border-2 border-amber-500 ring-2 ring-emerald-900"
          >
            <AvatarImage
              src="/profile-image.jpg" // Make sure to place the image in your public folder
              alt="Priyanka Mathur"
              className="object-cover"
            />

            <AvatarFallback
              className="text-lg bg-emerald-800 text-amber-500"
            >
              PM
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl font-bold text-amber-500">
              Welcome back, Priyanka Mathur
            </h1>
            <p className="text-emerald-300 mt-1">
              Let&apos;s check your health updates
            </p>
          </div>
        </div>
      </div>

      {/* Module Sections */}
      <div className="space-y-4">
        {/* Health Pocket */}
        <section
          className="bg-emerald-900/30 p-6 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <HeartPulseIcon className="h-12 w-12 text-amber-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Health Pocket
              </h3>
              <p className="text-white/80">
                Monitor your vitals: BP 120/80, BMI 24.5
              </p>
            </div>
          </div>
          <Button
            onClick={() => onTabChange("health")}
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950"
          >
            View Details
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* Symptom Checker */}
        <section
          className="bg-emerald-900/30 p-6 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <BrainIcon className="h-12 w-12 text-amber-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Symptom Checker
              </h3>
              <p className="text-white/80">
                Get instant AI-powered health insights
              </p>
            </div>
          </div>
          <Button
            onClick={() => onTabChange("symptom")}
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950"
          >
            Check Symptoms
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* Global Care Navigator */}
        <section
          className="bg-emerald-900/30 p-6 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <GlobeIcon className="h-12 w-12 text-amber-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Global Care
              </h3>
              <p className="text-white/80">
                Find top hospitals worldwide
              </p>
            </div>
          </div>
          <Button
            onClick={() => onTabChange("global")}
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950"
          >
            Explore
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* Fertility Care */}
        <section
          className="bg-emerald-900/30 p-6 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <BabyIcon className="h-12 w-12 text-amber-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Fertility Care
              </h3>
              <p className="text-white/80">
                IVF success rate: 45% per cycle
              </p>
            </div>
          </div>
          <Button
            onClick={() => onTabChange("fertility")}
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950"
          >
            Learn More
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </section>

        {/* Longevity & Wellness */}
        <section
          className="bg-emerald-900/30 p-6 rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <SparklesIcon className="h-12 w-12 text-amber-500" />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Daily Wellness Tip
              </h3>
              <p className="text-white/80">
                {currentQuote}
              </p>
            </div>
          </div>
          <Button
            onClick={refreshQuote}
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-emerald-950"
          >
            <RefreshCwIcon className="h-4 w-4" />
          </Button>
        </section>
      </div>

      {/* Chatbot */}
      <ChatBot onNavigate={onTabChange} />
    </div>
  );
}
