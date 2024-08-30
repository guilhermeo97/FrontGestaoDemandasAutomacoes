"use client"

import ImagemLogin from "@/components/Login/ImagemLogin";
import { Login } from "@/components/Login/Login";
import React from "react";

export default function Home() {
  return (
    <section className="container flex">
      <ImagemLogin/>
      <Login/>
    </section> 
  )
}
