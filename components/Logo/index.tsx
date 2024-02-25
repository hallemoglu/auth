import Link from "next/link";
import { homeLink, logoSetting, titleSetting } from '@/language/tr/language';

const Logo = () => {
    return (
        <div className="flex flex-col items-center justify-center lg:flex-row w-12/12 xl:w-4/12 lg:w-6/12 md:w-8/12 mx-auto mb-10 overflow-hidden">
            <Link href={ homeLink() }>
                <img 
                    src={ logoSetting() }
                    width={300} 
                    height={52.5} 
                    alt={ titleSetting() }
                />
            </Link>
        </div>
    )
}

export default Logo;