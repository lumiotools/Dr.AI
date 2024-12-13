'use client';

import React from "react";
import {
  HomeIcon,
  HeartPulseIcon,
  GlobeIcon,
  BabyIcon,
  UserIcon,
} from "lucide-react";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "health", icon: HeartPulseIcon, label: "Health Pocket" },
    { id: "global", icon: GlobeIcon, label: "Global Care" },
    { id: "fertility", icon: BabyIcon, label: "Fertility" },
    { id: "profile", icon: UserIcon, label: "Profile" },
  ];

  const handleTabChange = (id: string) => {
    onTabChange(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className="bg-emerald-900 p-4 flex justify-around items-center border-t border-emerald-800 fixed bottom-0 w-full z-50"
    >
      {tabs.map(({ id, icon: Icon, label }, index) => (
        <button
          key={id}
          onClick={() => handleTabChange(id)}
          className={`flex flex-col items-center transition-all duration-300 ${
            activeTab === id
              ? "text-amber-500 scale-110 border-t-2 border-[#E1B155] pt-1"
              : "text-emerald-300 hover:text-amber-400"
          }`}
          id={`ebhrls_${index}`}
        >
          <Icon className="h-6 w-6" id={`x1euqx_${index}`} />
          <span className="text-xs mt-1 text-white" id={`s2fifk_${index}`}>
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}
