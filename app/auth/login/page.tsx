import type { Metadata } from 'next/types';
import Form from "@/components/Auth/Login/Form";

export const metadata: Metadata = {
    title: "Yönetim Paneli - Giriş Yap",
    description: "",
    keywords: "",
    icons: {
        icon: '/images/favicons/favicon.ico',
    },
};


const Login = () => {
    const styling = {
        backgroundImage: "url('../../../images/wallpaper/login-bg.png')",
    };
    return(
        <div className="container mx-auto py-40">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={styling}>
                    <h1 className="text-white text-3xl mb-3">MoonArt</h1>
                    <div>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-3 text-gray-700">Giriş Yap</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Login;