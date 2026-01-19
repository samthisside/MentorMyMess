import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavItems from "@/components/NavItems";

import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton, SignUp,
} from '@clerk/nextjs'
import SignIn from "@/app/sign-in/page";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="items-center flex gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={74}
                        height={76}
                    />
                </div>
            </Link>
            <div className=" items-center flex gap-8 ">
                <NavItems/>
                <SignedOut>
                    <div>
                        <SignInButton>
                            <button className="btn-signin">
                                Log In
                            </button>
                        </SignInButton>
                    </div>
                </ SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                </SignedIn>
            </div>
        </nav>
    );
};

export default Navbar;