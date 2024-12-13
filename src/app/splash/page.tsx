'use client';

import React from "react";
import { Logo } from "../(components)/logo";

export default function Splash() {
  return (
    <div
      className="h-full w-full flex items-center justify-center bg-emerald-950"
    >
      <div className="animate-fade-in">
        <Logo size="large" />
      </div>
    </div>
  );
}
