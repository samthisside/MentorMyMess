import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCards";
import CTA from "@/components/CTA";
import CompanionsList from "@/components/CompanionsList";
import {recentSessions} from "@/constants";

const Page = () => {
    return (
        <main>
            <h1 className="text-2xl underline">Most Popular Companions</h1>
            <section className="home-section">
                <CompanionCard
                id="123"
                name="Structural Neuroscience"
                topic="Study of Medula Obloganta"
                subject="neuroscience"
                duration={45}
                color="#ffda6e"
                />
                <CompanionCard
                    id="1234"
                    name="Quantum Computing"
                    topic="Schrodinger Experiments"
                    subject="quantum mechanics"
                    duration={45}
                    color="#e5d0ff"
                />
                <CompanionCard
                    id="12345"
                    name="Sociology"
                    topic="Labeling Theory of Deviancy"
                    subject="sociology"
                    duration={45}
                    color="#bde7ff"
                />

            </section>

            <section className="home-section">
                <CompanionsList
                title="Recently Completeed Session"
                companions={recentSessions}
                classNames="w-2/3 max-lg:w-full"
                />
                <CTA />
            </section>
        </main>
    )
}

export default Page