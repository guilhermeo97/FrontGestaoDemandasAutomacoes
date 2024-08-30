"use client"

import React from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginType } from '@/types/Login';
import axios from "axios";
import { InputsLogin } from "./InputLogin";

export const Login = () => {
    const { handleSubmit, control } = useForm<LoginType>({
        defaultValues: {
          email: "",
          password: "",
        },
        mode: "onChange",
      })

    const handleFormSubmit: SubmitHandler<LoginType> = async (data) => {
        console.log(data)
        // const response = await axios.post('http://localhost:5000/login/',{
        //     email: data.email,
        //     password: data.password
        // })

        // if(response.data){
        //     console.log(response.data)
        // }
    }
    
    return(
        <main className="container">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputsLogin control={control} name='email' rules={{required: 'Campo obrigatório', minLength: 3}}/>
                <InputsLogin control={control} name='password' rules={{required: 'Campo obrigatório'}}/>
                <button className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md 
                hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75" type="submit" value="Enviar">Enviar</button>
            </form>
        </main>
    )
}