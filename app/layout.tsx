import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />
            <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hidden">
              {children}
            </div>
          </div>
          <Toaster position="top-center"/>
        </body>
      </html>
    </ClerkProvider>
  );
}
