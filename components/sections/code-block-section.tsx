"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { Code2, Sparkles } from "lucide-react";
import {
    CodeBlock,
    CodeBlockHeader,
    CodeBlockTitle,
    CodeBlockFilename,
    CodeBlockActions,
    CodeBlockCopyButton,
} from "@/components/ai-elements/code-block";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sample code snippets per tab
   ───────────────────────────────────────────── */
const CODE_SNIPPETS = [
    {
        id: "react",
        label: "React",
        filename: "hero.tsx",
        language: "tsx" as const,
        code: `export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Building Digital Experiences
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Pixel-perfect interfaces with robust engineering.
        </p>
        <Button size="lg" className="mt-8">
          View Work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}`,
    },
    {
        id: "api",
        label: "API",
        filename: "route.ts",
        language: "typescript" as const,
        code: `import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  const project = await db.project.findUnique({
    where: { slug },
    include: { techStack: true, images: true },
  });

  if (!project) {
    return NextResponse.json(
      { error: "Project not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(project);
}`,
    },
    {
        id: "style",
        label: "Styles",
        filename: "globals.css",
        language: "css" as const,
        code: `@import "tailwindcss";

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --font-sans: var(--font-geist-sans);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}`,
    },
] as const;

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */
export function CodeBlockSection() {
    const [activeTab, setActiveTab] = useState<string>(CODE_SNIPPETS[0].id);

    const activeSnippet =
        CODE_SNIPPETS.find((s) => s.id === activeTab) ?? CODE_SNIPPETS[0];

    return (
        <SectionContainer id="code" className="py-24 px-4 md:px-6">
            <div className="flex flex-col gap-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="p-1.5 rounded-md bg-primary/10">
                                <Code2 className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm font-medium text-primary tracking-wide uppercase">
                                Code
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">
                            Clean &amp; Scalable Code
                        </h2>
                        <p className="text-muted-foreground max-w-lg">
                            Production-grade code with type safety, modern
                            patterns, and attention to detail.
                        </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Syntax highlighted with Shiki</span>
                    </div>
                </motion.div>

                {/* Tabs + Code Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                >
                    {/* Tab Bar */}
                    <div className="flex items-center gap-1 mb-0 border-b border-border/50 pb-0">
                        {CODE_SNIPPETS.map((snippet) => (
                            <button
                                key={snippet.id}
                                onClick={() => setActiveTab(snippet.id)}
                                className={cn(
                                    "relative px-4 py-2.5 text-sm font-medium transition-colors rounded-t-lg",
                                    "hover:text-foreground",
                                    activeTab === snippet.id
                                        ? "text-foreground bg-card/80"
                                        : "text-muted-foreground"
                                )}
                            >
                                {snippet.label}
                                {activeTab === snippet.id && (
                                    <motion.div
                                        layoutId="code-tab-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Code Block */}
                    <CodeBlock
                        code={activeSnippet.code}
                        language={activeSnippet.language}
                        showLineNumbers
                        className="rounded-t-none border-t-0 shadow-lg shadow-black/5 dark:shadow-black/20"
                    >
                        <CodeBlockHeader>
                            <CodeBlockTitle>
                                <CodeBlockFilename>
                                    {activeSnippet.filename}
                                </CodeBlockFilename>
                            </CodeBlockTitle>
                            <CodeBlockActions>
                                <CodeBlockCopyButton />
                            </CodeBlockActions>
                        </CodeBlockHeader>
                    </CodeBlock>
                </motion.div>
            </div>
        </SectionContainer>
    );
}
