"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { SectionContainer } from "@/components/layout/section-container";

// --- Sound Hook ---
const AUDIO_FILE_PATH = "/mixkit-camera-shutter-click-1133.wav";

const useSound = (url: string) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Only create audio on client
        const audioObj = new Audio(url);
        setAudio(audioObj);
    }, [url]);

    const play = () => {
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("Audio play failed", e));
        }
    };

    return play;
};

// --- Theme Trigger Component ---
const ThemeTrigger = ({ progress }: { progress?: any }) => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const playSound = useSound(AUDIO_FILE_PATH);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full shrink-0 relative overflow-hidden group hover:bg-muted/50 transition-colors"
                aria-label="Theme toggle placeholder"
            >
                <div className="relative w-full h-full flex items-center justify-center opacity-0">
                    {/* Placeholder to keep layout stable */}
                </div>
            </Button>
        );
    }

    const isDark = theme === "dark";

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                playSound();
                setTheme(isDark ? "light" : "dark");
            }}
            className="w-10 h-10 rounded-full shrink-0 relative overflow-hidden group hover:bg-muted/50 transition-colors"
            aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Sun/Moon Morph using Framer Motion */}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-foreground transition-colors"
                    aria-hidden="true"
                >
                    {/* Center Circle (Sun Body / Moon Body) */}
                    <motion.circle
                        cx="12"
                        cy="12"
                        initial={false}
                        animate={{
                            r: isDark ? 9 : 5
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    <motion.g
                        initial={false}
                        animate={{
                            opacity: isDark ? 0 : 1,
                            rotate: isDark ? 90 : 0,
                            scale: isDark ? 0.5 : 1
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </motion.g>
                </svg>

                {/* Moon Crater Mask/Path integration placeholder */}
                <motion.div
                    className="absolute top-[30%] right-[30%] w-1.5 h-1.5 bg-background rounded-full"
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        opacity: isDark ? 0.4 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
            </div>
        </Button>
    );
};

import { SearchCommand } from "../search-command";

const navItems = [
    { name: "Portfolio", href: "#work" },
    { name: "Components", href: "#components" },
    { name: "Blog", href: "#blog" },
];

export function NavbarCinematic() {
    const { theme, resolvedTheme } = useTheme();
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLogoHovered, setIsLogoHovered] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isDark = resolvedTheme === "dark" || theme === "dark";

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/95 backdrop-blur-md border-b border-border/40"
                    : "bg-transparent"
            )}
        >
            <SectionContainer className="h-16 flex items-center justify-between px-4 md:px-6 ">
                {/* Logo - Clean Transition */}
                {/* Logo - Digital Sunrise (Aesthetic Uday) */}
                <motion.div
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-muted/50 transition-colors duration-300 group/logo cursor-pointer select-none"
                    onHoverStart={() => setIsLogoHovered(true)}
                    onHoverEnd={() => setIsLogoHovered(false)}
                    layout
                >
                    <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-foreground"
                            aria-label="UdayAhire Brand Logo"
                        >
                            <defs>
                                <linearGradient id="sun-gradient" x1="24" y1="16" x2="24" y2="30" gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor="currentColor" />
                                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
                                </linearGradient>
                            </defs>

                            {/* The 'U' - Horizon/Valley */}
                            <motion.path
                                d="M14 14 V24 C14 29.5228 18.4772 34 24 34 C29.5228 34 34 29.5228 34 24 V14"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={false}
                                animate={{
                                    d: isLogoHovered
                                        ? "M12 14 V24 C12 30.6274 17.3726 36 24 36 C30.6274 36 36 30.6274 36 24 V14"
                                        : "M14 14 V24 C14 29.5228 18.4772 34 24 34 C29.5228 34 34 29.5228 34 24 V14",
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />

                            {/* The Sun / Orb - Rising */}
                            <motion.circle
                                cx="24"
                                cy="24"
                                r="5"
                                fill="url(#sun-gradient)"
                                initial={false}
                                animate={{
                                    cy: isLogoHovered ? 18 : 24,
                                    r: isLogoHovered ? 7 : 5,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            />

                            {/* Ray/Glow (Visible on Hover) */}
                            <motion.circle
                                cx="24"
                                cy="20"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="1"
                                strokeDasharray="2 2"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{
                                    opacity: isLogoHovered ? 0.3 : 0,
                                    scale: isLogoHovered ? 1.2 : 0.5
                                }}
                                transition={{ duration: 0.4 }}
                            />
                        </svg>
                    </div>

                    {/* Text Reveal Animation */}
                    <AnimatePresence>
                        {isLogoHovered && (
                            <motion.div
                                initial={{ width: 0, opacity: 0, x: -5 }}
                                animate={{ width: "auto", opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: -5 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                    mass: 1
                                }}
                                className="overflow-hidden whitespace-nowrap"
                            >
                                <span className="font-semibold text-base md:text-lg tracking-tight text-foreground pr-1">
                                    Uday
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Right Side: Navigation + Actions */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Navigation - Desktop */}
                    <div className="hidden md:flex items-center gap-1">
                        <nav className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Search CLI Trigger */}
                    <div className="hidden md:flex items-center">
                        <button
                            className="group flex items-center justify-between gap-3 h-9 px-3 rounded-full border border-border/40 bg-muted/10 hover:bg-muted/20 hover:border-foreground/20 transition-all duration-300 cursor-pointer min-w-[140px]"
                            aria-label="Search"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <span className="flex items-center gap-2">
                                <span className="text-muted-foreground/70 group-hover:text-foreground transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </span>
                                <span className="text-xs font-medium text-muted-foreground/70 group-hover:text-foreground transition-colors">
                                    Search...
                                </span>
                            </span>

                            <span className="flex items-center gap-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                                <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-muted/50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                                    <span className="text-xs">⌘</span>K
                                </kbd>
                            </span>
                        </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <ThemeTrigger />

                        <Button variant="outline" className="hidden md:flex h-9 px-4 rounded-md text-sm font-medium shrink-0">
                            Hire Me
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full h-full bg-background/95 backdrop-blur-xl border-b border-border/10 p-0">
                                <VisuallyHidden.Root>
                                    <SheetTitle>Mobile Navigation Menu</SheetTitle>
                                </VisuallyHidden.Root>

                                <div className="flex flex-col h-full pt-16 px-6">
                                    <div className="flex flex-col gap-6">
                                        {navItems.map((item, index) => (
                                            <motion.a
                                                key={item.name}
                                                href={item.href}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                                onClick={() => setIsMobileOpen(false)}
                                                className="text-2xl font-medium tracking-tight hover:text-primary transition-colors"
                                            >
                                                {item.name}
                                            </motion.a>
                                        ))}
                                    </div>

                                    <div className="mt-auto pb-10 flex flex-col gap-4">
                                        <Button variant="outline" className="w-full">
                                            Hire Me
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </SectionContainer>

            {/* Search Command Palette */}
            <SearchCommand open={isSearchOpen} setOpen={setIsSearchOpen} />
        </div>
    );
}
