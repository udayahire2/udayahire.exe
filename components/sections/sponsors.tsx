"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";

const sponsors = [
    { name: "Vercel", abbr: "VCL" },
    { name: "Supabase", abbr: "SB" },
    { name: "Tailwind UI", abbr: "TWD" },
    { name: "Prisma", abbr: "PRM" },
    { name: "Resend", abbr: "RSD" },
    { name: "Clerk", abbr: "CLK" },
];

export function Sponsors() {
    return (
        <SectionContainer id="sponsors" className="py-24 border-t border-border/40">
            <div className="flex flex-col items-center gap-8 text-center">
                <div className="space-y-3">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Sponsors</p>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Supported By</h2>
                    <p className="text-muted-foreground text-sm max-w-md">
                        Generous supporters who help make my open source work possible.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    {sponsors.map((sponsor, index) => (
                        <motion.div
                            key={sponsor.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.06 }}
                            className="flex items-center gap-2.5 px-4 py-2.5 rounded-md bg-muted/20 border border-border/50 hover:bg-muted/40 hover:border-border transition-colors cursor-default"
                        >
                            <span className="text-xs font-mono text-muted-foreground w-8 text-center">{sponsor.abbr}</span>
                            <span className="text-sm font-medium text-foreground">{sponsor.name}</span>
                        </motion.div>
                    ))}
                </div>

                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors font-mono">
                    become a sponsor →
                </button>
            </div>
        </SectionContainer>
    );
}
