"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
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
    // Shared transition config
    const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

    return (
        <SectionContainer id="about" className="py-12 md:py-24 border-none flex flex-col justify-center px-0 md:px-0">
            <motion.div
                className="relative z-10 mx-auto w-full max-w-7xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                {/* ── Bento Box Container ── */}
                <div className="relative w-full flex flex-col lg:flex-row shadow-sm">
                    {/* ── Outer SVG Frame for Bento Box ── */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                        <line x1="0" y1="100%" x2="100%" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />
                        <line x1="0" y1="0" x2="0" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />
                        <line x1="100%" y1="0" x2="100%" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />

                        {/* Corner markers */}
                        <path d="M -4 0 L 4 0 M 0 -4 L 0 4" className="stroke-muted-foreground/40" strokeWidth="1" />
                        <path d="M calc(100% - 4px) 0 L calc(100% + 4px) 0 M 100% -4 L 100% 4" className="stroke-muted-foreground/40" strokeWidth="1" />
                        <path d="M -4 100% L 4 100% M 0 calc(100% - 4px) L 0 calc(100% + 4px)" className="stroke-muted-foreground/40" strokeWidth="1" />
                        <path d="M calc(100% - 4px) 100% L calc(100% + 4px) 100% M 100% calc(100% - 4px) L 100% calc(100% + 4px)" className="stroke-muted-foreground/40" strokeWidth="1" />
                    </svg>

                    {/* ─── Left Panel: Text Content ─── */}
                    <div className="relative w-full lg:w-[45%] py-12 md:py-20 px-6 md:px-12 flex flex-col justify-center shrink-0 bg-background/50 backdrop-blur-sm">
                        {/* ── Vertical Line Separator (Desktop) ── */}
                        <svg className="absolute top-0 right-0 w-px h-full overflow-visible hidden lg:block z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />
                            <path d="M -4 50% L 4 50%" className="stroke-muted-foreground/30" strokeWidth="1" />
                        </svg>

                        {/* ── Horizontal Line Separator (Mobile) ── */}
                        <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible lg:hidden z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                        </svg>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ ...transition, delay: 0.1 }}
                            className="relative z-10 space-y-8"
                        >
                            <div>
                                <span className="font-mono text-xs md:text-sm text-primary tracking-widest font-medium mb-4 block">
                                    01. / ABOUT ME
                                </span>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                                    Engineering with <br className="hidden md:block" /> Form & Function.
                                </h2>
                            </div>

                            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base max-w-md">
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
                    <div className="flex flex-col w-full lg:flex-1 bg-background/50 backdrop-blur-sm relative z-0">
                        {/* Row 1 — Title */}
                        <div className="relative flex items-center px-6 md:px-12 py-6 md:py-10">
                            {/* ── Horizontal Line Separator ── */}
                            <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                            </svg>

                            <motion.h3
                                className="font-mono text-xs md:text-sm text-muted-foreground tracking-widest relative z-10 uppercase"
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                Core Technologies
                            </motion.h3>
                        </div>

                        {/* Row 2 — Tech Stack Cards */}
                        <div className="relative flex-1 p-6 md:p-12">
                            <motion.div
                                className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                                    }
                                }}
                            >
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 10, scale: 0.95 },
                                            visible: { opacity: 1, y: 0, scale: 1 }
                                        }}
                                        transition={transition}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-border/50 bg-muted/20 hover:bg-muted/50 hover:border-primary/30 transition-all duration-300 cursor-default"
                                    >
                                        <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                            <skill.icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </SectionContainer>
    );
}
