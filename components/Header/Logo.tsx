import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return(
        <Link href="/dashboard" className="block flex-shrink-0 lg:hidden">
            <Image
                width={32}
                height={32}
                src={"/images/logo/logo-icon.svg"}
                alt="Logo"
            />
        </Link> 
    )
}

export default Logo;