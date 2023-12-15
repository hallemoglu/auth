import Password from "@/components/Textarea/Password";

const ResetPassword = () => {
    const styling = {
        backgroundImage: "url('../../../images/wallpaper/reset-password-bg.png')",
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
                    <h2 className="text-3xl mb-3">Şifre Sıfırla</h2>
                    <form>
                        <div className="mt-5 relative">
                            <Password 
                              inputType="password"
                              inputPlaceholder="Şifre"
                              inputClass="w-full"
                            />
                        </div>
                        <div className="mt-5 relative">
                            <Password 
                              inputType="password"
                              inputPlaceholder="Şifre Onay"
                              inputClass="w-full"
                            />
                        </div>
                        <div className="mt-5">
                            <button type="button" className="w-full rounded-md py-3 bg-purple-500 text-center text-white">Şifre Sıfırla</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;