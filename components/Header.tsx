"use client";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
//Link
import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";
function Header() {
  const { user } = useUser();
  return (
    <div className=" flex justify-between p-5 items-center">
      {user && (
        <Link href="/">
          <h1 className="text-2xl">
            {user?.firstName}
            {`'s `}Space
          </h1>
        </Link>
      )}
      {/* Breadcrumbs */}
      <Breadcrumbs />
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
export default Header;
