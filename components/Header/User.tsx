"use client";
import { useState, useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";

const User = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
            return;
                setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
          if (!dropdownOpen || keyCode !== 27) return;
          setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <div className="relative">
            <button 
                ref={trigger}
                onClick={() => setDropdownOpen(!dropdownOpen)}
               
                className="flex items-center gap-4"
            >
                <span className="hidden text-right lg:block">
                <span className="block text-sm font-medium text-gray-700 dark:text-white">
                    Ahmet Mete HALLEMOĞLU
                </span>
                <span className="block text-xs text-gray-600">Full Stack Web Developer</span>
                </span>
                <span className="h-12 w-12 rounded-full">
                <Image
                    width={112}
                    height={112}
                    src={"/user/user-01.png"}
                    alt="User"
                />
                </span>
                <Icon name={"ChevronDown"} color={"#414040"} size={22} />
            </button>
            {/* Start Dropdown */}
            <div
                ref={dropdown}
                onFocus={() => setDropdownOpen(true)}
                onBlur={() => setDropdownOpen(false)}
                className={`absolute -right-2 mt-4 px-4 py-6 pb-2 flex w-72 flex-col rounded-sm border border-stroke bg-white drop-shadow-sm  ${
                dropdownOpen === true ? "block" : "hidden"
                }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 pb-4">
                    <li>
                        <Link
                        href="/profile"
                        className="flex items-center gap-3.5 text-sm text-gray-700 font-medium duration-300 ease-in-out"
                        >
                        <Icon name={"User"} color={"#414040"} size={22} />
                        Profilim
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="#"
                        className="flex items-center gap-3.5 text-sm text-gray-700 font-medium duration-300 ease-in-out"
                        >
                        <Icon name={"UserCog"} color={"#414040"} size={22} />
                        Hesap Ayarları
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/pages/settings"
                        className="flex items-center gap-3.5 text-sm text-gray-700 font-medium duration-300 ease-in-out"
                        >
                        <Icon name={"ShieldCheck"} color={"#414040"} size={22} />
                        Güvenlik & Gizlilik Ayarları
                        </Link>
                    </li>
                </ul>
                <button className="flex items-center gap-3.5 py-4 px-6 text-sm text-gray-700 font-medium duration-300 ease-in-out">
                    <Icon name={"LogOut"} color={"#414040"} size={22} />
                    Çıkış Yap
                </button>
            </div>
            {/* End Dropdown */}
        </div>
    )
}

export default User;