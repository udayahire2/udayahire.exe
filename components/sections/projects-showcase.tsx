"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
        tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
        category: "Frontend",
        github: "https://github.com/uday/dashboard",
        demo: "https://dashboard-demo.com",
        stars: 124,
        forks: 35
    },
    {
        id: 2,
        title: "SaaS Authentication System",
        description: "Secure, multi-tenant authentication service with role-based access control.",
        tags: ["Node.js", "PostgreSQL", "Redis", "Docker"],
        category: "Backend",
        github: "https://github.com/uday/auth-service",
        demo: "#",
        stars: 89,
        forks: 12
    },
    {
        id: 3,
        title: "Portfolio Template",
        description: "A minimal, high-performance developer portfolio built with Next.js and Framer Motion.",
        tags: ["React", "Framer Motion", "Tailwind"],
        category: "Frontend",
        github: "https://github.com/uday/portfolio",
        demo: "https://uday.dev",
        stars: 256,
        forks: 48
    },
    {
        id: 4,
        title: "Task Management API",
        description: "RESTful API for task management with real-time updates via WebSockets.",
        tags: ["Express", "MongoDB", "Socket.io"],
        category: "Backend",
        github: "https://github.com/uday/task-api",
        demo: "#",
        stars: 45,
        forks: 8
    },
    {
        id: 5,
        title: "AI Image Generator",
        description: "Full-stack application using OpenAI DALL-E API to generate and share images.",
        tags: ["Next.js", "OpenAI", "Prisma", "Stripe"],
        category: "Fullstack",
        github: "https://github.com/uday/ai-gen",
        demo: "https://ai-gen.app",
        stars: 312,
        forks: 67
    },
    {
        id: 6,
        title: "Component Library",
        description: "A collection of reusable React components built with accessibility in mind.",
        tags: ["React", "Storybook", "Radix UI"],
        category: "Frontend",
        github: "https://github.com/uday/ui-kit",
        demo: "https://ui-kit.uday.dev",
        stars: 180,
        forks: 22
    }
];

const categories = ["All", "Frontend", "Backend", "Fullstack"];

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
                                        <div className="flex justify-between items-start gap-2 mb-1">
                                            <CardTitle className="text-base font-semibold line-clamp-1 text-foreground">{project.title}</CardTitle>
                                            <Badge variant="secondary" className="text-xs shrink-0">{project.category}</Badge>
                                        </div>
                                        <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                                            {project.description}
                                        </CardDescription>
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

                                    <CardFooter className="pt-0 text-xs text-muted-foreground flex justify-between border-t border-border/40 px-4 py-3">
                                        <div className="flex gap-4">
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3 h-3" /> {project.stars}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <GitFork className="w-3 h-3" /> {project.forks}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 hover:text-foreground transition-colors"
                                                aria-label="View source"
                                            >
                                                <Github className="w-3.5 h-3.5" />
                                            </a>
                                            {project.demo !== "#" && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                                                    aria-label="View demo"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
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
