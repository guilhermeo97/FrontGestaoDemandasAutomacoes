"use client"

import ImagemLogin from "@/components/Login/ImagemLogin";
import { Login } from "@/components/Login/Login";
import React from "react";

export default function Home() {
  return (
    <section className="bg-gray-200 w-full h-screen flex items-center justify-center">
      <div className="flex gap-4 w-3/4 h-3/4">
        <ImagemLogin />
        <Login />
      </div>
    </section>
  );
}
