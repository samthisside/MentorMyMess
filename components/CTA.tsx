import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
    return (
        <section className="cta-section">
            <p className="cta-badge">
                Start Learning Your Way
            </p>
            <h2 className="text-2xl font-semibold">
                Build Your Personalized Learning
            </h2>
            <p>Pick a Name, Subject, Voice and Personality. Create Your Custom Companion and Learn Everything. Become a
                Renaissance Man</p>
            <Image src='/images/cta.svg' alt='Cta text' width={362} height={232}/>
            <button className="btn-lg btn-primary">
                <Image src='/icons/plus.svg' alt='icon' width={12} height={12}/>
                <Link href='/companions/new'><p>Build Your Companion</p></Link>
            </button>
        </section>
    );
};

export default CTA;