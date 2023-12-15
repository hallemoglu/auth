"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

    return(
        <aside
          ref={sidebar}
          className={`sidebar absolute left-0 top-0 z-9999 flex h-screen w-76 flex-col overflow-y-hidden bg-gray-900 duration-300 ease-linear lg:static lg:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
        {/* <!-- Start Sidebar Header --> */}
        <div className="flex items-center justify-between gap-5 px-14 py-6 lg:py-7">
          <Link href="/dashboard">
            <Image
              width={176}
              height={32}
              src={"/images/logo/logo.svg"}
              alt="Logo"
            />
          </Link>
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
            className="block lg:hidden"
          >
          <Icon name={"ArrowLeft"} color={"#f1f1f1"} size={26} />
          </button>
        </div>
        {/* <!-- End Sidebar Header --> */}
          
        {/* Start Sidebar Menu */}
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
            <div>
              <h3 className="mb-4 ml-4 text-sm font-semibold text-gray-200">
                MENU
              </h3>
              <ul className="mb-6 flex flex-col gap-1.5">
                <SidebarMenu 
                  url={"dashboard"}
                  icon={"Airplay"}
                  name={"Hızlı Bakış"}
                />
                <SidebarMenu 
                  url={"articles"}
                  icon={"BookOpen"}
                  name={"İçerikler"}
                />
                <SidebarMenu 
                  url={"categories"}
                  icon={"LayoutList"}
                  name={"Kategoriler"}
                />
                <SidebarMenu 
                  url={"products"}
                  icon={"Boxes"}
                  name={"Ürünler"}
                />
                <SidebarMenu 
                  url={"orders"}
                  icon={"ShoppingCart"}
                  name={"Siparişler"}
                />
                <SidebarMenu 
                  url={"users"}
                  icon={"Users"}
                  name={"Kullanıcılar"}
                />
                <SidebarMenu 
                  url={"comments"}
                  icon={"MessagesSquare"}
                  name={"Yorumlar"}
                />
                <SidebarMenu 
                  url={"reports"}
                  icon={"LineChart"}
                  name={"Raporlar"}
                />
                <SidebarMenu 
                  url={"settings"}
                  icon={"Settings"}
                  name={"Ayarlar"}
                />
                <SidebarMenu 
                  url={"documents"}
                  icon={"FileText"}
                  name={"Dökümantasyon"}
                />
                
              </ul>
            </div>
          </nav>
        </div>
        {/* End Sidebar Menu */}
        
      </aside>
    )
}

export default Sidebar;