"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Alert from "@/components/Alert";
import Input from "@/components/Textarea/Input";
import Password from "@/components/Textarea/Password";
import Recaptcha from "@/components/Recaptcha";
import AuthService from "@/services/AuthService";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { titleError, messageError, passwordInput, emailInput, loginButton, registerLink, forgotPasswordLink, registerLinkButton, forgotPasswordLinkButton } from "@/language/tr/language";

const VerifiedAccount: React.FC = () => {

    const params = useParams();

    const [formItemStatus, setFormItemStatus] = useState<boolean>(false);
    const [tokenControl, setTokenControl] = useState(false);

    const [alertIcon, setAlertIcon] = useState("");
    const [alertIconColor, setAlertIconColor] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertCss, setAlertCss] = useState("");
    
    const [emailCss, setEmailCss] = useState("w-full");
    const [passwordCss, setPasswordCss] = useState("w-full");
   
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [token, setToken] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        email: "",
        password: "",
    });

    async function handleTokenControl() {
        try {
            setTokenControl(!tokenControl);
            setAlertIcon("");
            setAlertIconColor("");
            setAlertCss("");
            setAlertTitle("");
            setAlertMessage("");
            
            await AuthService.verifiedAccount(params.token)
            .then(response => {
                if(response.data.successType) {
                    setAlertCss("bg-green-500");
                    setAlertIconColor("#16a34a");
                    setAlertIcon(response.data.successIcon);
                    setAlertTitle(response.data.successTitle);
                    setAlertMessage(response.data.successMessage);
                }
            })
            .catch(error => {
                NProgress.done();
                if(error.response.data.warningType) {
                    setAlertCss("bg-yellow-500");
                    setAlertIconColor("#ca8a04");
                    setAlertIcon(error.response.data.warningIcon);
                    setAlertTitle(error.response.data.warningTitle);
                    setAlertMessage(error.response.data.warningMessage);
                }
                else if(error.response.data.errorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("#dc2626");
                    setAlertIcon(error.response.data.errorIcon);
                    setAlertTitle(error.response.data.errorTitle);
                    setAlertMessage(error.response.data.errorMessage);
                }else if(error.response.data.fatalErrorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("red");
                    setAlertIcon(error.response.data.fatalErrorIcon);
                    setAlertTitle(error.response.data.fatalErrorTitle);
                    setAlertMessage(error.response.data.fatalErrorMessage);
                }
                else {
                    setAlertIconColor("#dc2626");
                    setAlertCss("bg-red-500");
                    setAlertIcon("ShieldX");
                    setAlertTitle(titleError());
                    setAlertMessage(messageError());
                }
            })
        }catch(exception) {
            NProgress.done();
            setAlertIconColor("#dc2626");
            setAlertCss("bg-red-500");
            setAlertIcon("ShieldX");
            setAlertTitle(titleError());
            setAlertMessage(messageError());
        }
    }

    useEffect(() => {
        if(!tokenControl) {
            handleTokenControl();
        }
    }, []);

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        const value = (e.target as HTMLInputElement).value;
        setFormData({ ...formData, [key]: value });
    };

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const recaptchaToken = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, { action: 'submit' });
        setToken(recaptchaToken);

        NProgress.start();

        const { email, password } = formData;

        const requestBody = {
            email,
            password
        };

        try {
            await AuthService.login(requestBody)
            .then(response => {
                if(response.data.successType) {
                    NProgress.done();
                    setFormItemStatus(false);
                    window.location.href = "/dashboard/home";
                }
            })
            .catch(error => {
                NProgress.done();
                setFormItemStatus(false);
                if(error.response.data.validatorErrors) {
                    if(error.response.data.validatorErrors.email) {
                        setEmailError(error.response.data.validatorErrors.email);
                        setEmailCss("w-full border-red-500");
                    }
                    if(error.response.data.validatorErrors.password) {
                        setPasswordError(error.response.data.validatorErrors.password);
                        setPasswordCss("w-full border-red-500");
                    }
                }else if(error.response.data.warningType) {
                    setAlertCss("bg-yellow-500");
                    setAlertIconColor("#ca8a04");
                    setAlertIcon(error.response.data.warningIcon);
                    setAlertTitle(error.response.data.warningTitle);
                    setAlertMessage(error.response.data.warningMessage);
                }else if(error.response.data.errorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("#dc2626");
                    setAlertIcon(error.response.data.errorIcon);
                    setAlertTitle(error.response.data.errorTitle);
                    setAlertMessage(error.response.data.errorMessage);
                }else if(error.response.data.fatalErrorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("red");
                    setAlertIcon(error.response.data.fatalErrorIcon);
                    setAlertTitle(error.response.data.fatalErrorTitle);
                    setAlertMessage(error.response.data.fatalErrorMessage);
                }
                else {
                    setAlertIconColor("#dc2626");
                    setAlertCss("bg-red-500");
                    setAlertIcon("ShieldX");
                    setAlertTitle(titleError());
                    setAlertMessage(messageError());
                }
            })
        }catch(exception) {
            NProgress.done();
            setAlertIconColor("#dc2626");
            setAlertCss("bg-red-500");
            setAlertIcon("ShieldX");
            setAlertTitle(titleError());
            setAlertMessage(messageError());
        }
    }

    return (
        <>
        {alertMessage &&
        <Alert 
            alertIcon={ alertIcon }
            alertIconColor={ alertIconColor }
            alertTitle={ alertTitle }
            alertMessage={ alertMessage }
            alertCss={ alertCss }
        />
        }
        
        <form onSubmit={ handleSubmit } noValidate>
            <div className="mt-5">
                <Input 
                    inputType="email"
                    inputPlaceholder={ emailInput() }
                    inputClass={ emailCss }
                    inputRef={ emailRef }
                    inputError= { emailError }
                    inputStatus= { formItemStatus }
                    inputTabIndex= { 1 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder={ passwordInput() }
                    inputClass={ passwordCss }
                    inputRef={ passwordRef }
                    inputError= { passwordError }
                    inputStatus= { formItemStatus }
                    inputTabIndex= { 2 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "password")}
                />
            </div>
            <div className="mt-5">
                <button 
                    type="submit" 
                    className="w-full rounded-md py-3 bg-orange-500 text-center text-white"
                    disabled={ formItemStatus }
                >
                    { loginButton() }
                </button>
            </div>
            <div className="mt-5">
                <Link href={ registerLink() } className="text-sm text-orange-500 font-semibold block md:inline">
                    { registerLinkButton() }
                </Link>
                <Link href={ forgotPasswordLink() } className="text-sm text-orange-500 font-semibold block md:inline md:float-right">
                    { forgotPasswordLinkButton() }
                </Link>
            </div>
        </form>
        <Recaptcha />
        </>
    )
}

export default VerifiedAccount;