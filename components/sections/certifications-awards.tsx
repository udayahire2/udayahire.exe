"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
    {
        id: 1,
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "Dec 2025",
        logo: "AWS",
        credentialUrl: "#"
    },
    {
        id: 2,
        title: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "Aug 2024",
        logo: "GCP",
        credentialUrl: "#"
    },
    {
        id: 3,
        title: "Meta Frontend Developer Professional Certificate",
        issuer: "Coursera",
        date: "Mar 2023",
        logo: "META",
        credentialUrl: "#"
    },
    {
        id: 4,
        title: "Certified Kubernetes Application Developer",
        issuer: "The Linux Foundation",
        date: "Nov 2024",
        logo: "CKAD",
        credentialUrl: "#"
    }
];

export function CertificationsAwards() {
    return (
        <SectionContainer id="certifications" className="py-24 px-4 md:px-6 relative">
            <div className="flex flex-col gap-12 relative z-10 w-full max-w-5xl mx-auto">
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-px bg-primary/50"></span>
                        <span className="font-mono text-xs md:text-sm text-primary uppercase tracking-widest font-medium">
                            04. / Accolades
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-[1.1]">
                        Certifications & Awards
                    </h2>
                    <p className="text-muted-foreground text-sm max-w-2xl">
                        Validating expertise through industry-recognized certifications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative h-full flex flex-col"
                        >
                            {/* Premium Product Card Structure */}
                            <div className="relative h-full flex flex-col p-6 md:p-8 rounded-2xl bg-card border border-border/80 transition-all duration-300 hover:shadow-md hover:border-border group-hover:-translate-y-1">
                                <div className="mb-6 flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-xl bg-muted/40 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center font-mono font-bold text-sm tracking-tighter">
                                        {cert.logo}
                                    </div>
                                    <Badge variant="secondary" className="text-[10px] font-mono uppercase tracking-widest bg-background/90 backdrop-blur-sm border-0 font-medium">
                                        Verified
                                    </Badge>
                                </div>

                                <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                    {cert.title}
                                </h3>

                                <p className="text-sm font-medium text-muted-foreground mb-1">
                                    {cert.issuer}
                                </p>
                                <p className="text-xs text-muted-foreground/60 font-mono mb-6">Issued {cert.date}</p>

                                <div className="mt-auto pt-5 border-t border-border/50 flex items-center justify-between">
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-mono tracking-tight text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                                    >
                                        Verify <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
