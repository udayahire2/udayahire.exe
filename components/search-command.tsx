"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Search, Command, FileText, Briefcase, Code, Hash, Monitor, User, ArrowRight, X, type LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface SearchCommandProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

interface CommandItem {
    icon: LucideIcon;
    name: string;
    shortcut?: string;
    href: string;
    group?: string;
}

export function SearchCommand({ open, setOpen }: SearchCommandProps) {
    const router = useRouter();
    const [query, setQuery] = React.useState("");
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    // Toggle with Cmd+K / Ctrl+K
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open, setOpen]);

    // Command Groups
    const groups: { heading: string; items: CommandItem[] }[] = [
        {
            heading: "Navigation",
            items: [
                { icon: Briefcase, name: "Portfolio", shortcut: "P", href: "#work" },
                { icon: Code, name: "Components", shortcut: "C", href: "#components" },
                { icon: Hash, name: "Blog", shortcut: "B", href: "#blog" },
            ],
        },
        {
            heading: "General",
            items: [
                { icon: User, name: "About Me", href: "#about" },
                { icon: FileText, name: "Resume", href: "/resume.pdf" },
                { icon: Monitor, name: "Tech Stack", href: "#tech" },
            ],
        },
    ];

    // Flatten items for keyboard navigation and filtering
    const filteredItems = React.useMemo(() => {
        if (!query) return groups.flatMap(g => g.items.map(i => ({ ...i, group: g.heading })));

        return groups.flatMap(g =>
            g.items
                .filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
                .map(item => ({ ...item, group: g.heading }))
        );
    }, [query, groups]);

    // Handle Keyboard Navigation within the list
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!open) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex(i => (i + 1) % filteredItems.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex(i => (i - 1 + filteredItems.length) % filteredItems.length);
            } else if (e.key === "Enter") {
                e.preventDefault();
                const item = filteredItems[selectedIndex];
                if (item) {
                    setOpen(false);
                    router.push(item.href);
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, filteredItems, selectedIndex, router, setOpen]);

    // Reset selection when query changes
    React.useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    return (
        <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
            <AnimatePresence>
                {open && (
                    <DialogPrimitive.Portal forceMount>
                        {/* Backdrop */}
                        <DialogPrimitive.Overlay asChild>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                            />
                        </DialogPrimitive.Overlay>

                        {/* Dialog Content */}
                        <DialogPrimitive.Content asChild>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg -translate-x-[50%] -translate-y-[50%] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-2xl outline-none"
                            >
                                <DialogPrimitive.Title className="sr-only">Search</DialogPrimitive.Title>
                                <DialogPrimitive.Description className="sr-only">Search commands and navigation</DialogPrimitive.Description>

                                {/* Input Area */}
                                <div className="flex items-center border-b px-3">
                                    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                                    <input
                                        className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                                        placeholder="Type a command or search..."
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        autoFocus
                                    />
                                    <div className="flex items-center gap-1">
                                        <span className="hidden sm:inline-flex px-1.5 py-0.5 rounded border border-border/50 bg-muted/20 text-[10px] text-muted-foreground font-mono">ESC</span>
                                    </div>
                                </div>

                                {/* Results Area */}
                                <div className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2 px-2">
                                    {filteredItems.length === 0 ? (
                                        <div className="py-6 text-center text-sm text-muted-foreground">
                                            No results found.
                                        </div>
                                    ) : (
                                        <div className="flex flex-col gap-1">
                                            {filteredItems.map((item, index) => (
                                                <div
                                                    key={item.name + index}
                                                    onClick={() => {
                                                        setOpen(false);
                                                        router.push(item.href);
                                                    }}
                                                    onMouseEnter={() => setSelectedIndex(index)}
                                                    className={cn(
                                                        "relative flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none transition-colors",
                                                        index === selectedIndex ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent/50"
                                                    )}
                                                >
                                                    <item.icon className="mr-3 h-4 w-4" />
                                                    <span className="flex-1">{item.name}</span>
                                                    {item.shortcut && (
                                                        <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                                            {item.shortcut}
                                                        </kbd>
                                                    )}
                                                    {index === selectedIndex && (
                                                        <motion.div
                                                            layoutId="active-indicator"
                                                            className="absolute left-0 w-1 h-1/2 bg-primary rounded-full"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between border-t bg-muted/20 px-3 py-2 text-xs text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center gap-1">
                                            <ArrowRight className="h-3 w-3" /> Select
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1 font-mono">
                                        <div className="flex items-center gap-1 opacity-70">
                                            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                            Go to Page
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </DialogPrimitive.Content>
                    </DialogPrimitive.Portal>
                )}
            </AnimatePresence>
        </DialogPrimitive.Root>
    );
}
