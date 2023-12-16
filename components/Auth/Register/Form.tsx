"use client";
import React, { useState, useRef, useEffect } from "react";
import Input from "@/components/Textarea/Input";
import Password from "@/components/Textarea/Password";
import Modal from "@/components/Modal";
import AuthService from "@/app/api/AuthService";

const RegisterForm: React.FC = () => {
    const registerContractTitle = "";
    const registerContractBody = "";

    const privacyPolicyTitle = "";
    const privacyPolicyBody = "";

    const illuminationTextTitle = "";
    const illuminationTextBody = "";

    const [isRegisterContractModalOpen, setIsRegisterContractModalOpen] = useState<boolean>(false);
    const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState<boolean>(false);
    const [isIlluminationTextModalOpen, setIsIlluminationTextModalOpen] = useState<boolean>(false);

    const registerContractModalRef = useRef<HTMLDivElement>(null);
    const privacyPolicyModalRef = useRef<HTMLDivElement>(null);
    const illuminationTextModalRef = useRef<HTMLDivElement>(null);

    const handleRegisterContractOpen = () => {
        setIsRegisterContractModalOpen(true);
    };

    const handleRegisterContractClose = () => {
        setIsRegisterContractModalOpen(false);
    };

    const handlePrivacyPolicyOpen = () => {
        setIsPrivacyPolicyModalOpen(true);
    };

    const handlePrivacyPolicyClose = () => {
        setIsPrivacyPolicyModalOpen(false);
    };

    const handleIlluminationTextOpen = () => {
        setIsIlluminationTextModalOpen(true);
    };

    const handleIlluminationTextClose = () => {
        setIsIlluminationTextModalOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e: MouseEvent) => {
        if (registerContractModalRef.current && !registerContractModalRef.current.contains(e.target as Node)) {
            handleRegisterContractClose();
        }
        if (privacyPolicyModalRef.current && !privacyPolicyModalRef.current.contains(e.target as Node)) {
            handlePrivacyPolicyClose();
        }
        if (illuminationTextModalRef.current && !illuminationTextModalRef.current.contains(e.target as Node)) {
            handleIlluminationTextClose();
        }
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
                    <button 
                        type="button" 
                        className="text-purple-500 font-semibold"
                        onClick={ handleRegisterContractOpen }
                        >
                            Üyelik sözleşmesini
                    </button> 
                    ,&nbsp;
                    <button 
                        type="button"                     
                        className="text-purple-500 font-semibold"
                        onClick={ handlePrivacyPolicyOpen }
                    >
                        gizlilik politikasını
                    </button> 
                    &nbsp;ve&nbsp; 
                    <button 
                        type="button" 
                        className="text-purple-500 font-semibold"
                        onClick={ handleRegisterContractOpen }
                        >
                            aydınlatma metnini
                    </button> 
                    okudum, kabul ediyorum.
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
        {isRegisterContractModalOpen &&
            <Modal 
                title={ registerContractTitle }
                body={ registerContractBody }
                modalRef={ registerContractModalRef }
            />
        }

        {isPrivacyPolicyModalOpen &&
            <Modal 
                title={ privacyPolicyTitle }
                body={ privacyPolicyBody }
                modalRef={privacyPolicyModalRef}
            />
        }

        {isIlluminationTextModalOpen &&
            <Modal 
                title={ illuminationTextTitle }
                body={ illuminationTextBody }
                modalRef={illuminationTextModalRef}
            />
        }
        </>
    )
}

export default RegisterForm;