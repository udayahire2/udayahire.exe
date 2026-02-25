"use client";

import React from "react";
import { SectionContainer } from "@/components/layout/section-container";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40 bg-background/50 backdrop-blur-xl">
            <SectionContainer className="py-12 md:py-16 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-foreground">
                            UdayAhire
                        </Link>
                        <p className="text-muted-foreground max-w-sm">
                            Building digital experiences that blend performance with exceptional design. Contact me for freelance opportunities.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://github.com/uday" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/uday" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com/in/uday" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:hello@uday.dev" className="text-muted-foreground hover:text-foreground transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Navigation</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#about" className="hover:text-foreground transition-colors">About</Link></li>
                            <li><Link href="#projects" className="hover:text-foreground transition-colors">Projects</Link></li>
                            <li><Link href="#blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                            <li><Link href="#contact" className="hover:text-foreground transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-foreground">Resources</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="/uses" className="hover:text-foreground transition-colors">Uses</Link></li>
                            <li><Link href="/guestbook" className="hover:text-foreground transition-colors">Guestbook</Link></li>
                            <li><Link href="/rss" className="hover:text-foreground transition-colors">RSS Feed</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} Uday Ahire. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>Built with Next.js, Tailwind & Framer Motion</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" title="System Operational" />
                    </div>
                </div>
            </SectionContainer>
        </footer>
    );
}
