"use client"
import React, { useState, useRef } from "react";
import Input from "@/components/Textarea/Input";
import Password from "@/components/Textarea/Password";

const Form = () => {

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        setFormData({...formData, [key]: (e.target as HTMLInputElement).value})
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email, password } = formData;

        const requestBody = {
            email,
            password,
        };

        try {
            const response = await fetch("/api/v1/login", {
                method: "POST",
                body: JSON.stringify(requestBody),
            });
    
            if(response.ok) {
    
            }else {
                
            }
        }catch(exception) {
            console.error("Kayıt sırasında hata oluştu:", exception);
        }
    }

    return(
        <form onSubmit={ handleSubmit } noValidate>
            <div className="mt-5">
                <Input 
                  inputType="email"
                  inputPlaceholder="E-Posta Adresi"
                  inputClass="w-full"
                  inputRef={ emailRef }
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                  inputType="password"
                  inputPlaceholder="Şifre"
                  inputClass="w-full"
                  inputRef={ passwordRef }
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5">
                <button type="submit" className="w-full rounded-md py-3 bg-purple-500 text-center text-white">Giriş Yap</button>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="mt-5">
                  <a href="/auth/register" className="text-sm text-purple-500 font-semibold">Yeni Bir Hesap Oluştur</a>
              </div>
              <div className="mt-5 text-right">
                <a href="/auth/forgot-password" className="text-sm text-purple-500 font-semibold">Şifremi Unuttum</a>
              </div>
            </div>
        </form>
    )
}

export default Form;