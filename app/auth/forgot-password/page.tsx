import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Form from "./form";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon/Icon";
import { loginLink, titleSetting, sloganSetting, descriptionSetting, keywordsSetting, forgotPasswordTitle, leftArrowText } from "@/language/tr/language";

export const generateMetadata = (): Metadata => {
    return {
      title: `${ titleSetting() } - ${ sloganSetting() } - ${ forgotPasswordTitle() }`,
      description: `${ descriptionSetting() }`,
      keywords: `${ keywordsSetting() }`,
      openGraph: {
        title: `${ titleSetting() } - ${ sloganSetting() } - ${ forgotPasswordTitle() }`,
        description: `${ descriptionSetting() }`
      },
    };
};

const ForgotPassword: React.FC = () => {
    return(
        <>
        <div className="container mx-auto py-10">
            <Logo />
            <div className="flex flex-col lg:flex-row w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-2/2 py-10 px-10">
                    <Link href={ loginLink() } className="flex">
                        <Icon name="ArrowLeft" color="gray" size={26} className="mb-5 mr-2" /> 
                        <span className="text-lg font-semibold text-gray-700">
                            { leftArrowText() }
                        </span>
                    </Link>
                    <h2 className="text-3xl mb-3 text-gray-700 font-semibold">
                        { forgotPasswordTitle() }
                    </h2>
                    <Form />
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;