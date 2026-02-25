"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Senior Frontend Engineer",
        company: "TechNova Inc.",
        duration: "2024 – Present",
        description: "Leading the frontend team in rebuilding the core SaaS platform. Improved performance by 40% and established a new design system.",
        skills: ["Next.js", "React", "TypeScript", "Micro-frontends"],
        logo: "TN"
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Creative Solutions Ltd.",
        duration: "2022 – 2024",
        description: "Developed and maintained multiple client projects. Implemented secure payment gateways and real-time chat features.",
        skills: ["Node.js", "Express", "PostgreSQL", "Socket.io"],
        logo: "CS"
    },
    {
        id: 3,
        role: "Junior Web Developer",
        company: "StartUp Hub",
        duration: "2021 – 2022",
        description: "Collaborated with designers to implement responsive landing pages. Optimized images and code for faster load times.",
        skills: ["HTML/CSS", "JavaScript", "Vue.js", "Firebase"],
        logo: "SH"
    }
];

export function ExperienceTimeline() {
    return (
        <SectionContainer id="experience" className="py-24 px-4 md:px-6">
            <div className="flex flex-col gap-12">
                <div className="space-y-3">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Experience</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Journey</h2>
                    <p className="text-muted-foreground text-sm max-w-2xl">
                        My career path and the companies I've had the privilege to work with.
                    </p>
                </div>

                {/* Left-anchored vertical timeline */}
                <div className="relative max-w-2xl">
                    {/* Vertical line */}
                    <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border/60" />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex gap-8 pl-8"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border border-border bg-background flex items-center justify-center z-10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-foreground/60" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 border border-border/60 rounded-md p-5 bg-card hover:border-border transition-colors">
                                    <div className="flex items-start gap-3 mb-3">
                                        <div className="w-8 h-8 rounded border border-border bg-muted flex items-center justify-center text-xs font-mono font-medium text-muted-foreground shrink-0">
                                            {exp.logo}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground text-sm">{exp.company}</h3>
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                                <span>{exp.role}</span>
                                                <span className="text-muted-foreground/40">·</span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {exp.duration}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.skills.map(skill => (
                                            <Badge key={skill} variant="secondary" className="text-xs font-mono bg-muted/50 text-muted-foreground border-0">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
