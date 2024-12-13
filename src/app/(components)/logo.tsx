'use client';

import React from "react";

interface LogoProps {
  size?: "small" | "medium" | "large";
  onHomeClick?: () => void;
}

export function Logo({ size = "medium", onHomeClick }: LogoProps) {
  const sizeClasses = {
    small: "text-2xl",
    medium: "text-4xl",
    large: "text-6xl",
  };

  return (
    <div
      className={`font-bold ${sizeClasses[size]} text-amber-500 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform`}
      onClick={onHomeClick}
    >
      <span className="tracking-tight">
        Dr. AI
      </span>
      <div className="w-16 h-1 bg-amber-500 mt-2 rounded-full" />
    </div>
  );
}
