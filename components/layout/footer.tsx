"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// Custom Minimal Icons
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

function NextIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M9 15V9l6 6v-6" />
            <circle cx="12" cy="12" r="10" />
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

function FramerIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M5 4h14l-7 7m0 0h7v7l-7 7v-7H5V4z" fill="currentColor" stroke="none" />
        </svg>
    );
}

function VercelIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
            <path d="M12 3l9 16H3z" />
        </svg>
    );
}

function TSIcon(props: React.ComponentProps<"svg">) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M6 10h5" />
            <path d="M8.5 10v6" />
            <path d="M16.5 10C14.5 10 13.5 10 13.5 11.5C13.5 13 16.5 13 16.5 14.5C16.5 16 13.5 16 12.5 15" />
        </svg>
    );
}

const techStack = [
    { name: "React", icon: ReactIcon, href: "https://react.dev/" },
    { name: "Next.js", icon: NextIcon, href: "https://nextjs.org/" },
    { name: "Tailwind CSS", icon: TailwindIcon, href: "https://tailwindcss.com/" },
    { name: "Framer Motion", icon: FramerIcon, href: "https://www.framer.com/motion/" },
    { name: "Vercel", icon: VercelIcon, href: "https://vercel.com/" },
    { name: "TypeScript", icon: TSIcon, href: "https://www.typescriptlang.org/" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full overflow-hidden bg-background">
            <SectionContainer id="footer" className="py-20 md:py-32 flex flex-col items-center">
                <motion.div
                    className="w-full max-w-4xl mx-auto space-y-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Opensource / Built With Section */}
                    <div className="space-y-8">
                        <div className="flex items-end justify-between border-b border-border/50 pb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Opensource</h3>
                            <Link href="https://github.com/udayahire2" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2 text-sm font-medium">
                                <Github className="w-5 h-5" />
                                <span className="hidden sm:inline">Follow on GitHub</span>
                            </Link>
                        </div>

                        <p className="text-muted-foreground text-sm md:text-base max-w-2xl leading-relaxed">
                            This portfolio is built with modern, open-source technologies to ensure optimal performance, accessibility, and a premium user experience. I strongly believe in giving back to the community that builds the tools I use daily.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pt-4">
                            {techStack.map((tech, i) => (
                                <motion.a
                                    href={tech.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={tech.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                                    className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 rounded-2xl border border-border/80 bg-card hover:border-border hover:shadow-md transition-all duration-300 group cursor-pointer"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-muted/40 border-0 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
                                        <tech.icon className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm md:text-base font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
                                            {tech.name}
                                        </span>
                                        <span className="text-xs text-muted-foreground mt-0.5 group-hover:text-primary/70 transition-colors">
                                            View project &rarr;
                                        </span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-px bg-linear-to-r from-transparent via-border/60 to-transparent" />

                    {/* Footer Bottom Setup */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 pt-4 border-t border-border/50 md:border-t-0 md:pt-0">
                        <div className="flex flex-col justify-center items-center md:items-start gap-1.5 text-center md:text-left">
                            <p className="text-base font-medium text-foreground tracking-tight">
                                Built with Next.js, Tailwind CSS & Framer Motion.
                            </p>
                            <p className="text-sm text-muted-foreground">
                                © {currentYear} Uday Ahire. All rights reserved.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/udayahire2", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/uday-ahire-0855b22b4/", label: "LinkedIn" },
                                { icon: Instagram, href: "https://www.instagram.com/udayahire.exe/", label: "Instagram" },
                                { icon: Mail, href: "mailto:auday248@outlook.com", label: "Email" }
                            ].map((social, idx) => (
                                <Link
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="w-11 h-11 flex items-center justify-center rounded-full border border-border/80 bg-background text-muted-foreground hover:bg-muted hover:text-foreground hover:border-border transition-all duration-300 shadow-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 transition-transform duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* System Status indicator */}
                    <div className="flex justify-center pt-8 pb-4">
                        <div className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-border/80 bg-card shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                            </span>
                            <span className="font-mono text-[11px] md:text-xs uppercase tracking-widest font-medium text-muted-foreground">
                                System Operational
                            </span>
                        </div>
                    </div>
                </motion.div>
            </SectionContainer>
        </footer>
    );
}

