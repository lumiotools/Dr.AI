'use client';

import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

export function SocialButton({ icon, label, onClick }: SocialButtonProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="w-full border-emerald-700 text-emerald-100 bg-emerald-900/50 hover:bg-emerald-900/50 hover:text-emerald-100"
    >
      {icon}
      <span className="ml-2">
        {label}
      </span>
    </Button>
  );
}
