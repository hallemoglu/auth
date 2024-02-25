import React, { useState, useEffect, useRef } from "react";
import { 
    targetedCookiesTitle,
    targetedCookiesText,
    mandatoryCookiesTitle,
    mandatoryCookiesText,
    functionalCookiesTitle,
    functionalCookiesText,
    professionalCookiesTitle,
    professionalCookiesText,
    cookieTitle, cookieMessage, cookieSettingButton, cookieApplyButton, cookieRejectionButton, cookieSettingApplyButton, cookieSettingTitle, cookieSettingText, cookieSettingAllApplyButton, cookieSettingManageApprovalPreferencesTitle } from "@/language/tr/language";
import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";

const Cookie: React.FC = () => {
    const [cookieConsent, setCookieConsent] = useState("true");

    const modalRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
           closeModal();
        }
    };

    const handleCookieSettings = () => {
       openModal();
    }

    useEffect(() => {
        const cookie = localStorage.getItem("cookie");
        if(cookie === null) {
            setCookieConsent("null");
        }else if (cookie === "true") {
            setCookieConsent("true");
        }
    }, []);

    const handleConsent = () => {
        setCookieConsent("true");
        localStorage.setItem("cookie", "true");
    };

    const handleReject = () => {
        setCookieConsent("false");
        localStorage.setItem("cookie", "false");
        closeModal();
    }

    return(
        <>
        {cookieConsent === "null" &&
            <>
            <div className="fixed flex flex-col bottom-0 left-0 w-full bg-gray-700 sm:bg-gray-800 text-white sm:flex-row sm:w-full">
                <div className="px-5 py-5 sm:w-8/12 overflow-y-auto">
                    <h3 className="mb-5 text-md font-semibold">
                        { cookieTitle() }
                    </h3>
                    <div 
                        className="text-xs" 
                        dangerouslySetInnerHTML={{ __html: cookieMessage() }}
                    ></div>
                </div>
                <div className="flex flex-row sm:flex-row px-4 py-14 sm:w-4/12 items-center justify-center bg-gray-800 border-t border-white sm:border-none">
                    <button 
                        type="button" 
                        className="px-6 py-4 text-sm sm:px-8 sm:py-4 sm:text-sm rounded-lg mr-3 text-orange-500"
                        onClick={ handleCookieSettings }
                    >
                        { cookieSettingButton() }
                    </button>
                    <button
                        type="button"
                        className="bg-orange-500 px-6 py-4 text-xs rounded-lg sm:px-8 sm:py-4 sm:text-sm"
                        onClick={ handleConsent }
                    >
                        { cookieApplyButton() }
                    </button>
                </div>
            </div>

            {isOpen && (
                <Modal title={ cookieSettingTitle() } modalRef={ modalRef }>
                    <div className="mt-2 text-sm text-justify">
                        <div 
                            className="text-md" 
                            dangerouslySetInnerHTML={{ __html: cookieSettingText() }}
                        ></div>
                        <button
                            type="button"
                            className="mt-5 p-4 border rounded-md font-semibold"
                        >
                            { cookieSettingAllApplyButton() }
                        </button>
                        <h3 className="mt-5 text-lg font-semibold leading-6 text-gray-900 text-left">
                            { cookieSettingManageApprovalPreferencesTitle() }
                        </h3>
                        <div className="mt-5">
                            <Accordion title={ targetedCookiesTitle() } type="toggle">
                                <div 
                                    className="text-md" 
                                    dangerouslySetInnerHTML={{ __html: targetedCookiesText() }}
                                ></div>
                            </Accordion>
                            <Accordion title={ mandatoryCookiesTitle() } type="text" text="Her zaman zorunlu">
                                <div 
                                    className="text-md" 
                                    dangerouslySetInnerHTML={{ __html: mandatoryCookiesText() }}
                                ></div>
                            </Accordion>
                            <Accordion title={ functionalCookiesTitle() } type="toggle">
                                <div 
                                    className="text-md" 
                                    dangerouslySetInnerHTML={{ __html: functionalCookiesText() }}
                                ></div>
                            </Accordion>
                            <Accordion title={ professionalCookiesTitle() } type="toggle">
                                <div 
                                    className="text-md" 
                                    dangerouslySetInnerHTML={{ __html: professionalCookiesText() }}
                                ></div>
                            </Accordion>
                        </div>
                        <div className="grid grid-cols-2 gap-5">
                            <button
                                type="button"
                                className="mt-5 p-4 border rounded-md font-semibold"
                                onClick={ handleReject }
                            >
                                { cookieRejectionButton() }
                            </button>
                            <button
                                type="button"
                                className="mt-5 p-4 border rounded-md font-semibold"
                            >
                                { cookieSettingApplyButton() }
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            </>
        }
        </>
    )
}

export default Cookie;