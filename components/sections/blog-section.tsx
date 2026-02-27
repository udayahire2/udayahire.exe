"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        title: "Mastering Server Components in Next.js 14",
        excerpt: "A deep dive into the React Server Components architecture and how to leverage it for better performance.",
        date: "Feb 12, 2026",
        readTime: "8 min read",
        category: "Next.js",
        slug: "server-components-guide"
    },
    {
        id: 2,
        title: "Building Accessible Design Systems",
        excerpt: "Key principles for creating inclusive UI component libraries that work for everyone.",
        date: "Jan 28, 2026",
        readTime: "12 min read",
        category: "Design System",
        slug: "accessible-design-systems"
    },
    {
        id: 3,
        title: "Rust for JavaScript Developers",
        excerpt: "Comparing memory management models and getting started with Rust from a JS perspective.",
        date: "Jan 15, 2026",
        readTime: "15 min read",
        category: "Rust",
        slug: "rust-for-js-devs"
    }
];

export function BlogSection() {
    return (
        <SectionContainer id="blog" className="py-24 px-4 md:px-6">
            <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="w-8 h-px bg-primary/50"></span>
                            <span className="font-mono text-xs md:text-sm text-primary uppercase tracking-widest font-medium">
                                03. / Writing
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Recent Writings</h2>
                        <p className="text-muted-foreground text-sm max-w-2xl">
                            Thoughts on software engineering, design patterns, and emerging technologies.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group px-4 py-2 border border-border/80 rounded-full hover:bg-muted/50"
                    >
                        View all posts
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Link href={`/blog/${post.slug}`} className="group h-full block">
                                <Card className="h-full flex flex-col border-border/80 rounded-2xl overflow-hidden hover:border-border hover:shadow-md transition-all duration-300 bg-card group-hover:-translate-y-1">
                                    {/* Placeholder image area */}
                                    <div className="relative h-44 bg-muted/40 overflow-hidden border-b border-border/50 group-hover:bg-muted/60 transition-colors duration-300">
                                        <div className="absolute top-4 left-4">
                                            <Badge variant="secondary" className="text-xs bg-background/90 backdrop-blur-sm border-0 font-medium">{post.category}</Badge>
                                        </div>
                                    </div>

                                    <CardHeader className="flex-1 space-y-3 p-6 pb-4">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg font-semibold tracking-tight line-clamp-2 text-foreground group-hover:text-primary transition-colors">
                                            {post.title}
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                    </CardHeader>

                                    <CardFooter className="p-6 pt-0 mt-auto">
                                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-1.5 group-hover:text-primary transition-colors">
                                            Read Article <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link href="/blog" className="md:hidden flex items-center justify-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors w-full px-4 py-3 border border-border/80 rounded-full hover:bg-muted/50">
                    View all posts <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </SectionContainer>
    );
}
