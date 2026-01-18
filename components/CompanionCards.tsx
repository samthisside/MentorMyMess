import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({id, name, topic, subject, duration, color}: CompanionCardProps) => {
    return (
        <article className="companion-card" style={{background: color}}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">
                    {subject}
                </div>
                <button className="companion-bookmark">
                    <Image src="/icons/bookmark.svg" alt="bookmark" width={12.5} height={15}/>
                </button>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm-400">{topic}</p>
            <div className="items-center flex gap-2">
                <Image src="/icons/clock.svg" alt="Clock" width={12.5} height={15}/>
                <p className="text-sm">{duration} Minutes</p>
            </div>
            <Link href={`/companions/${id}`} className="w-full">
                <button className="btn-primary">
                    Launch Session
                </button>
            </Link>

        </article>
    );
};

export default CompanionCard;