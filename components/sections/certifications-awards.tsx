"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
        <SectionContainer id="certifications" className="py-24 px-4 md:px-6">
            <div className="flex flex-col gap-12">
                <div className="space-y-3">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Credentials</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications & Awards</h2>
                    <p className="text-muted-foreground text-sm max-w-2xl">
                        Validating expertise through industry-recognized certifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                        >
                            <Card className="h-full bg-card border-border/60 hover:border-border transition-colors">
                                <CardContent className="p-5 flex flex-col gap-4 h-full">
                                    <div className="flex justify-between items-start">
                                        <div className="w-10 h-10 rounded border border-border bg-muted flex items-center justify-center text-xs font-mono font-medium text-muted-foreground">
                                            {cert.logo}
                                        </div>
                                        <Badge variant="secondary" className="text-xs">
                                            Verified
                                        </Badge>
                                    </div>

                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-sm text-foreground leading-snug">{cert.title}</h3>
                                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                                        <p className="text-xs text-muted-foreground/60">Issued {cert.date}</p>
                                    </div>

                                    <div className="mt-auto pt-3 border-t border-border/40">
                                        <a
                                            href={cert.credentialUrl}
                                            className="text-xs text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors"
                                        >
                                            View Credential <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionContainer>
    );
}
