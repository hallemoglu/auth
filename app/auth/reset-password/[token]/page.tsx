import React from "react";
import type { Metadata } from 'next/types';
import Form from "./form";
import Logo from "@/components/Logo";
import { titleSetting, sloganSetting, descriptionSetting, keywordsSetting, resetPasswordTitle } from "@/language/tr/language";

export const generateMetadata = (): Metadata => {
    return {
      title: `${ titleSetting() } - ${ sloganSetting() } - ${ resetPasswordTitle() }`,
      description: `${ descriptionSetting() }`,
      keywords: `${ keywordsSetting() }`,
      openGraph: {
        title: `${ titleSetting() } - ${ sloganSetting() } - ${ resetPasswordTitle() }`,
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
                    <h2 className="text-3xl mb-3 text-gray-700 font-semibold">
                        { resetPasswordTitle() }
                    </h2>
                    <Form />
                </div>
            </div>
        </div>
        </>
    )
}

export default ForgotPassword;