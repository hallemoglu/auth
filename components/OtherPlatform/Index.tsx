import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FaApple } from "react-icons/fa6";
import { otherPlatformTitle, otherPlatformText, otherPlatformGoogle, otherPlatformApple, otherPlatformFacebook } from "@/language/tr/language";

const OtherPlatform: React.FC = () => {
    return(
        <div className="flex flex-col lg:flex-row w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden mt-10">
            <div className="w-full lg:w-2/2 py-10 px-10">
                <h1 className="text-center font-semibold text-gray-700 text-lg">
                    { otherPlatformTitle() }
                </h1>
                <div className="text-center text-sm mb-5">
                    { otherPlatformText() }
                </div>
                <ul className="flex list-none text-center gap-2">
                    <li className="w-4/12 text-xs p-3 border rounded-md">
                        <a href="#" className="flex items-center justify-center">
                            <FcGoogle size={45} />
                            <span className="">
                                { otherPlatformGoogle() }
                            </span>
                        </a>
                    </li>
                    <li className="w-4/12 text-xs p-3 border rounded-md">
                        <a href="#" className="flex items-center justify-center">
                            <FaApple size={40} />
                            <span className="mt-1">
                                { otherPlatformApple() }
                            </span>
                        </a>
                    </li>
                    <li className="w-4/12 text-xs p-3 border rounded-md">
                        <a href="#" className="flex items-center justify-center">
                            <ImFacebook2 size={45} color={"#316FF6"} />
                            <span className="ml-1">
                                { otherPlatformFacebook() }
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OtherPlatform;