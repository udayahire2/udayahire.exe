"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroSection() {
    return (
        <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-10 md:py-20 lg:py-32">

            <SectionContainer className="px-4 md:px-6">
                <div className="flex flex-col items-center text-center gap-8">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Badge variant="secondary" className="px-4 py-1 text-sm font-normal rounded-full border border-border bg-transparent text-muted-foreground hover:bg-muted/50">
                            Available for new projects
                        </Badge>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="max-w-4xl space-y-4"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground">
                            Building <span className="text-foreground">Digital Experiences</span> that <span className="text-muted-foreground/60">Matter.</span>
                        </h1>
                    </motion.div>

                    {/* Subheading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
                            I'm a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend aesthetic design with robust engineering.
                        </p>
                    </motion.div>

                    {/* Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-4 mt-4"
                    >
                        <Button size="lg" className="h-11 px-8 text-base rounded-md group bg-foreground text-background hover:bg-foreground/90 shadow-none">
                            View Work
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="ghost" className="h-11 px-8 text-base rounded-md hover:bg-muted text-foreground">
                            Contact Me
                        </Button>
                    </motion.div>

                    {/* Social Proof / Tech Stack Icons (Optional Mini-Section) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="pt-12 text-muted-foreground/60 flex items-center gap-8"
                    >
                        <Github className="w-5 h-5 hover:text-foreground transition-colors cursor-pointer" />
                        <Linkedin className="w-5 h-5 hover:text-foreground transition-colors cursor-pointer" />
                        <Twitter className="w-5 h-5 hover:text-foreground transition-colors cursor-pointer" />
                    </motion.div>
                </div>
            </SectionContainer>
        </section>
    );
}
