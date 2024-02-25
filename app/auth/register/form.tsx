"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Alert from "@/components/Alert";
import Input from "@/components/Textarea/Input";
import Password from "@/components/Textarea/Password";
import Checkbox from "@/components/Textarea/Checkbox";
import Modal from "@/components/Modal";
import AuthService from "@/services/AuthService";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { registerPolicyModalTitle, registerPolicyModalText, privacyPolicyModalTitle, privacyPolicyModalText, informationModalText, informationModalTitle, titleError, messageError, passwordInput, emailInput, registerButton, loginLink, loginLinkButton, firstNameInput, lastNameInput, passwordConfirmInput, registerPolicy, privacyPolicy, informationText, and, iHaveReadAndAccept } from "@/language/tr/language";

const RegisterForm: React.FC = () => {
    const [registerContractTitle, setRegisterContractTitle] = useState(registerPolicyModalTitle());
    const [registerContractBody, setRegisterContractBody] = useState(registerPolicyModalText());
    const [privacyPolicyTitle, setPrivacyPolicyTitle] = useState(privacyPolicyModalTitle());
    const [privacyPolicyBody, setPrivacyPolicyBody] = useState(privacyPolicyModalText());
    const [illuminationTextTitle, setIlluminationTextTitle] = useState(informationModalTitle());
    const [illuminationTextBody, setIlluminationTextBody] = useState(informationModalText());

    useEffect(() => {
        const fetchRegisterContract = async () => {
          setRegisterContractTitle(JSON.parse(JSON.stringify(registerContractTitle)));
          setRegisterContractBody(JSON.parse(JSON.stringify(registerContractBody)));
        };

        const fetchPrivacyPolicy = async () => {
            setPrivacyPolicyTitle(JSON.parse(JSON.stringify(privacyPolicyTitle)));
            setPrivacyPolicyBody(JSON.parse(JSON.stringify(privacyPolicyBody)));
        };

        const fetchIlluminationText = async () => {
            setIlluminationTextTitle(JSON.parse(JSON.stringify(illuminationTextTitle)));
            setIlluminationTextBody(JSON.parse(JSON.stringify(illuminationTextBody)));
        };
    
        fetchRegisterContract();
        fetchPrivacyPolicy();
        fetchIlluminationText();
    }, []);

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

    const modals = [
        { 
            title: registerContractTitle, 
            body: registerContractBody, 
            ref: registerContractModalRef, 
            isOpen: isRegisterContractModalOpen, 
            open: handleRegisterContractOpen, 
            close: handleRegisterContractClose 
        },
        { 
            title: privacyPolicyTitle, 
            body: privacyPolicyBody, 
            ref: privacyPolicyModalRef, 
            isOpen: isPrivacyPolicyModalOpen, 
            open: handlePrivacyPolicyOpen, 
            close: handlePrivacyPolicyClose 
        },
        { 
            title: illuminationTextTitle, 
            body: illuminationTextBody, 
            ref: illuminationTextModalRef, 
            isOpen: isIlluminationTextModalOpen, 
            open: handleIlluminationTextOpen, 
            close: handleIlluminationTextClose 
        },
    ];

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
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

    const [formItemStatus, setFormItemStatus] = useState<boolean>(false);
  
    const [alertIcon, setAlertIcon] = useState("");
    const [alertIconColor, setAlertIconColor] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertCss, setAlertCss] = useState("");

    const [lastNameCss, setLastNameCss] = useState("w-full");
    const [firstNameCss, setFirstNameCss] = useState("w-full");
    const [emailCss, setEmailCss] = useState("w-full");
    const [passwordCss, setPasswordCss] = useState("w-full");
    const [passwordConfirmCss, setPasswordConfirmCss] = useState("w-full");


    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmError, setPasswordConfirmError] = useState("");
    const [contractError, setContractError] = useState("");

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);
    const contractRef = useRef<HTMLInputElement>(null);

    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        contract: false
    });

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>, key: string) => {
        const value = key === "contract" ? (e.target as HTMLInputElement).checked : (e.target as HTMLInputElement).value;
        setFormData({ ...formData, [key]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        NProgress.start();

        setAlertIcon("");
        setAlertIconColor("");
        setAlertCss("");
        setAlertTitle("");
        setAlertMessage("");

        setFormItemStatus(true);

        setFirstNameError("");
        setLastNameError("");
        setEmailError("");
        setPasswordError("");
        setPasswordConfirmError("");
        setContractError("");

        setFirstNameCss("w-full");
        setLastNameCss("w-full");
        setEmailCss("w-full");
        setPasswordCss("w-full");
        setPasswordConfirmCss("w-full");

        const { firstName, lastName, email, password, passwordConfirm, contract } = formData;

        const requestBody = {
            firstName,
            lastName,
            email,
            password,
            passwordConfirm,
            contract
        };

        try {
            await AuthService.register(requestBody)
            .then(response => {
                if(response.data.successType) {
                    NProgress.done();
                    setFormItemStatus(false);
                    setAlertCss("bg-green-500");
                    setAlertIconColor("green");
                    setAlertIcon(response.data.successIcon);
                    setAlertTitle(response.data.successTitle);
                    setAlertMessage(response.data.successMessage);
                    setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        passwordConfirm: "",
                        contract: false
                    });
                }
            })
            .catch(error => {
                NProgress.done();
                setFormItemStatus(false);
                if(error.response.data.validatorErrors) {
                    if(error.response.data.validatorErrors.firstName) {
                        setFirstNameError(error.response.data.validatorErrors.firstName);
                        setFirstNameCss("w-full border-red-500 focus:border-red-500");
                    }
                    if(error.response.data.validatorErrors.lastName) {
                        setLastNameError(error.response.data.validatorErrors.lastName);
                        setLastNameCss("w-full border-red-500 focus:border-red-500");
                    }
                    if(error.response.data.validatorErrors.email) {
                        setEmailError(error.response.data.validatorErrors.email);
                        setEmailCss("w-full border-red-500 focus:border-red-500");
                    }
                    if(error.response.data.validatorErrors.password) {
                        setPasswordError(error.response.data.validatorErrors.password);
                        setPasswordCss("w-full border-red-500 focus:border-red-500");
                    }
                    if(error.response.data.validatorErrors.passwordConfirm) {
                        setPasswordConfirmError(error.response.data.validatorErrors.passwordConfirm);
                        setPasswordConfirmCss("w-full border-red-500 focus:border-red-500");
                    }
                    if(error.response.data.validatorErrors.contract) {
                        setContractError(error.response.data.validatorErrors.contract);
                    }
                }else if(error.response.data.errorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("red");
                    setAlertIcon(error.response.data.errorIcon);
                    setAlertTitle(error.response.data.errorTitle);
                    setAlertMessage(error.response.data.errorMessage);
                }else if(error.response.data.fatalErrorType) {
                    setAlertCss("bg-red-500");
                    setAlertIconColor("red");
                    setAlertIcon(error.response.data.fatalErrorIcon);
                    setAlertTitle(error.response.data.fatalErrorTitle);
                    setAlertMessage(error.response.data.fatalErrorMessage);
                }else {
                    setAlertIconColor("red");
                    setAlertCss("bg-red-500");
                    setAlertIcon("ShieldX");
                    setAlertTitle(titleError());
                    setAlertMessage(messageError());
                }
            })
        }catch(exception) {
            NProgress.done();
            setAlertIconColor("red");
            setAlertCss("bg-red-500");
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
            <div className="md:grid grid-cols-2 gap-5">
                <div className="">
                    <Input 
                        inputType="text" 
                        inputPlaceholder={ firstNameInput() } 
                        inputClass={ firstNameCss } 
                        inputRef={ firstNameRef }
                        inputValue= { formData.firstName } 
                        inputError= { firstNameError } 
                        inputStatus= { formItemStatus } 
                        inputTabIndex= { 1 }
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "firstName")}
                    />
                </div>
                <div className="mt-5 md:mt-0">
                    <Input 
                        inputType="text"
                        inputPlaceholder={ lastNameInput() }
                        inputClass={ lastNameCss }
                        inputRef={ lastNameRef }
                        inputValue= { formData.lastName } 
                        inputError= { lastNameError }
                        inputStatus= { formItemStatus }
                        inputTabIndex= { 2 }
                        onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "lastName")}
                    />
                </div>
            </div>
            <div className="mt-5">
                <Input 
                    inputType="email"
                    inputPlaceholder={ emailInput() }
                    inputClass={ emailCss }
                    inputRef={ emailRef }
                    inputValue= { formData.email } 
                    inputError= { emailError }
                    inputStatus= { formItemStatus }
                    inputTabIndex= { 3 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "email")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder={ passwordInput() }
                    inputClass={ passwordCss }
                    inputRef={ passwordRef }
                    inputValue= { formData.password } 
                    inputError= { passwordError }
                    inputStatus= { formItemStatus }
                    inputTabIndex= { 4 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "password")}
                />
            </div>
            <div className="mt-5 relative">
                <Password 
                    inputType="password"
                    inputPlaceholder={ passwordConfirmInput() }
                    inputClass={ passwordConfirmCss }
                    inputRef={ passwordConfirmRef }
                    inputValue= { formData.passwordConfirm } 
                    inputError= { passwordConfirmError }
                    inputStatus= { formItemStatus }
                    inputTabIndex= { 5 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "passwordConfirm")}
                />
            </div>
            <div className="mt-5">
                <Checkbox 
                    inputRef={ contractRef }
                    inputValue= { formData.contract } 
                    inputTabIndex= { 6 }
                    onChange={(e: React.FormEvent<HTMLInputElement>) => handleInputChange(e, "contract")}
                />
                <span className="text-xs text-gray-700">
                    <button 
                        type="button" 
                        className="text-orange-500"
                        onClick={ handleRegisterContractOpen }
                        >
                            { registerPolicy() }
                    </button> 
                    ,&nbsp;
                    <button 
                        type="button"                     
                        className="text-orange-500"
                        onClick={ handlePrivacyPolicyOpen }
                    >
                        { privacyPolicy() }
                    </button> 
                    &nbsp;{ and() }&nbsp; 
                    <button 
                        type="button" 
                        className="text-orange-500"
                        onClick={ handleIlluminationTextOpen }
                        >
                            { informationText() }
                    </button> 
                    { iHaveReadAndAccept() }
                </span>
                <br/>
                <span className="text-xs text-red-500">{ contractError }</span>
            </div>
            <div className="mt-5">
                <button 
                    type="submit" 
                    className="w-full rounded-md py-3 text-center text-white bg-orange-500"
                    disabled={ formItemStatus }
                    tabIndex= { 7 }
                >{ registerButton() }</button>
            </div>
            <div className="mt-5">
                <Link href={ loginLink() } className="text-sm text-orange-500 font-semibold">
                    { loginLinkButton() }
                </Link>
            </div>
        </form>
        {modals.map((modal, index) => (
            modal.isOpen && 
                <Modal key={index} title={modal.title} modalRef={modal.ref}>
                    <div dangerouslySetInnerHTML={{ __html: modal.body }} />
                </Modal>
        ))}
        </>
    )
}

export default RegisterForm;