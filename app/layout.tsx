"use client"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import Cookie from "@/components/Cookie";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children} : {children: React.ReactNode}) {

  const pathname = usePathname();

  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    NProgress.done();
    return () => { NProgress.start(); };
  }, [pathname]);
  
  return (
    <html>
      <body className={inter.className}>
          <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <main>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  {children}
                </div>
              </main>
            </div>
          </div>
          <Cookie />
      </body>
    </html>
  )
}
