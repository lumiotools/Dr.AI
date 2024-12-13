'use client';

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  UserIcon,
  SettingsIcon,
  FileTextIcon,
  UploadIcon,
  LogOutIcon,
  EditIcon,
  KeyIcon,
  BellRingIcon,
  ShieldIcon,
  HeartPulseIcon,
  ClockIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

const medicalRecords = [
  {
    id: 1,
    type: "Blood Test",
    date: "2024-01-15",
    doctor: "Dr. Smith",
    hospital: "Mayo Clinic",
    file: "blood_test_results.pdf",
  },
  {
    id: 2,
    type: "X-Ray",
    date: "2024-01-10",
    doctor: "Dr. Johnson",
    hospital: "Cleveland Clinic",
    file: "chest_xray.pdf",
  },
  {
    id: 3,
    type: "MRI Scan",
    date: "2023-12-28",
    doctor: "Dr. Williams",
    hospital: "Johns Hopkins",
    file: "brain_mri.pdf",
  },
];

interface ProfileViewProps {
  isEditMode: boolean;
  onEdit: () => void;
  onSave: () => void;
  onUpload: () => void;
  uploadProgress: number;
  activeModal: string | null;
  onModalChange: (modal: string | null) => void;
}

export function ProfileView({
  isEditMode,
  onEdit,
  onSave,
  onUpload,
  uploadProgress,
  activeModal,
  onModalChange,
}: ProfileViewProps) {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    bloodType: "O+",
    allergies: "Penicillin",
    medications: "None",
    height: "180 cm",
    weight: "75 kg",
  });

  return (
    <div className="p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-500">
          Profile
        </h1>
        <Button
          variant="outline"
          className="bg-emerald-900/50 border-amber-500 text-amber-500 hover:bg-emerald-900/50 hover:text-amber-500"
          onClick={() => onModalChange("settings")}
        >
          <SettingsIcon className="h-4 w-4 mr-2" />
          Settings
        </Button>
      </div>

      {/* Personal Information */}
      <Card className="bg-emerald-900/50 border-emerald-800 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div
              className="w-20 h-20 rounded-full bg-emerald-800 flex items-center justify-center"
            >
              <UserIcon className="h-10 w-10 text-amber-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                {isEditMode ? (
                  <Input
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    className="bg-emerald-800/50 border-emerald-700"
                  />
                ) : (
                  userData.name
                )}
              </h2>
              <p className="text-emerald-300">
                {userData.email}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            onClick={isEditMode ? onSave : onEdit}
            className="text-amber-500"
          >
            {isEditMode ? "Save" : <EditIcon className="h-4 w-4" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 text-white">
            <h3 className="font-semibold text-emerald-300">
              Medical Information
            </h3>
            <p className="text-sm">
              Blood Type: {userData.bloodType}
            </p>
            <p className="text-sm">
              Allergies: {userData.allergies}
            </p>
            <p className="text-sm">
              Current Medications: {userData.medications}
            </p>
          </div>
          <div className="space-y-2 text-white">
            <h3 className="font-semibold text-emerald-300">
              Physical Details
            </h3>
            <p className="text-sm">
              Height: {userData.height}
            </p>
            <p className="text-sm">
              Weight: {userData.weight}
            </p>
          </div>
        </div>
      </Card>

      {/* Medical Records */}
      <Card className="bg-emerald-900/50 border-emerald-800 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-white">
            Medical Records
          </h3>
          <Button
            variant="outline"
            className="bg-emerald-900/50 border-amber-500 text-amber-500 hover:bg-emerald-900/50 hover:text-amber-500"
            onClick={onUpload}
          >
            <UploadIcon className="h-4 w-4 mr-2" />
            Upload Record
          </Button>
        </div>

        <div className="space-y-4">
          {medicalRecords.map((record, index) => (
            <div
              key={record.id}
              className="flex items-center justify-between p-3 bg-emerald-800/30 rounded-lg"
              id={`s9vxx4_${index}`}
            >
              <div
                className="flex items-center space-x-3"
                id={`qxa2xn_${index}`}
              >
                <FileTextIcon
                  className="h-5 w-5 text-amber-500"
                  id={`heqsc9_${index}`}
                />
                <div id={`ju64kw_${index}`}>
                  <p className="font-medium text-white" id={`8lbbaj_${index}`}>
                    {record.type}
                  </p>
                  <p
                    className="text-sm text-emerald-300"
                    id={`svczk7_${index}`}
                  >
                    {record.date} • {record.doctor}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                className="bg-emerald-900/50 border-amber-500 text-amber-500 hover:bg-emerald-900/50 hover:text-amber-500"
                id={`jh6nmy_${index}`}
              >
                View
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Settings Modal */}
      <Dialog
        open={activeModal === "settings"}
        onOpenChange={() => onModalChange(null)}
      >
        <DialogContent
          className="bg-emerald-900 border-emerald-800"
        >
          <DialogHeader>
            <DialogTitle className="text-amber-500">
              Settings
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <KeyIcon className="h-4 w-4 mr-2" />
              Change Password
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <BellRingIcon className="h-4 w-4 mr-2" />
              Notification Preferences
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <ShieldIcon className="h-4 w-4 mr-2" />
              Privacy Settings
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <HeartPulseIcon className="h-4 w-4 mr-2" />
              Health Data Sharing
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
            >
              <ClockIcon className="h-4 w-4 mr-2" />
              Appointment Reminders
            </Button>
            <Button
              variant="destructive"
              className="w-full justify-start mt-4"
            >
              <LogOutIcon className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Upload Modal */}
      <Dialog
        open={activeModal === "upload"}
        onOpenChange={() => onModalChange(null)}
      >
        <DialogContent
          className="bg-emerald-900 border-emerald-800"
        >
          <DialogHeader>
            <DialogTitle className="text-amber-500">
              Upload Medical Record
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div
              className="p-8 border-2 border-dashed border-emerald-700 rounded-lg text-center"
            >
              <UploadIcon
                className="h-8 w-8 mx-auto text-emerald-500 mb-2"
              />
              <p className="text-sm text-emerald-300">
                Drop your files here or click to browse
              </p>
            </div>
            <Progress value={uploadProgress} className="w-full" />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
