"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { SectionContainer } from "@/components/layout/section-container";
import { SearchCommand } from "../search-command";

// --- Theme Trigger Component ---
const ThemeTrigger = () => {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-md shrink-0 focus-visible:ring-1 focus-visible:ring-ring"
                aria-label="Theme toggle placeholder"
            >
                <div className="w-4 h-4" />
            </Button>
        );
    }

    const isDark = resolvedTheme === "dark" || theme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
        try {
            const audio = new Audio("/sounds/light-switch.wav");
            audio.volume = 0.5;
            audio.play().catch(e => console.warn("Audio error:", e));
        } catch (e) {
            // ignore
        }
    };

    return (
        <React.Fragment>
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="w-9 h-9 rounded-md shrink-0 text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:ring-1 focus-visible:ring-ring"
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
                <div className="relative w-4 h-4 flex items-center justify-center">
                    {/* Minimal Sun/Moon Morph */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors"
                        aria-hidden="true"
                    >
                        <mask id="moon-mask">
                            <rect x="0" y="0" width="24" height="24" fill="white" />
                            <motion.circle
                                cx="12"
                                cy="12"
                                r="5"
                                fill="black"
                                initial={false}
                                animate={{
                                    cx: isDark ? 16 : 30, // Moves into the sun to make it a crescent moon
                                    cy: isDark ? 8 : -6,
                                }}
                                transition={{ duration: 0.24, ease: "easeOut" }}
                            />
                        </mask>

                        <motion.circle
                            cx="12"
                            cy="12"
                            mask="url(#moon-mask)"
                            initial={false}
                            animate={{
                                r: isDark ? 8 : 5
                            }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                        />

                        <motion.g
                            initial={false}
                            animate={{
                                opacity: isDark ? 0 : 1,
                                scale: isDark ? 0.5 : 1,
                                rotate: isDark ? -45 : 0
                            }}
                            transition={{ duration: 0.24, ease: "easeOut" }}
                            style={{ originX: "12px", originY: "12px" }}
                        >
                            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                        </motion.g>
                    </svg>
                </div>
            </Button>
        </React.Fragment>
    );
};

const navItems = [
    { name: "Portfolio", href: "#work" },
    { name: "Components", href: "#components" },
    { name: "Blog", href: "#blog" },
];

export function NavbarCinematic() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeItem, setActiveItem] = useState("Portfolio");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-colors duration-200",
                scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <SectionContainer className="h-14 flex items-center justify-between px-4 md:px-6">
                {/* Logo - Static Branding */}
                <motion.a
                    href="#"
                    className="flex items-center gap-2.5 group rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    aria-label="Home"
                >
                    <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-foreground transition-colors"
                            aria-label="UdayAhire Brand Logo"
                        >
                            <path
                                d="M14 14 V24 C14 29.5228 18.4772 34 24 34 C29.5228 34 34 29.5228 34 24 V14"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <circle
                                cx="24"
                                cy="18"
                                r="6"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <span className="font-semibold text-sm tracking-tight text-foreground">
                        Uday
                    </span>
                </motion.a>

                {/* Right Side: Navigation + Actions */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Navigation - Desktop (Background Pill Active Indicator) */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive = activeItem === item.name;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveItem(item.name)}
                                    className={cn(
                                        "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute inset-0 bg-muted/60 rounded-md -z-10"
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.name}</span>
                                </a>
                            );
                        })}
                    </nav>

                    <div className="hidden md:block w-px h-4 bg-border/50 mx-1" />

                    {/* Search Command Palette Trigger */}
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        className="hidden md:flex items-center gap-2 h-9 px-3 rounded-md bg-muted/40 hover:bg-muted/80 text-muted-foreground transition-colors border border-border/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-[180px] lg:w-[220px]"
                        aria-label="Search"
                    >
                        <Search className="w-4 h-4 shrink-0 opacity-70" />
                        <span className="text-sm flex-1 text-left opacity-80">Search...</span>
                        <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border/50 bg-background/50 px-1.5 font-sans text-[10px] font-medium text-muted-foreground">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </button>

                    {/* Actions */}
                    <div className="flex items-center gap-1.5">
                        <ThemeTrigger />

                        <Button
                            className="hidden md:flex h-9 px-4 rounded-md text-sm font-medium shadow-sm active:scale-[0.98] transition-all duration-200"
                        >
                            Hire Me
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden w-9 h-9 rounded-md text-muted-foreground hover:text-foreground">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full bg-background/95 backdrop-blur-xl border-b border-border/20 p-6 flex flex-col gap-6" aria-describedby="mobile-nav-description">
                                <VisuallyHidden.Root>
                                    <SheetTitle>Mobile Navigation</SheetTitle>
                                    <SheetDescription id="mobile-nav-description">Mobile navigation menu</SheetDescription>
                                </VisuallyHidden.Root>

                                <nav className="flex flex-col gap-1 mt-4">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.2, delay: index * 0.05, ease: "easeOut" }}
                                            onClick={() => {
                                                setActiveItem(item.name);
                                                setIsMobileOpen(false);
                                            }}
                                            className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                                        >
                                            {item.name}
                                        </motion.a>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, delay: navItems.length * 0.05, ease: "easeOut" }}
                                    className="pt-4 border-t border-border/40 flex flex-col gap-3"
                                >
                                    <button
                                        onClick={() => {
                                            setIsMobileOpen(false);
                                            setIsSearchOpen(true);
                                        }}
                                        className="flex items-center gap-2 h-11 px-4 rounded-md bg-muted/40 text-muted-foreground transition-colors border border-border/40 w-full"
                                    >
                                        <Search className="w-4 h-4" />
                                        <span className="text-base flex-1 text-left">Search commands...</span>
                                    </button>
                                    <Button className="w-full h-11 text-base rounded-md">
                                        Hire Me
                                    </Button>
                                </motion.div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </SectionContainer>

            {/* Search Command Palette Component */}
            <SearchCommand open={isSearchOpen} setOpen={setIsSearchOpen} />
        </header>
    );
}
