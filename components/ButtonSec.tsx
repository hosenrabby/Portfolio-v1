import React from "react";
import { cn } from "@/lib/utils"; // optional helper if you use it

type ButtonSecProps = {
    text: string;
    onClick?: () => void;
    href?: string;
    className?: string;
    icon?: React.ReactNode; // 👈 icon prop
};

const ButtonSec: React.FC<ButtonSecProps> = ({ text, onClick, href, className, icon }) => {
    const ButtonContent = (
        <span
            className={cn(
                "relative inline-flex items-center gap-2 font-anton py-3 px-8 tracking-wider group cursor-pointer",
                className
            )}
        >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white group-hover:bg-primary"></span>
            <span className="relative flex items-center gap-2 text-black">
                {text}
                {icon && <span className="text-lg">{icon}</span>}
            </span>
        </span>
    );

    if (href) {
        return (
            <a
                href={href}
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
            >
                {ButtonContent}
            </a>
        );
    }

    return (
        <button onClick={onClick} className="inline-block">
            {ButtonContent}
        </button>
    );
};

export default ButtonSec;
