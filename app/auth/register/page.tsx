import type { Metadata } from 'next/types';
import Form from "@/components/Auth/Register/Form";

export const metadata: Metadata = {
    title: "Yönetim Paneli - Kayıt Ol",
    description: "",
    keywords: "",
    icons: {
        icon: '/images/favicons/favicon.ico',
    },
};

const Register = () => {

    const styling = {
        backgroundImage: "url('../../../images/wallpaper/register-bg.png')",
    };

    return(
        <>
        <div className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={styling}>
                    <h1 className="text-white text-3xl mb-3">MoonArt</h1>
                    <div>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-3 text-gray-700">Kayıt Ol</h2>
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