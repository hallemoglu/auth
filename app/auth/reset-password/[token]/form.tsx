"use client";
import React, { useState, useRef, useEffect } from "react";
import Alert from "@/components/Alert";
import Password from "@/components/Textarea/Password";
import AuthService from "@/services/AuthService";
import { titleError, messageError, newPasswordInput, newPasswordConfirmInput, forgotPasswordButton } from "@/language/tr/language";

const ResetPasswordForm: React.FC = () => {

    const [formItemStatus, setFormItemStatus] = useState<boolean>(false);

    const [alertIcon, setAlertIcon] = useState("");
    const [alertIconColor, setAlertIconColor] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertCss, setAlertCss] = useState("");

    const [passwordCss, setPasswordCss] = useState("w-full");
    const [passwordConfirmCss, setPasswordConfirmCss] = useState("w-full");

    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");

    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        password: "",
        passwordConfirm: "",
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        const value = (e.target as HTMLInputElement).value;
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setAlertCss("");
        setAlertTitle("");
        setAlertMessage("");

        setFormItemStatus(true);

        setPasswordError("");
        setPasswordConfirmError("");

        setPasswordCss("w-full");
        setPasswordConfirmCss("w-full");

        const { password, passwordConfirm } = formData;

        const requestBody = {
            password,
            passwordConfirm,
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
                    if(error.response.data.validatorErrors.password) {
                        setPasswordError(error.response.data.validatorErrors.password);
                        setPasswordCss("w-full border-red-500");
                    }
                    if(error.response.data.validatorErrors.passwordConfirm) {
                        setPasswordConfirmError(error.response.data.validatorErrors.passwordConfirm);
                        setPasswordConfirmCss("w-full border-red-500");
                    }
                }else if(error.response.data.fatalError) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("#dc2626");
                    setAlertIcon(error.response.data.errorIcon);
                    setAlertTitle(error.response.data.success.errorTitle);
                    setAlertMessage(error.response.data.success.errorMessage);
                }else {
                    setAlertIconColor("#dc2626");
                    setAlertCss("bg-red-500");
                    setAlertIcon("ShieldX");
                    setAlertIcon("ShieldX");
                    setAlertTitle(titleError());
                    setAlertMessage(messageError());
                }
            })
        }catch(exception) {
            setAlertIconColor("#dc2626");
            setAlertCss("bg-red-500");
            setAlertIcon("ShieldX");
            setAlertIcon("ShieldX");
            setAlertTitle(titleError());
            setAlertMessage(messageError());
        }
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
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder={ newPasswordInput() }
                    inputClass={ passwordCss }
                    inputRef={ passwordRef }
                    inputError= { passwordError }
                    inputStatus= { formItemStatus }
                    inputTabIndex={ 1 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "password")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder={ newPasswordConfirmInput() }
                    inputClass={ passwordConfirmCss }
                    inputRef={ passwordConfirmRef }
                    inputError= { passwordConfirmError }
                    inputStatus= { formItemStatus }
                    inputTabIndex={ 2 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "passwordConfirm")}
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

export default ResetPasswordForm;