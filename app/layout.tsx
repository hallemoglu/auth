"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

import "./globals.css";

import Header from "./../components/Header/index";
import Sidebar from "./../components/Sidebar/index";


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [path, setPath] = useState(usePathname().substring(1,5));
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  return (
    <html>
      <body className={inter.className}>
          <div className="flex h-screen overflow-hidden">
            {/* Start Sidebar */}
            {path !== "auth" &&
            <Sidebar 
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            }
            {/* End Sidebar */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* Start Header */}
              {path !== "auth" &&
              <Header 
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              }
              {/* End Header */}
              {/* Start Main Content */}
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
              {/* End Main Content */}
            </div>
          </div>
      </body>
    </html>
  )
}
