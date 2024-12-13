'use client';

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  BabyIcon,
  CalendarIcon,
  ThermometerIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const educationalTips = [
  {
    title: "Understanding IVF Success Rates",
    content:
      "IVF success rates are around 45% for women under 35. Factors affecting success include age, health conditions, and lifestyle choices.",
    color: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    title: "Lifestyle and Fertility",
    content:
      "Maintaining a healthy lifestyle significantly improves fertility. Focus on balanced nutrition, regular exercise, and stress management.",
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    title: "Egg Freezing Options",
    content:
      "Egg freezing can be a viable option for future pregnancies. Best results are achieved when eggs are frozen before age 35.",
    color: "bg-green-100 dark:bg-green-900/20",
  },
];

const resources = [
  {
    title: "IVF Process Guide",
    url: "https://example.com/ivf-guide",
    icon: BabyIcon,
  },
  {
    title: "Fertility Diet Tips",
    url: "https://example.com/fertility-diet",
    icon: CalendarIcon,
  },
  {
    title: "Treatment Options",
    url: "https://example.com/treatment-options",
    icon: ThermometerIcon,
  },
];

export function FertilityCareView() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationalTips.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + educationalTips.length) % educationalTips.length,
    );
  };

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold text-amber-500">
        Fertility Care
      </h1>

      {/* Carousel Section */}
      <Card className="bg-emerald-900/50 border-emerald-800 p-6">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {educationalTips.map((tip, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-4"
                  id={`27ozkd_${index}`}
                >
                  <div
                    className={`${tip.color} p-6 rounded-lg text-center space-y-2`}
                    id={`ui6icz_${index}`}
                  >
                    <h3
                      className="text-xl font-semibold text-emerald-950 dark:text-emerald-50"
                      id={`k57nby_${index}`}
                    >
                      {tip.title}
                    </h3>
                    <p
                      className="text-emerald-800 dark:text-emerald-200"
                      id={`26mslx_${index}`}
                    >
                      {tip.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-800/50 text-white rounded-full p-2 hover:bg-emerald-700/50"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-800/50 text-white rounded-full p-2 hover:bg-emerald-700/50"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <div
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            {educationalTips.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index
                    ? "bg-amber-500"
                    : "bg-emerald-700 hover:bg-emerald-600"
                }`}
                onClick={() => setCurrentSlide(index)}
                id={`8v2u1f_${index}`}
              />
            ))}
          </div>
        </div>
      </Card>

      {/* Resource Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {resources.map((resource, index) => (
          <Button
            key={index}
            variant="outline"
            className="border-emerald-700 hover:bg-emerald-800/50 text-emerald-300 h-auto py-4"
            onClick={() => window.open(resource.url, "_blank")}
            id={`knwao0_${index}`}
          >
            <resource.icon
              className="h-5 w-5 mr-2 text-amber-500"
              id={`g5amc7_${index}`}
            />
            <span className="flex-1" id={`yoxy16_${index}`}>
              {resource.title}
            </span>
            <ExternalLinkIcon className="h-4 w-4 ml-2" id={`a1di6n_${index}`} />
          </Button>
        ))}
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-emerald-900/50 border-emerald-800 p-4">
          <CalendarIcon className="h-8 w-8 text-amber-500 mb-2" />
          <h3 className="font-semibold text-white">
            Cycle Day
          </h3>
          <p className="text-2xl text-emerald-300">
            Day 14 of 28
          </p>
        </Card>

        <Card className="bg-emerald-900/50 border-emerald-800 p-4">
          <BabyIcon className="h-8 w-8 text-amber-500 mb-2" />
          <h3 className="font-semibold text-white">
            Fertility Window
          </h3>
          <p className="text-2xl text-emerald-300">
            In 3 days
          </p>
        </Card>

        <Card className="bg-emerald-900/50 border-emerald-800 p-4">
          <ThermometerIcon
            className="h-8 w-8 text-amber-500 mb-2"
          />
          <h3 className="font-semibold text-white">
            Basal Temperature
          </h3>
          <p className="text-2xl text-emerald-300">
            36.5°C
          </p>
        </Card>
      </div>
    </div>
  );
}
