'use client'
import React from 'react';
import {PricingTable} from "@clerk/nextjs";

const Subscriptions = () => {
    return (
        <main className="items-center">
            <p>Pricing Plans Page</p>
            <PricingTable />
        </main>
    );
};

export default Subscriptions;