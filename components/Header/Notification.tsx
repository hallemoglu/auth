"use client";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";

const Notification = () => {
    const [notifying, setNotifying] = useState(true);

    return (
        <li className="relative">
            <Link href="#" className="relative p-2 flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray-50">
                <span
                    className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-red-500 ${
                        notifying === false ? 'hidden' : 'inline'
                    }`}
                >
                    <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                </span>
                <Icon name={"Bell"} size={18} color={"#6b6b6b"} />
            </Link>
        </li>
    )
}

export default Notification;