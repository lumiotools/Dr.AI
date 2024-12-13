"use client";

import React from "react";
import { HomeView } from "../(components)/home-view";
import { HealthPocketView } from "../(components)/health-pocket-view";
import { GlobalCareView } from "../(components)/global-care-view";
import { FertilityCareView } from "../(components)/fertility-care-view";
import { ProfileView } from "../(components)/profile-view";
import { SymptomChecker } from "../(components)/symptom-checker";
import { Logo } from "../(components)/logo";
import { BottomNav } from "../(components)/bottom-nav";

export default function Dashboard() {
  const [currentTab, setCurrentTab] = React.useState("home");
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const handleHomeClick = () => {
    setCurrentTab("home");
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    setActiveModal("upload");
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setActiveModal(null), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="flex-1 overflow-y-auto pb-20 bg-[#0A1B15]">
      <div className="sticky top-0 z-10 bg-emerald-950/95 backdrop-blur-sm p-4 border-b border-emerald-900 flex justify-between items-center">
        <Logo size="small" onHomeClick={handleHomeClick} />
        <div className="text-sm text-emerald-300">
          {currentTab === "home" && "Home"}
          {currentTab === "health" && "Health Pocket"}
          {currentTab === "global" && "Global Care"}
          {currentTab === "fertility" && "Fertility Care"}
          {currentTab === "profile" && "Profile"}
          {currentTab === "symptom" && "Symptom Checker"}
        </div>
      </div>

      <div className="animate-fadeIn transition-all duration-300">
        {currentTab === "home" && <HomeView onTabChange={setCurrentTab} />}

        {currentTab === "health" && <HealthPocketView />}
        {currentTab === "global" && <GlobalCareView />}
        {currentTab === "fertility" && <FertilityCareView />}
        {currentTab === "profile" && (
          <ProfileView
            isEditMode={isEditMode}
            onEdit={handleEdit}
            onSave={handleSave}
            onUpload={simulateUpload}
            uploadProgress={uploadProgress}
            activeModal={activeModal}
            onModalChange={setActiveModal}
          />
        )}

        {currentTab === "symptom" && <SymptomChecker />}
      </div>
      <BottomNav activeTab={currentTab} onTabChange={setCurrentTab} />
    </div>
  );
}
