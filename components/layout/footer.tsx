"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Github, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const transition = { type: "spring" as const, stiffness: 100, damping: 20 };

    return (
        <footer className="relative w-full overflow-hidden bg-background">
            <SectionContainer id="footer" className="py-12 md:py-24 border-none flex flex-col justify-center px-0 md:px-0">
                <motion.div
                    className="relative z-10 mx-auto w-full max-w-7xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    {/* ── Bento Box Container ── */}
                    <div className="relative w-full flex flex-col shadow-sm group">
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

                        <div className="flex flex-col lg:flex-row w-full relative z-10">
                            {/* CTA Section (Left) */}
                            <div className="relative w-full lg:w-[60%] p-8 md:p-16 flex flex-col justify-between bg-background/50 backdrop-blur-sm">
                                {/* Vertical separator for desktop */}
                                <svg className="absolute top-0 right-0 w-px h-full overflow-visible hidden lg:block z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="0" x2="0" y2="100%" className="stroke-border" strokeWidth="1" opacity="0.4" />
                                </svg>
                                {/* Horizontal separator for mobile */}
                                <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible lg:hidden z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                                </svg>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ ...transition, delay: 0.1 }}
                                    className="space-y-6"
                                >
                                    <span className="font-mono text-xs md:text-sm text-primary tracking-widest font-medium">
                                        04. / WHAT'S NEXT?
                                    </span>
                                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-[1.05]">
                                        Let's build <br />
                                        <span className="text-muted-foreground">something great.</span>
                                    </h2>
                                    <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
                                        Whether you have a vision to realize or need a modern technical solution, I am open to freelance opportunities and collaborations.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ ...transition, delay: 0.2 }}
                                    className="mt-12 lg:mt-24"
                                >
                                    <a href="mailto:auday248@outlook.com" className="inline-flex items-center gap-2 px-6 py-4 bg-foreground text-background font-medium rounded-full hover:scale-105 active:scale-95 transition-all duration-300">
                                        Start a conversation <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                </motion.div>
                            </div>

                            {/* Links & Info Section (Right) */}
                            <div className="relative w-full lg:w-[40%] flex flex-col bg-background/50 backdrop-blur-sm">
                                <div className="p-8 md:p-12 flex-1 grid grid-cols-2 gap-8">
                                    {/* Navigation */}
                                    <div className="space-y-6">
                                        <h3 className="font-mono text-xs md:text-sm text-foreground tracking-widest uppercase">Navigation</h3>
                                        <ul className="space-y-4">
                                            {["About", "Projects", "Blog", "Contact"].map((item, i) => (
                                                <motion.li
                                                    key={item}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                                >
                                                    <Link href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 group">
                                                        <span className="w-0 h-px bg-primary transition-all group-hover:w-3 mr-0 group-hover:mr-2 duration-300"></span>
                                                        {item}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Resources */}
                                    <div className="space-y-6">
                                        <h3 className="font-mono text-xs md:text-sm text-foreground tracking-widest uppercase">Resources</h3>
                                        <ul className="space-y-4">
                                            {[
                                                { label: "Uses", href: "/uses" },
                                                { label: "Guestbook", href: "/guestbook" },
                                                { label: "RSS Feed", href: "/rss" }
                                            ].map((item, i) => (
                                                <motion.li
                                                    key={item.label}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                                >
                                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex items-center gap-1 group">
                                                        <span className="w-0 h-px bg-primary transition-all group-hover:w-3 mr-0 group-hover:mr-2 duration-300"></span>
                                                        {item.label}
                                                    </Link>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Social Links & Status */}
                                <div className="relative p-8 md:p-12">
                                    {/* Horizontal separator */}
                                    <svg className="absolute top-0 left-0 w-full h-px overflow-visible z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                        <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                                    </svg>

                                    <div className="flex flex-wrap gap-4 items-center">
                                        {[
                                            { icon: Github, href: "https://github.com/udayahire2" },
                                            { icon: Instagram, href: "https://www.instagram.com/udayahire.exe/" },
                                            { icon: Linkedin, href: "https://www.linkedin.com/in/uday-ahire-0855b22b4/" },
                                            { icon: Mail, href: "mailto:auday248@outlook.com" }
                                        ].map((social, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.5 + (idx * 0.1) }}
                                                className="w-10 h-10 flex items-center justify-center rounded-full border border-border/50 bg-muted/20 text-muted-foreground hover:bg-foreground hover:text-background hover:scale-110 active:scale-95 transition-all duration-300"
                                            >
                                                <social.icon className="w-4 h-4" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar Options */}
                        <div className="relative flex flex-col sm:flex-row items-center justify-between p-6 md:px-12 md:py-8 bg-background/80 backdrop-blur-md text-xs md:text-sm text-muted-foreground z-10 w-full">
                            {/* Horizontal separator */}
                            <svg className="absolute top-0 left-0 w-full h-px overflow-visible z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" opacity="0.4" />
                            </svg>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="mb-4 sm:mb-0 text-center sm:text-left font-medium flex items-center gap-2"
                            >
                                <span className="font-bold text-foreground text-sm tracking-tight border border-border/50 rounded-sm px-1.5 py-0.5 shadow-sm">UdayAhire</span> © {currentYear}.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center gap-4"
                            >
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/20">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-wider font-semibold text-emerald-500/80">
                                        System Operational
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </SectionContainer>
        </footer>
    );
}
