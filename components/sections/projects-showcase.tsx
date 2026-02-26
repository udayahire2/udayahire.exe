"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "Gram Panchayat Platform",
        description: "A structured digital governance platform designed to streamline rural administration operations.",
        features: [
            "Centralized resident database management",
            "Digitized public record access & transparency",
            "Localized civic services deployments"
        ],
        tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
        category: "Fullstack",
        status: "Featured",
        github: "https://github.com/udayahire2/gram-panchayat",
        demo: "#"
    },
    {
        id: 2,
        title: "UDX UI Kit",
        description: "A modern, accessible component library providing robust UI elements and standardized design tokens.",
        features: [
            "Accessible components built on Radix UI primitives",
            "Fluid, high-performance animations with Framer Motion",
            "Customizable, token-driven design system via Tailwind"
        ],
        tags: ["React", "TailwindCSS", "Framer Motion", "Radix UI"],
        category: "Frontend",
        status: "In Progress",
        github: "https://github.com/udayahire2/udx-ui-kit",
        demo: "#"
    },
    {
        id: 3,
        title: "NMU Platform Scaffold",
        description: "A high-performance web application scaffolding emphasizing modern tooling and strict type safety.",
        features: [
            "Fast hot-module replacement and builds with Vite",
            "Strict TypeScript generic types enforcement",
            "Production-ready, customized ESLint linting configurations"
        ],
        tags: ["React", "TypeScript", "Vite", "ESLint"],
        category: "Frontend",
        status: "In Progress",
        github: "https://github.com/udayahire2/nmu",
        demo: "#"
    }
];

const categories = ["All", "Frontend", "Fullstack"];

export function ProjectsShowcase() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <SectionContainer id="projects" className="py-24 px-4 md:px-6">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-3">
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Projects</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl">
                            A selection of my favorite works, ranging from complex web applications to open-source libraries.
                        </p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-1 p-1 bg-muted/30 rounded-md border border-border/50">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors relative ${activeCategory === category
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-background shadow-sm rounded border border-border/50"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.97 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Card className="h-full flex flex-col overflow-hidden group bg-card border-border/60 hover:border-border hover:bg-card/80 transition-colors duration-200">
                                    <CardHeader className="pb-3">
                                        <div className="flex justify-between items-start gap-2 mb-2">
                                            <CardTitle className="text-base font-semibold line-clamp-1 text-foreground">{project.title}</CardTitle>
                                            <div className="flex gap-2">
                                                {project.status && (
                                                    <Badge variant={project.status === "Featured" ? "default" : "outline"} className="text-xs shrink-0">
                                                        {project.status}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                        <CardDescription className="text-sm leading-relaxed mb-3">
                                            {project.description}
                                        </CardDescription>
                                        <ul className="text-xs text-muted-foreground list-disc pl-4 space-y-1.5 marker:text-muted-foreground/50">
                                            {project.features?.map((feature, i) => (
                                                <li key={i} className="leading-snug">{feature}</li>
                                            ))}
                                        </ul>
                                    </CardHeader>

                                    <CardContent className="mt-auto pb-3">
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded font-mono">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>

                                    <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between items-center border-t border-border/40 px-4 py-3">
                                        <Badge variant="secondary" className="bg-transparent border-0 text-muted-foreground hover:bg-transparent pl-0">{project.category}</Badge>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 hover:text-foreground transition-colors text-xs font-medium bg-muted/50 hover:bg-muted py-1.5 px-3 rounded-md border border-border/50"
                                                aria-label="View source on GitHub"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                                Source
                                            </a>
                                            {project.demo !== "#" && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 hover:text-foreground transition-colors bg-muted/50 hover:bg-muted py-1.5 px-3 rounded-md border border-border/50"
                                                    aria-label="View demo"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </CardFooter>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
}
