"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, MapPin, Mail, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroBackground } from "@/components/ui/hero-background";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionContainer } from "@/components/layout/section-container";

export function HeroBento() {
    return (
        <SectionContainer
            fullWidthClassName="min-h-[calc(100vh-4rem)] bg-background flex items-center py-12 md:py-24 lg:py-32"
        >
            <div className="w-full mx-auto max-w-5xl">
                {/* Grid Wrapper with 1px gap for borders */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border overflow-hidden rounded-xl shadow-sm">

                    {/* Cell 1: Header / Cover (Full Width) */}
                    <div className="col-span-1 md:col-span-4 h-48 md:h-64 relative bg-background overflow-hidden group">
                        <HeroBackground />
                        {/* Optional: Add a subtle overlay or pattern if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>

                    {/* Cell 2: Profile Info (Span 3) */}
                    <div className="col-span-1 md:col-span-3 p-6 md:p-8 bg-background flex flex-col justify-end relative">
                        {/* Avatar - Negatively positioned to overlap cover */}
                        <div className="absolute -top-12 left-6 md:left-8">
                            <div className="p-1.5 bg-background rounded-full">
                                <Avatar className="h-20 w-20 md:h-24 md:w-24 border-2 border-border shadow-lg">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>UA</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>

                        <div className="mt-10 md:mt-12 space-y-4">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Uday Ahire</h1>
                                <p className="text-lg text-muted-foreground font-medium">Full Stack Developer</p>
                            </div>

                            <p className="text-base text-muted-foreground/80 max-w-xl leading-relaxed">
                                Crafting accessible, pixel-perfect user interfaces that blend aesthetic design with robust engineering. Warning: May cause excessive delight.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                <Badge variant="outline" className="px-3 py-1 border-primary/20 bg-primary/5 text-primary">
                                    Open Source Contributor
                                </Badge>
                                <Badge variant="outline" className="px-3 py-1">
                                    <MapPin className="w-3 h-3 mr-1" /> India
                                </Badge>
                            </div>
                        </div>
                    </div>

                    {/* Cell 3: Status / Actions (Span 1) */}
                    <div className="col-span-1 md:col-span-1 p-6 bg-background flex flex-col justify-between border-t md:border-t-0 md:border-l border-border min-h-[200px]">
                        <div className="space-y-4">
                            <Badge variant="secondary" className="w-full justify-center py-1.5 bg-green-500/10 text-green-600 border-green-500/20 hover:bg-green-500/20">
                                <span className="relative flex h-2 w-2 mr-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                Available
                            </Badge>
                            <Button className="w-full" size="sm">
                                <Mail className="w-4 h-4 mr-2" /> Contact
                            </Button>
                        </div>

                        <div className="flex flex-col gap-3 pt-8">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Socials</p>
                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                                    <Github className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-foreground">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Cell 4: Tech Stack / Footer (Span 4) */}
                    <div className="col-span-1 md:col-span-4 p-4 md:p-6 bg-background/50 flex items-center justify-between border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <LinkIcon className="w-4 h-4" />
                            <span className="hidden sm:inline">Portfolio currently under construction.</span>
                            <span>v1.0.0</span>
                        </div>
                        <div className="flex gap-4 text-sm font-medium text-muted-foreground/60">
                            <span>Next.js</span>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Tailwind</span>
                        </div>
                    </div>

                </div>
            </div>
        </SectionContainer>
    );
}
