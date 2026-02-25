"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Code2, Database, Layout, Smartphone, PenTool, GitBranch, Globe } from "lucide-react";

const skills = [
    { name: "React", icon: Code2 },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Layout },
    { name: "Node.js", icon: Database },
    { name: "PostgreSQL", icon: Database },
    { name: "UI/UX Design", icon: PenTool },
    { name: "Mobile First", icon: Smartphone },
    { name: "Git & CI/CD", icon: GitBranch },
];

export function AboutSection() {
    return (
        <SectionContainer id="about" className="py-24 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Text Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">About</p>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
                            Crafting nice experiences since 2021
                        </h2>

                        <div className="space-y-5 text-base text-muted-foreground leading-relaxed">
                            <p>
                                I am a passionate software engineer with a strong focus on building scalable web applications and intuitive user interfaces. My journey began with a curiosity for how things work on the web, which quickly turned into a career dedicated to solving complex problems through code.
                            </p>
                            <p>
                                With over 3 years of experience, I have had the privilege of working with startups and established companies, helping them transform their ideas into robust digital solutions. I thrive in collaborative environments and am always eager to learn new technologies.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge through technical writing.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <div>
                    <div className="grid grid-cols-3 gap-3">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.2 }}
                                className="p-4 rounded-md border border-border bg-transparent flex flex-col items-center justify-center gap-2.5 text-center cursor-default group hover:bg-muted/30 transition-colors"
                            >
                                <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                                    <skill.icon className="w-4 h-4" />
                                </div>
                                <span className="font-medium text-xs text-foreground/80">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-6"
                    >
                        <p className="text-xs font-mono text-muted-foreground">
                            Currently exploring <span className="text-foreground">Rust & WebAssembly</span>
                        </p>
                    </motion.div>
                </div>

            </div>
        </SectionContainer>
    );
}
