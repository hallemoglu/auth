import React from "react";
import type { Metadata } from 'next/types';
import Logo from "@/components/Logo";
import Form from "@/components/Auth/Register/Form";

export const metadata: Metadata = {
    title: "MoonArt - Kayıt Ol",
    description: "",
    keywords: "",
    icons: {
        icon: '/images/favicons/favicon.ico',
    },
};

const Register: React.FC = () => {
    return(
        <>
        <div className="container mx-auto py-10">
            <Logo />
            <div className="flex flex-col lg:flex-row w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-2/2 py-10 px-10">
                    <h2 className="text-3xl mb-3 text-gray-700 font-semibold">Kayıt Ol</h2>
                    <p className="mb-5 text-sm text-gray-700">
                        Hesap oluşturmak ücretsizdir ve yalnızca birkaç dakikanızı alır.
                    </p>
                    <Form />
                </div>
            </div>
        </div>
        </>
    )
}

export default Register;