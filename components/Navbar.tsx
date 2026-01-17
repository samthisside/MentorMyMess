import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import NavItems from "@/components/NavItems";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="items-center flex gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        width={24}
                        height={46}
                    />
                </div>
            </Link>
            <div className=" items-center flex gap-8 ">
                <NavItems />
                <p>Sign in</p>
            </div>
        </nav>
    );
};

export default Navbar;