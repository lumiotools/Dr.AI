"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FingerprintIcon, FacebookIcon, MailIcon } from "lucide-react";
import { SocialButton } from "../(components)/social-button";

interface AuthProps {
  onLogin: () => void;
}

export const AuthPage: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailLogin = () => {
    if (email.includes("@")) {
      onLogin();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col p-6 bg-emerald-950">
      <h1 className="text-4xl font-bold text-amber-500 mb-8 mt-12">
        Welcome to Dr. AI
      </h1>

      <div className="space-y-4 mt-8">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-emerald-900/50 border-emerald-700"
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-emerald-900/50 border-emerald-700"
        />

        <Button
          onClick={handleEmailLogin}
          className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950"
        >
          <MailIcon className="mr-2 h-4 w-4" />
          Login with Email
        </Button>

        <div className="flex flex-col gap-3 mt-4 bg-emerald-800/30 p-4 rounded-lg">
          <SocialButton
            icon={<FacebookIcon className="h-5 w-5" />}
            label="Continue with Facebook"
            onClick={onLogin}
          />

          <SocialButton
            icon={<FingerprintIcon className="h-5 w-5" />}
            label="Login with Biometrics"
            onClick={onLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
