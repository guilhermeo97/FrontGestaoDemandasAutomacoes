"use client"

import { loginRequest } from "@/authConfig";
import { Layout } from "@/components/Layout/Layout";
import { useMsal } from "@azure/msal-react";

export default function Home() {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };
  
  return (
    <Layout>
      <div>Bem-vindo</div>
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
        Login com Microsoft
      </button>
    </Layout>
  );
}
