
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import MSALWrapper from "@/components/Login/Auth/MSAL";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tickets Automações",
  description: "Sistema para Abertura de Tickets para equipe de Automações TI&CSC",
};

export default function RootLayout({
  children,
}: {  
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
      <body>
        <MSALWrapper>
          {children}
        </MSALWrapper>
      </body>
      </body>
    </html>
  );
}