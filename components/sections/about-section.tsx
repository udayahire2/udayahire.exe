"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";

// ... (Icons remain the same)
function ReactIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <circle cx="12" cy="12" r="2.5" />
            <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.5" transform="rotate(150 12 12)" />
        </svg>
    );
}

function NextjsIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M9 15V9l6 6v-6" />
            <circle cx="12" cy="12" r="10" />
        </svg>
    );
}

function TypeScriptIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M6 10h5" />
            <path d="M8.5 10v6" />
            <path d="M16.5 10C14.5 10 13.5 10 13.5 11.5C13.5 13 16.5 13 16.5 14.5C16.5 16 13.5 16 12.5 15" />
        </svg>
    );
}

function TailwindIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M10 7C10 4 14 4 15 6C16 8 20 8 20 5" />
            <path d="M4 13C4 10 8 10 9 12C10 14 14 14 14 11" />
        </svg>
    );
}

function NodejsIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M12 3L4 7.5v9L12 21l8-4.5v-9z" />
            <path d="M12 12v9" />
            <path d="M12 12L4 7.5" />
            <path d="M12 12l8-4.5" />
        </svg>
    );
}

function PostgresIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M7 12V8c0-2.8 2.2-5 5-5s5 2.2 5 5v4" />
            <path d="M17 10h2a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-2" />
            <path d="M7 10H5a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h2" />
            <path d="M10 12v6.5c0 1.4 1.1 2.5 2.5 2.5H14" />
            <path d="M16 12v4" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="14" cy="10" r="1.5" />
        </svg>
    );
}

function UiUxIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
            <path d="M9 21V9" />
            <path d="M14 14l3.5 3.5" />
            <circle cx="14" cy="14" r="1.5" />
        </svg>
    );
}

function MobileFirstIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="6" y="2" width="12" height="20" rx="3" />
            <path d="M10 2h4" />
            <path d="M12 18h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function GitCiIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <circle cx="6" cy="18" r="2" />
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="12" r="2" />
            <path d="M6 8v8" />
            <path d="M6 8C6 12 18 8 18 10" />
        </svg>
    );
}

const skills = [
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextjsIcon },
    { name: "TypeScript", icon: TypeScriptIcon },
    { name: "Tailwind CSS", icon: TailwindIcon },
    { name: "Node.js", icon: NodejsIcon },
    { name: "PostgreSQL", icon: PostgresIcon },
    { name: "UI/UX Design", icon: UiUxIcon },
    { name: "Mobile First", icon: MobileFirstIcon },
    { name: "Git & CI/CD", icon: GitCiIcon },
];

export function AboutSection() {
    return (
        <SectionContainer id="about" className="py-24 md:py-32 px-4 md:px-6">
            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* ─── Left Panel: Text Content ─── */}
                    <div className="w-full lg:w-[45%] flex flex-col justify-center shrink-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="space-y-8"
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-px bg-primary/50"></span>
                                    <span className="font-mono text-xs md:text-sm text-primary uppercase tracking-widest font-medium">
                                        01. / About
                                    </span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                                    Engineering with <br className="hidden md:block" /> Form & Function.
                                </h2>
                            </div>

                            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                                <p>
                                    I am a Design Engineer who bridges the gap between meticulous UI/UX design and robust systems. I build applications that not only look exceptional but perform flawlessly.
                                </p>
                                <p>
                                    With a deep understanding of React, Next.js, and modern CSS architecture, I focus on crafting scalable, accessible, and beautifully animated web interfaces.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* ─── Right Panel: Skills Grid ─── */}
                    <div className="w-full lg:flex-1 relative">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 relative z-10">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                                    className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-border/60 bg-card hover:bg-muted/30 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                                >
                                    <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                        <skill.icon className="w-7 h-7" />
                                    </div>
                                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionContainer>
    );
}
