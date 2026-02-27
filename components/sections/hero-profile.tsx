"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Instagram, Mail, BadgeCheck, Volume2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroProfile() {
    return (
        <SectionContainer className="px-4 md:px-6 py-12 md:py-24 border-none flex flex-col justify-center">
            <motion.div
                className="relative z-10 mx-auto w-full max-w-5xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                {/* ── Premium Product Card Container ── */}
                <div className="relative w-full flex flex-col md:flex-row rounded-3xl border border-border/80 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">

                    {/* ─── Left Panel: Avatar ─── */}
                    <div className="relative w-full md:w-[40%] py-12 md:py-16 flex items-center justify-center shrink-0 bg-muted/10 border-b md:border-b-0 md:border-r border-border/50">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
                            className="relative z-10"
                        >
                            <Avatar className="w-48 h-48 md:w-56 md:h-56 border border-border/50 bg-background shadow-xl ring-4 ring-background/50">
                                <AvatarImage src="https://avatars.githubusercontent.com/u/166685625?v=4" alt="Profile" className="object-cover" />
                                <AvatarFallback className="text-5xl font-semibold bg-muted text-muted-foreground">UA</AvatarFallback>
                            </Avatar>
                        </motion.div>
                    </div>

                    {/* ─── Right Panel: Content Rows ─── */}
                    <div className="flex flex-col w-full md:flex-1 relative z-0">

                        {/* Row 1 — Mono tagline */}
                        <div className="relative flex flex-col justify-end px-6 md:px-10 py-6 md:py-8 border-b border-border/50">
                            <motion.span
                                className="font-mono text-xs md:text-sm text-muted-foreground tracking-widest font-medium uppercase"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Portfolio
                            </motion.span>
                        </div>

                        {/* Row 2 — Name + Badge + Volume */}
                        <div className="relative flex items-center px-6 md:px-10 py-6 md:py-8 gap-3 border-b border-border/50">
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                Uday Ahire
                            </motion.h1>
                            <motion.div
                                className="flex items-center gap-2 mt-1"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.35 }}
                            >
                                <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-primary shrink-0" strokeWidth={2.5} />
                                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors shrink-0" strokeWidth={2} />
                            </motion.div>
                        </div>

                        {/* Row 3 — Role / Description */}
                        <div className="relative flex-1 flex flex-col justify-start px-6 md:px-10 py-6 md:py-8 gap-6 bg-muted/5">
                            <motion.div
                                className="flex flex-col gap-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <p className="text-base md:text-lg text-foreground font-semibold">
                                    Design Engineer
                                </p>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                                    Bridging the gap between robust engineering and pixel-perfect design. Building clean, accessible web interfaces with React & Next.js.
                                </p>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap items-center gap-3 pt-2 mt-auto"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Button asChild className="rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all active:scale-95 border-0 px-6 h-10 text-sm font-medium shadow-sm">
                                    <a href="mailto:auday248@outlook.com">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact Me
                                    </a>
                                </Button>

                                <div className="flex items-center gap-2 ml-1">
                                    <Button asChild variant="outline" size="icon" className="group rounded-full border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all h-10 w-10 bg-background shadow-sm active:scale-95">
                                        <a href="https://github.com/udayahire2" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon" className="group rounded-full border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all h-10 w-10 bg-background shadow-sm active:scale-95">
                                        <a href="https://www.linkedin.com/in/uday-ahire-0855b22b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                            <Linkedin className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="icon" className="group rounded-full border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all h-10 w-10 bg-background shadow-sm active:scale-95">
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
