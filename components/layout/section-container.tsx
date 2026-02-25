import React from "react";
import { cn } from "@/lib/utils";
import { SectionFrame } from "./section-frame";

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    fullWidthClassName?: string;
    containerClassName?: string;
}

export function SectionContainer({
    children,
    className,
    fullWidthClassName,
    containerClassName,
    ...props
}: SectionContainerProps) {
    return (
        <section className={cn("w-full relative flex flex-col items-center", fullWidthClassName)}>

            {/* SVG Frame */}
            <SectionFrame />

            <div
                className={cn(
                    "max-w-7xl mx-auto w-full relative z-10 px-4 md:px-6",
                    containerClassName,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </section>
    );
}