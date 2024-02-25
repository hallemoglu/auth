"use client";
import React, { useState, useRef } from "react";
import Alert from "@/components/Alert";
import Input from "@/components/Textarea/Input";
import AuthService from "@/services/AuthService";
import { titleError, messageError, emailInput, forgotPasswordButton } from "@/language/tr/language";

const ForgotPasswordForm: React.FC = () => {
    const [formItemStatus, setFormItemStatus] = useState<boolean>(false);

    const [alertIcon, setAlertIcon] = useState("");
    const [alertIconColor, setAlertIconColor] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertCss, setAlertCss] = useState("");
    
    const [emailCss, setEmailCss] = useState("w-full");
   
    const [emailError, setEmailError] = useState("");

    const emailRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        email: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setAlertCss("");
        setAlertTitle("");
        setAlertMessage("");

        setFormItemStatus(true);

        setEmailError("");

        setEmailCss("w-full");
        
        const { email } = formData;

        const requestBody = {
            email,
        };

        try {
            await AuthService.register(requestBody)
            .then(response => {
                if(response.data.success) {
                    setFormItemStatus(false);
                    setAlertCss("bg-green-500");
                    setAlertIconColor("#16a34a");
                    setAlertIcon(response.data.successIcon);
                    setAlertTitle(response.data.success.successTitle);
                    setAlertMessage(response.data.success.successMessage);
                }
            })
            .catch(error => {
                setFormItemStatus(false);
                if(error.response.data.validatorErrors) {
                    if(error.response.data.validatorErrors.email) {
                        setEmailError(error.response.data.validatorErrors.email);
                        setEmailCss("w-full border-red-500");
                    }
                }else if(error.response.data.fatalError) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("red");
                    setAlertIcon(error.response.data.errorIcon);
                    setAlertTitle(error.response.data.success.errorTitle);
                    setAlertMessage(error.response.data.success.errorMessage);
                }else {
                    setAlertIconColor("red");
                    setAlertCss("bg-red-500");
                    setAlertIcon("ShieldX");
                    setAlertTitle(titleError());
                    setAlertMessage(messageError());
                }
            })
        }catch(exception) {
            setAlertIconColor("red");
            setAlertCss("bg-red-500");
            setAlertIcon("ShieldX");
            setAlertTitle(titleError());
            setAlertMessage(messageError());
        }
    };

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        const value = (e.target as HTMLInputElement).value;
        setFormData({ ...formData, [key]: value });
    };


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
                    inputTabIndex={ 1 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5">
                <button 
                    type="submit" 
                    className="w-full rounded-md py-3 bg-orange-500 text-center text-white"
                    disabled={ formItemStatus }
                >
                    { forgotPasswordButton() }
                </button>
            </div>
        </form>
        </>
    )
}

export default ForgotPasswordForm;