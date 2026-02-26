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
    return (
        <SectionContainer id="about" className="py-24 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">About</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Crafting nice experiences since 2021
                        </h2>

                        <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                            <p>
                                I am a passionate software engineer with a strong focus on building scalable web applications and intuitive user interfaces. My journey began with a curiosity for how things work on the web, which quickly turned into a career dedicated to solving complex problems through code.
                            </p>
                            <p>
                                With over 3 years of experience, I have had the privilege of working with startups and established companies, helping them transform their ideas into robust digital solutions. I thrive in collaborative environments and am always eager to learn new technologies.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through technical writing.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div>
                    <div className="grid grid-cols-3 gap-3">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                className="p-4 rounded-md border border-border bg-transparent flex flex-col items-center justify-center gap-2.5 text-center cursor-default group hover:bg-muted/30 transition-colors"
                            >
                                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                    <skill.icon className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-xs text-foreground/80">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <p className="text-xs font-mono text-muted-foreground">
                            Currently exploring <span className="text-foreground">Rust & WebAssembly</span>
                        </p>
                    </motion.div>
                </div>

            </div>
        </SectionContainer>
    );
}
