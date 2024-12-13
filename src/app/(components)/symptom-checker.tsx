'use client';

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  BrainIcon,
  XCircleIcon,
  AlertCircleIcon,
  ClockIcon,
  HistoryIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const symptoms = [
  "fever",
  "headache",
  "cough",
  "sore throat",
  "dizziness",
  "fatigue",
  "nausea",
  "chest pain",
  "shortness of breath",
  "muscle ache",
];

interface Suggestion {
  suggestion: string;
  severity: {
    low: string;
    moderate: string;
    high: string;
  };
}

interface Suggestions {
  [key: string]: Suggestion;
}

const suggestions: Suggestions = {
  fever: {
    suggestion: "Take rest and drink plenty of fluids...",
    severity: {
      low: "Use over-the-counter fever reducers if needed.",
      moderate: "Take fever medication and monitor closely.",
      high: "Seek immediate medical attention if temperature exceeds 103°F (39.4°C).",
    },
  },
  headache: {
    suggestion:
      "Rest in a quiet, dark room. Try over-the-counter pain relievers.",
    severity: {
      low: "Practice relaxation techniques and stay hydrated.",
      moderate: "Take recommended pain medication and rest.",
      high: "Consult a doctor if accompanied by vision changes or severe pain.",
    },
  },
  cough: {
    suggestion: "Stay hydrated and use honey for natural relief.",
    severity: {
      low: "Use honey and warm liquids for relief.",
      moderate: "Consider over-the-counter cough medicine.",
      high: "Seek medical attention if cough persists over 2 weeks.",
    },
  },
  // Add more symptoms with severity levels
};

type SeverityLevel = 'low' | 'moderate' | 'high';

export function SymptomChecker() {
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingSuggestions, setMatchingSuggestions] = useState<string[]>([]);
  const [selectedSymptom, setSelectedSymptom] = useState<Suggestion | null>(null);
  const [severity, setSeverity] = useState<SeverityLevel>('low');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const matches = symptoms.filter((symptom) =>
        symptom.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setMatchingSuggestions(matches);
    } else {
      setMatchingSuggestions([]);
    }
  }, [searchTerm]);

  const handleSymptomSelect = (symptom: string) => {
    setIsLoading(true);
    setSearchTerm(symptom);
    setMatchingSuggestions([]);

    // Simulate API call
    setTimeout(() => {
      setSelectedSymptom(suggestions[symptom]);
      if (!searchHistory.includes(symptom)) {
        setSearchHistory((prev) => [symptom, ...prev].slice(0, 5));
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedSymptom(null);
    setMatchingSuggestions([]);
    setSeverity('low');
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-amber-500">
        AI Symptom Checker
      </h1>

      <Card className="bg-emerald-900/50 border-emerald-800 p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <BrainIcon className="h-8 w-8 text-amber-500" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Advanced Symptom Analysis
              </h3>
              <p className="text-sm text-white">
                Get instant AI-powered health insights and recommendations
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="flex space-x-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Type your symptoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-emerald-800/50 border-emerald-700 text-white pr-10"
                />

                {searchTerm && (
                  <XCircleIcon
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-300 cursor-pointer hover:text-emerald-100"
                    onClick={handleClear}
                  />
                )}
              </div>
              <Select 
                value={severity} 
                onValueChange={(value: SeverityLevel) => setSeverity(value)}
              >
                <SelectTrigger
                  className="w-[140px] bg-emerald-800/50 border-emerald-700"
                >
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    Low
                  </SelectItem>
                  <SelectItem value="moderate">
                    Moderate
                  </SelectItem>
                  <SelectItem value="high">
                    High
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {matchingSuggestions.length > 0 && (
              <Card
                className="absolute w-full mt-1 bg-emerald-800/90 border-emerald-700 z-10"
              >
                <ul className="p-2 space-y-1">
                  {matchingSuggestions.map((symptom, index) => (
                    <li
                      key={symptom}
                      className="px-3 py-2 hover:bg-emerald-700/50 rounded-md cursor-pointer text-emerald-100"
                      onClick={() => handleSymptomSelect(symptom)}
                      id={`6btknb_${index}`}
                    >
                      {symptom}
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>

          {isLoading && (
            <div
              className="flex items-center justify-center p-4 text-emerald-300"
            >
              <ClockIcon className="animate-spin h-5 w-5 mr-2" />
              Analyzing symptoms...
            </div>
          )}

          {selectedSymptom && !isLoading && (
            <Card className="bg-emerald-800/50 p-4 space-y-4">
              <div className="flex items-start space-x-2">
                <AlertCircleIcon
                  className="h-5 w-5 text-amber-500 mt-1"
                />
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    Recommendation:
                  </h4>
                  <p className="text-emerald-100">
                    {selectedSymptom.suggestion}
                  </p>
                  <p className="text-emerald-100 mt-2">
                    {selectedSymptom.severity[severity as SeverityLevel]}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {searchHistory.length > 0 && (
            <div className="mt-4">
              <div
                className="flex items-center text-sm text-emerald-300 mb-2"
              >
                <HistoryIcon className="h-4 w-4 mr-1" />
                Recent Searches
              </div>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((item, index) => (
                  <Button
                    key={item}
                    variant="outline"
                    size="sm"
                    className="text-emerald-300 border-emerald-700 hover:bg-emerald-800/50"
                    onClick={() => handleSymptomSelect(item)}
                    id={`94fkl9_${index}`}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
