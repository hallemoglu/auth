"use client"
import React, { useState, useRef } from "react";
import Input from "@/components/Textarea/Input";

const ForgotPassword = () => {

    const emailRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        email: ""
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        setFormData({ ...formData, [key]: (e.target as HTMLInputElement).value });
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { email } = formData;

        const requestBody = {
            email,
        };

        try {
            const response = await fetch("/api/v1/register", {
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
        <form onSubmit={ handleSubmit }>
            <div className="mt-5">
                <Input 
                  inputType="email"
                  inputPlaceholder="E-Posta Adresi"
                  inputClass="w-full"
                  inputRef={ emailRef }
                  onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5">
                <button type="submit" className="w-full rounded-md py-3 bg-purple-500 text-center text-white">Sıfırlama Bağlantısı Gönder</button>
            </div>
        </form>
    )
}

export default ForgotPassword;