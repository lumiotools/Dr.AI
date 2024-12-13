'use client';

import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  MapPinIcon,
  SearchIcon,
  StarIcon,
  PhoneIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Hospital {
  id: number;
  name: string;
  location: string;
  rating: number;
  specialties: string[];
  coordinates: { x: string; y: string };
  contact: {
    phone: string;
    email: string;
    website: string;
  };
  description: string;
  accreditations: string[];
}

const hospitals = [
  {
    id: 1,
    name: "Mayo Clinic",
    location: "Rochester, Minnesota, USA",
    rating: 4.9,
    specialties: ["Cardiology", "Oncology", "Neurology"],
    coordinates: { x: "30%", y: "40%" },
    contact: {
      phone: "+1 507-284-2511",
      email: "info@mayoclinic.org",
      website: "www.mayoclinic.org",
    },
    description:
      "World-renowned medical center with exceptional patient care, research, and education.",
    accreditations: ["JCI", "AAHRPP", "CAP"],
  },
  {
    id: 2,
    name: "Cleveland Clinic",
    location: "Cleveland, Ohio, USA",
    rating: 4.8,
    specialties: ["Cardiology", "Orthopedics", "Urology"],
    coordinates: { x: "45%", y: "35%" },
    contact: {
      phone: "+1 216-444-2200",
      email: "info@ccf.org",
      website: "www.clevelandclinic.org",
    },
    description:
      "Leading healthcare provider known for innovative treatments and research.",
    accreditations: ["JCI", "MAGNET", "CAP"],
  },
  {
    id: 3,
    name: "Johns Hopkins Hospital",
    location: "Baltimore, Maryland, USA",
    rating: 4.9,
    specialties: ["Oncology", "Neurology", "Pediatrics"],
    coordinates: { x: "60%", y: "45%" },
    contact: {
      phone: "+1 410-955-5000",
      email: "info@jhmi.edu",
      website: "www.hopkinsmedicine.org",
    },
    description:
      "Pioneer in patient care, research and medical education for over a century.",
    accreditations: ["JCI", "NCI", "FACT"],
  },
];

const specialties = [
  "All",
  "Cardiology",
  "Oncology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Urology",
];

const locations = ["All", "USA", "Europe", "Asia"];

export function GlobalCareView() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedHospital, setSelectedHospital] = useState<Hospital | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredHospitals = hospitals.filter((hospital) => {
    const matchesSearch = hospital.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All" ||
      hospital.specialties.includes(selectedSpecialty);
    const matchesLocation =
      selectedLocation === "All" ||
      hospital.location.includes(selectedLocation);
    return matchesSearch && matchesSpecialty && matchesLocation;
  });

  const handleHospitalClick = (hospital: Hospital) => {
    setSelectedHospital(hospital);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-amber-500">
          Global Care Navigator
        </h1>
        <Button
          variant="outline"
          onClick={() =>
            setViewMode((prev) => (prev === "list" ? "map" : "list"))
          }
          className="border-amber-500 text-amber-500"
        >
          {viewMode === "list" ? "View Map" : "View List"}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon
            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-500"
          />
          <Input
            placeholder="Search hospitals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-emerald-900/50 border-emerald-700 pl-10"
          />
        </div>

        <Select
          value={selectedSpecialty}
          onValueChange={setSelectedSpecialty}
        >
          <SelectTrigger
            className="w-[200px] bg-emerald-900/50 border-emerald-700"
          >
            <SelectValue placeholder="Specialty" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map((specialty, index) => (
              <SelectItem
                key={specialty}
                value={specialty}
                id={`j8cyv5_${index}`}
              >
                {specialty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={selectedLocation}
          onValueChange={setSelectedLocation}
        >
          <SelectTrigger
            className="w-[200px] bg-emerald-900/50 border-emerald-700"
          >
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location, index) => (
              <SelectItem
                key={location}
                value={location}
                id={`30ciya_${index}`}
              >
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {viewMode === "list" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredHospitals.map((hospital, index) => (
            <Card
              key={hospital.id}
              className="bg-emerald-900/50 border-emerald-800 p-6 cursor-pointer hover:bg-emerald-800/50 transition-all"
              onClick={() => handleHospitalClick(hospital)}
              id={`200k0t_${index}`}
            >
              <div
                className="flex justify-between items-start mb-4"
                id={`4kvqsv_${index}`}
              >
                <div id={`20o7ni_${index}`}>
                  <h3
                    className="text-xl font-semibold text-white"
                    id={`bm4gvp_${index}`}
                  >
                    {hospital.name}
                  </h3>
                  <div
                    className="flex items-center text-emerald-300 mt-1"
                    id={`h40829_${index}`}
                  >
                    <MapPinIcon
                      className="h-4 w-4 mr-2"
                      id={`oxxo9a_${index}`}
                    />
                    {hospital.location}
                  </div>
                </div>
                <div
                  className="flex items-center text-amber-500"
                  id={`18wxsx_${index}`}
                >
                  <StarIcon className="h-4 w-4 mr-1" id={`0jaucw_${index}`} />
                  {hospital.rating}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4" id={`9oh6n3_${index}`}>
                {hospital.specialties.map((specialty, index) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-300 text-sm"
                    id={`ahuqqz_${index}`}
                  >
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="text-sm text-emerald-400" id={`ueh5gv_${index}`}>
                {hospital.accreditations.join(" • ")}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-emerald-900/50 border-emerald-800 p-4">
          <div
            className="relative h-[500px] bg-emerald-800/30 rounded-lg overflow-hidden"
          >
            {/* Static Map Background */}
            <div className="absolute inset-0 bg-emerald-900/20" />

            {/* Hospital Pins */}
            {filteredHospitals.map((hospital, index) => (
              <div
                key={hospital.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform"
                style={{
                  left: hospital.coordinates.x,
                  top: hospital.coordinates.y,
                }}
                onClick={() => handleHospitalClick(hospital)}
                id={`pqzlql_${index}`}
              >
                <div className="relative" id={`u1bqmc_${index}`}>
                  <MapPinIcon
                    className="h-8 w-8 text-amber-500"
                    id={`pdl96s_${index}`}
                  />
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap bg-emerald-800 px-2 py-1 rounded text-sm"
                    id={`otksbx_${index}`}
                  >
                    {hospital.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className="bg-emerald-900 border-emerald-800"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl text-amber-500">
              {selectedHospital?.name}
            </DialogTitle>
            <DialogDescription className="text-emerald-300">
              {selectedHospital?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center text-emerald-300">
              <MapPinIcon className="h-5 w-5 mr-2" />
              {selectedHospital?.location}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center text-emerald-300">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  {selectedHospital?.contact.phone}
                </div>
                <div className="flex items-center text-emerald-300">
                  <MailIcon className="h-4 w-4 mr-2" />
                  {selectedHospital?.contact.email}
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="w-full border-amber-500 text-amber-500"
                  onClick={() =>
                    window.open(
                      `https://${selectedHospital?.contact.website}`,
                      "_blank",
                    )
                  }
                >
                  Visit Website
                  <ExternalLinkIcon className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Specialties
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedHospital?.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 rounded-full bg-emerald-800/50 text-emerald-300 text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">
                Accreditations
              </h4>
              <div className="flex gap-2">
                {selectedHospital?.accreditations.map((accreditation) => (
                  <span
                    key={accreditation}
                    className="px-2 py-1 bg-emerald-800/50 rounded text-emerald-300 text-sm"
                  >
                    {accreditation}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
