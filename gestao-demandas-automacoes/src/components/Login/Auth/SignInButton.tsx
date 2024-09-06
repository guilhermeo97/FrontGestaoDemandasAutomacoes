import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";

export const SignInButton = () => {
  const { instance } = useMsal();
  const imagem = '/logo_microsoft.png'; // Certifique-se de que o caminho para a logo está correto.
  
  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  return (
    <button 
      onClick={handleLogin} 
      className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition">
        <img src={imagem} alt="Logo Microsoft" className="w-6 h-6 mr-2" />
        Entrar
    </button>
  );
};
