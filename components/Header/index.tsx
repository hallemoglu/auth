"use client";
import Icon from "@/components/Icon/Icon";
import Logo from "./Logo";
import Search from "./Search";
import Notification from "./Notification";
import Message from "./Message";
import User from "./User";

const Header = (props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg0: boolean) => void;
  }) => {
    return (
        <header className="top-0 z-999 flex w-full bg-white drop-shadow-md">
            <div className="flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Start Toggle */}
                    <button 
                        aria-controls="sidebar" 
                        onClick={(e) => {
                        e.stopPropagation();
                        props.setSidebarOpen(!props.sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden">
                        <Icon name="AlignJustify" color={"#a3a3a3"} size={24} />
                    </button>
                    {/* End Toggle */}
                    {/* Start Logo */}
                    <Logo />
                    {/* End Logo */}
                </div>
                {/* Start Search */}
                <Search />
                {/* End Search */}
                <div className="flex flex-grow items-center justify-end gap-3 2xsm:gap-7">
                    <ul className="flex gap-2 2xsm:gap-4">
                        {/* Start Notification */}
                        <Notification />
                        {/* End Notification */}
                        {/* Start Message */}
                        <Message />
                        {/* End Message */}
                    </ul>
                    {/* Start User */}
                    <User />
                    {/* End User */}
                </div>
            </div>
        </header>
    )
}

export default Header;