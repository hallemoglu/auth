import React from "react";
import type { Metadata } from "next";
import Logo from "@/components/Logo";
import Form from "./form";
import OtherPlatform from "@/components/OtherPlatform/Index";
import { titleSetting, sloganSetting, descriptionSetting, keywordsSetting, loginTitle } from "@/language/tr/language";
export const generateMetadata = (): Metadata => {
    return {
      title: `${ titleSetting() } - ${ sloganSetting() } - ${ loginTitle() }`,
      description: `${ descriptionSetting() }`,
      keywords: `${ keywordsSetting() }`,
      openGraph: {
        title: `${ titleSetting() } - ${ sloganSetting() } - ${ loginTitle() }`,
        description: `${ descriptionSetting() }`
      },
    };
};


const Register: React.FC = () => {
    return(
        <>
        <div className="container mx-auto py-10">
            <Logo />
            <div className="flex flex-col lg:flex-row w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-2/2 py-10 px-10">
                    <h2 className="text-3xl mb-3 text-gray-700 font-semibold">
                        { loginTitle() }    
                    </h2>
                    <Form />
                </div>
            </div>
            <OtherPlatform />
        </div>
        </>
    )
}

export default Register;