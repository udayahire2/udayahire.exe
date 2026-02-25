"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Twitter, Mail, BadgeCheck, Volume2 } from "lucide-react";
import { SectionContainer } from "@/components/layout/section-container";


export function HeroProfile() {
    return (
        <SectionContainer className="pt-16 md:pt-24 pb-16 md:pb-24 border-none flex flex-col justify-center">
            <motion.div
                className="relative z-10 mx-auto w-full max-w-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* ── Main bordered container ── */}
                <div className="relative border border-border/40 rounded-none">


                    <div className="flex flex-col md:flex-row w-full">
                        {/* ─── Left Panel: Avatar ─── */}
                        <div className="relative shrink-0 flex items-center justify-center w-full md:w-[280px] aspect-square border-b md:border-b-0 md:border-r border-border/40">

                            <motion.div
                                initial={{ scale: 0.85, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 180, damping: 20 }}
                            >
                                <Avatar className="w-44 h-44 md:w-52 md:h-52 border border-border/30 bg-muted/30 rounded-full">
                                    <AvatarImage src="/avatar-placeholder.png" alt="Profile" className="object-cover" />
                                    <AvatarFallback className="text-5xl font-semibold bg-muted text-muted-foreground">UA</AvatarFallback>
                                </Avatar>
                            </motion.div>
                        </div>

                        {/* ─── Right Panel: Content Rows ─── */}
                        <div className="flex flex-col flex-1 w-full">

                            {/* Row 1 — Mono tagline */}
                            <div className="relative px-6 md:px-10 py-5 md:py-6 border-b border-border/40 flex items-end">

                                <motion.span
                                    className="font-mono text-xs md:text-sm text-muted-foreground/50 tracking-widest"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    PORTFOLIO
                                </motion.span>
                            </div>

                            {/* Row 2 — Name + Badge + Volume */}
                            <div className="relative px-6 md:px-10 py-6 md:py-8 border-b border-border/40 flex items-center gap-3">

                                <motion.h1
                                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Uday Ahire
                                </motion.h1>
                                <motion.div
                                    className="flex items-center gap-2 mt-1"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-blue-500 shrink-0" strokeWidth={2.5} />
                                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground/40 hover:text-foreground cursor-pointer transition-colors shrink-0" strokeWidth={2} />
                                </motion.div>
                            </div>

                            {/* Row 3 — Role / Description */}
                            <div className="relative px-6 md:px-10 py-5 md:py-6 flex flex-col gap-5">
                                <motion.div
                                    className="flex flex-col gap-1.5"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.55 }}
                                >
                                    <p className="text-sm md:text-base text-muted-foreground font-medium">
                                        Design Engineer
                                    </p>
                                    <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-md">
                                        Building clean, accessible web interfaces with React & Next.js.
                                    </p>
                                </motion.div>

                                <motion.div
                                    className="flex flex-wrap items-center gap-2"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.65 }}
                                >
                                    <Button className="rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors border-0 px-5 h-9 text-sm font-medium">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact Me
                                    </Button>

                                    <Button variant="outline" size="icon" className="rounded-md border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-9 w-9 bg-transparent">
                                        <Github className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-md border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-9 w-9 bg-transparent">
                                        <Linkedin className="w-4 h-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="rounded-md border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors h-9 w-9 bg-transparent">
                                        <Twitter className="w-4 h-4" />
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </SectionContainer>
    );
}

