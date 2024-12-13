"use client";

import { useRouter } from "next/navigation";
import AuthPage from "./(components)/AuthPage";

const Page = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard");
  };

  return <AuthPage onLogin={handleLogin} />;
};

export default Page;
