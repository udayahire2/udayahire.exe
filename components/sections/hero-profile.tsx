"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Instagram, Mail, BadgeCheck, Volume2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroProfile() {
    return (
        <SectionContainer className="py-12 md:py-24 border-none flex flex-col justify-center">
            <motion.div
                className="relative z-10 mx-auto w-full max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* ── Bento Box Container ── */}
                <div className="relative w-full flex flex-col md:flex-row shadow-sm">

                    {/* ── Outer SVG Frame for Bento Box ── */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1 1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="1" y2="0" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                        <line x1="0" y1="1" x2="1" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                        <line x1="0" y1="0" x2="0" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                        <line x1="1" y1="0" x2="1" y2="1" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                    </svg>

                    {/* ─── Left Panel: Avatar ─── */}
                    <div className="relative w-full md:w-[38%] py-12 md:py-20 flex items-center justify-center shrink-0 bg-background/50 backdrop-blur-sm">

                        {/* ── Vertical Line Separator (Desktop) ── */}
                        <svg className="absolute top-0 right-0 w-px h-full overflow-visible hidden md:block z-0 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="0" y2="100%" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                        </svg>

                        {/* ── Horizontal Line Separator (Mobile) ── */}
                        <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible md:hidden z-0 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                        </svg>

                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 20 }}
                            className="relative z-10"
                        >
                            <Avatar className="w-48 h-48 md:w-56 md:h-56 border border-border/30 bg-muted/30 rounded-full shadow-2xl">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/166685625?v=4" alt="Profile" className="object-cover" />
                                <AvatarFallback className="text-5xl font-semibold bg-muted text-muted-foreground">UA</AvatarFallback>
                            </Avatar>
                        </motion.div>
                    </div>

                    {/* ─── Right Panel: Content Rows ─── */}
                    <div className="flex flex-col w-full md:w-[100%] bg-background/50 backdrop-blur-sm relative z-0">

                        {/* Row 1 — Mono tagline */}
                        <div className="relative flex flex-col justify-end px-6 md:px-12 py-6 md:py-10">
                            {/* ── Horizontal Line Separator ── */}
                            <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible z-0 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                            </svg>

                            <motion.span
                                className="font-mono text-xs md:text-sm text-primary tracking-widest relative z-10 font-medium"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                PORTFOLIO
                            </motion.span>
                        </div>

                        {/* Row 2 — Name + Badge + Volume */}
                        <div className="relative flex items-center px-6 md:px-12 py-6 md:py-10 gap-3">
                            {/* ── Horizontal Line Separator ── */}
                            <svg className="absolute bottom-0 left-0 w-full h-px overflow-visible z-0 pointer-events-none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="100%" y2="0" className="stroke-border" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.6" />
                            </svg>

                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground relative z-10"
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Uday Ahire
                            </motion.h1>
                            <motion.div
                                className="flex items-center gap-2 mt-1 relative z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 shrink-0" strokeWidth={2.5} />
                                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors shrink-0" strokeWidth={2} />
                            </motion.div>
                        </div>

                        {/* Row 3 — Role / Description */}
                        <div className="relative flex-1 flex flex-col justify-start px-6 md:px-12 py-6 md:py-10 gap-6">
                            <motion.div
                                className="flex flex-col gap-2 relative z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.55 }}
                            >
                                <p className="text-base md:text-xl text-foreground font-semibold">
                                    Design Engineer
                                </p>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                                    Building clean, accessible web interfaces with React & Next.js.
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap items-center gap-3 relative z-10 pt-2"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.65 }}
                            >
                                <Button asChild className="rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors border-0 px-6 h-10 text-sm font-medium shadow-none">
                                    <a href="mailto:auday248@outlook.com">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact Me
                                    </a>
                                </Button>

                                <div className="flex items-center gap-2 ml-1">
                                    <Button asChild variant="outline" size="icon" className="group rounded-md border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-10 w-10 bg-transparent shadow-none">
                                        <a href="https://github.com/udayahire2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon" className="group rounded-md border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-10 w-10 bg-transparent shadow-none">
                                        <a href="https://www.linkedin.com/in/uday-ahire-0855b22b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon" className="group rounded-md border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-10 w-10 bg-transparent shadow-none">
                                        <a href="https://www.instagram.com/udayahire.exe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <Instagram className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </motion.div>
        </SectionContainer>
    );
}
