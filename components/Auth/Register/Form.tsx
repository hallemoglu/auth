"use client";
import React, { useState, useRef } from "react";
import Input from "@/components/Textarea/Input";
import Password from "@/components/Textarea/Password";
import Modal from "@/components/Modal";
import AuthService from "@/app/api/AuthService";


const RegisterForm: React.FC = () => {
    const [registerContractValue, setRegisterContractValue] = useState(true);
    const [confidentialityContractValue, setConfidentialityContractValue] = useState(true);

    const handleRegisterContractChange = () => {
        setRegisterContractValue((prev) => !prev);
    };

    const handleConfidentialityContractChange = () => {
        setConfidentialityContractValue((prev) => !prev);
    };
    

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        setFormData({ ...formData, [key]: (e.target as HTMLInputElement).value });
    };
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { firstName, lastName, email, password, passwordConfirm } = formData;

        const requestBody = {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm,
        };

        try {
            await AuthService.register(requestBody)
            .then(response => {

            })
            .catch(error => {

            })
        }catch(exception) {
           
        }
        
    };

    return (
        <>
         <form onSubmit={ handleSubmit } noValidate>
            <div className="md:grid grid-cols-2 gap-5">
                <div className="">
                    <Input 
                        inputType="text"
                        inputPlaceholder="Ad"
                        inputClass="w-full"
                        inputRef={ firstNameRef }
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "firstName")}
                    />
                </div>
                <div className="mt-5 md:mt-0">
                    <Input 
                        inputType="text"
                        inputPlaceholder="Soyad"
                        inputClass="w-full"
                        inputRef={ lastNameRef }
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "lastName")}
                    />
                </div>
            </div>
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
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "password")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder="Şifre Onay"
                    inputClass="w-full"
                    inputRef={ passwordConfirmRef }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "passwordConfirm")}
                />
            </div>
            <div className="mt-5">
                <input 
                    type="checkbox" 
                    className="border border-gray-400 mr-2"
                
                />
                <span className="text-xs text-gray-700">
                    <button type="button" onClick={ handleRegisterContractChange } className="text-purple-500 font-semibold">Üyelik sözleşmesini</button> ve <button type="button" onClick={ handleConfidentialityContractChange } className="text-purple-500 font-semibold">gizlilik politikasını</button> okudum kabul ediyorum.
                </span>
                <br/>
                <span className="text-sm text-red-500"></span>
            </div>
            <div className="mt-5">
                <button type="submit" className="w-full rounded-md py-3 bg-purple-500 text-center text-white">Kayıt Ol</button>
            </div>
            <div className='mt-5'>
                <a href="/auth/login" className="text-sm text-purple-500 font-semibold">Zaten Bir Hesabım Var</a>
            </div>
        </form>
        <Modal 
            title="Üyelik Sözleşmesi"
            body=""
            visibility={registerContractValue}
        />
        <Modal 
            title="Gizlilik Politikası"
            body=""
            visibility={confidentialityContractValue}
        />
        </>
    )
}

export default RegisterForm;