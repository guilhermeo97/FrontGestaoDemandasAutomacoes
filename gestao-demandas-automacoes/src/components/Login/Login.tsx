"use client"

import React from "react"
import { SignInButton } from "../Login/Auth/SignInButton"

export const Login = () => { 
    return (
        <div className="w-1/2 h-full bg-white p-6 rounded-lg flex flex-col items-center justify-center shadow-lg">
            <h5 className="text-gray-600 text-lg">Tickets</h5>
            <h2 className="text-black text-2xl font-bold mb-6">Automações</h2>
            <SignInButton />
        </div>
    );
}
