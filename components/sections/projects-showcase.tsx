"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Gram Panchayat Platform",
        description: "A structured digital governance platform designed to streamline rural administration operations. Features centralized resident database management, digitized public record access, and localized civic services deployments.",
        tags: ["PHP", "MySQL", "JavaScript", "HTML"],
        category: "Fullstack",
        status: "Featured",
        github: "https://github.com/udayahire2/gram-panchayat",
        demo: "#"
    },
    {
        id: 2,
        title: "UDX UI Kit",
        description: "A modern, accessible component library providing robust UI elements and standardized design tokens. Built on Radix UI primitives with fluid Framer Motion animations and token-driven design system via Tailwind.",
        tags: ["React", "TailwindCSS", "Framer Motion", "Radix UI"],
        category: "Frontend",
        status: "In Progress",
        github: "https://github.com/udayahire2/udx-ui-kit",
        demo: "#"
    },
    {
        id: 3,
        title: "NMU Platform Scaffold",
        description: "A high-performance web application scaffolding emphasizing modern tooling and strict type safety. Features fast hot-module replacement with Vite, strict TypeScript enforcement, and production-ready ESLint configurations.",
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
        <SectionContainer id="projects" className="py-24 px-4 md:px-6 relative">
            <div className="flex flex-col gap-12 relative z-10 w-full max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-primary/50"></span>
                            <p className="text-xs font-mono text-primary uppercase tracking-widest font-medium">02. / Work</p>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                            Selected Projects
                        </h2>
                    </motion.div>

                    {/* Premium Segmented Control Filter Tabs */}
                    <motion.div
                        className="flex p-1 bg-muted/50 rounded-lg border border-border/50 shadow-sm relative z-20 self-start md:self-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${activeCategory === category
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {activeCategory === category && (
                                    <motion.div
                                        layoutId="activeCategoryTab"
                                        className="absolute inset-0 bg-background shadow-sm rounded-md border border-border/50"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{category}</span>
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, filter: "blur(2px)", scale: 0.95 }}
                                transition={{
                                    opacity: { duration: 0.3 },
                                    layout: { type: "spring", stiffness: 350, damping: 35 },
                                    y: { duration: 0.4, delay: index * 0.05 + 0.1 }
                                }}
                                className="group relative h-full flex flex-col"
                            >
                                {/* Premium Product Card */}
                                <div className="relative h-full flex flex-col overflow-hidden rounded-2xl bg-card border border-border/80 transition-all duration-300 hover:shadow-md hover:border-border group-hover:-translate-y-1">

                                    <div className="p-6 md:p-8 flex flex-col grow relative z-10">
                                        <div className="flex justify-between items-start gap-4 mb-5">
                                            <div className="flex items-center gap-3">
                                                {/* Project Category Tag */}
                                                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-medium bg-muted px-2 py-1 rounded">
                                                    {project.category}
                                                </span>
                                            </div>
                                            {project.status === "Featured" && (
                                                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-mono uppercase font-semibold">
                                                    Featured
                                                </span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                            {project.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-4 grow">
                                            {project.description}
                                        </p>

                                        {/* Tags/Pills */}
                                        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-muted-foreground bg-muted/50 border border-border/40 px-2.5 py-1 rounded-md font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        <div className="flex items-center justify-between pt-5 border-t border-border/50 mt-auto">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                                Source
                                            </a>

                                            {project.demo !== "#" && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center justify-center p-2 rounded-full bg-background border border-border/80 text-foreground hover:bg-muted transition-colors duration-200 shadow-sm"
                                                    aria-label="View demo"
                                                >
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </SectionContainer>
    );
}
