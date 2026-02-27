"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/layout/section-container";
import { GitCommit, GitPullRequest, GitMerge, Star, Activity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ContributionGraph,
    ContributionGraphBlock,
    ContributionGraphCalendar,
    ContributionGraphFooter,
    ContributionGraphLegend,
    ContributionGraphTotalCount,
} from "@/components/kibo-ui/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import { cn } from "@/lib/utils";

const MAX_COUNT = 20;
const MAX_LEVEL = 4;

const generateContributionData = () => {
    const now = new Date();
    const days = eachDayOfInterval({
        start: startOfYear(now),
        end: endOfYear(now),
    });

    return days.map((date) => {
        const c = Math.round(
            Math.random() * MAX_COUNT - Math.random() * (0.8 * MAX_COUNT)
        );
        const count = Math.max(0, c);
        const level = Math.ceil((count / MAX_COUNT) * MAX_LEVEL);

        return {
            date: formatISO(date, { representation: "date" }),
            count,
            level,
        };
    });
};

const recentActivity = [
    {
        id: 1,
        type: "commit",
        icon: GitCommit,
        ref: "feat/ui-components",
        desc: "Implemented new interactive components",
        repo: "udayahire2/udx-ui-kit",
        time: "2 hours ago",
    },
    {
        id: 2,
        type: "pr",
        icon: GitPullRequest,
        ref: "#12",
        desc: "Fix: Resolved hydration mismatch in layout",
        repo: "udayahire2/nmu",
        time: "5 hours ago",
    },
    {
        id: 3,
        type: "star",
        icon: Star,
        ref: "starred",
        desc: "Starred framer/motion repository",
        repo: "framer/motion",
        time: "1 day ago",
    },
    {
        id: 4,
        type: "merge",
        icon: GitMerge,
        ref: "main",
        desc: "Merged PR #8: Database configuration update",
        repo: "udayahire2/gram-panchayat",
        time: "2 days ago",
    }
];

export function ActivityStats() {
    const [contributionData, setContributionData] = React.useState<ReturnType<typeof generateContributionData>>([]);

    React.useEffect(() => {
        setContributionData(generateContributionData());
    }, []);

    const totalContributions = contributionData.reduce((sum, d) => sum + d.count, 0);

    return (
        <SectionContainer id="activity" className="py-24 max-w-5xl mx-auto px-4 md:px-6">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-px bg-primary/50"></span>
                            <span className="font-mono text-xs md:text-sm text-primary uppercase tracking-widest font-medium">
                                Activity
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2">Coding Activity</h2>
                        <p className="text-muted-foreground text-sm">My contributions over the last year.</p>
                    </div>
                    <div className="flex gap-8">
                        <div className="text-right">
                            <div className="text-2xl font-bold text-foreground">
                                {totalContributions.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase font-mono tracking-widest mt-1">Total</div>
                        </div>
                        <div className="w-px bg-border h-12" />
                        <div className="text-right">
                            <div className="text-2xl font-bold text-foreground">14</div>
                            <div className="text-xs text-muted-foreground uppercase font-mono tracking-widest mt-1">Streak</div>
                        </div>
                    </div>
                </div>

                {/* Contribution Graph - Premium Card variant */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 md:p-8 rounded-2xl border border-border/80 bg-card shadow-sm"
                >
                    <ContributionGraph
                        data={contributionData}
                        maxLevel={MAX_LEVEL}
                        blockSize={12}
                        blockMargin={4}
                        blockRadius={3}
                        fontSize={12}
                        className="w-full"
                    >
                        <ContributionGraphCalendar className="w-full">
                            {({ activity, dayIndex, weekIndex }) => (
                                <ContributionGraphBlock
                                    activity={activity}
                                    className={cn(
                                        "transition-colors",
                                        'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                                        'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                                        'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                                        'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                                        'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                                    )}
                                    dayIndex={dayIndex}
                                    weekIndex={weekIndex}
                                />
                            )}
                        </ContributionGraphCalendar>
                        <ContributionGraphFooter className="mt-4 text-xs text-muted-foreground">
                            <ContributionGraphTotalCount />
                            <ContributionGraphLegend>
                                {({ level }) => (
                                    <svg height={12} width={12}>
                                        <title>{`Level ${level}`}</title>
                                        <rect
                                            className={cn(
                                                "stroke-1 stroke-border/30",
                                                'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                                                'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                                                'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                                                'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                                                'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                                            )}
                                            data-level={level}
                                            height={12}
                                            rx={3}
                                            ry={3}
                                            width={12}
                                        />
                                    </svg>
                                )}
                            </ContributionGraphLegend>
                        </ContributionGraphFooter>
                    </ContributionGraph>
                </motion.div>

                {/* Recent Activity + Stats */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4">
                    {/* Activity Feed */}
                    <div className="md:col-span-7 lg:col-span-8 flex flex-col">
                        <div className="flex items-center gap-3 mb-8 border-b border-border/50 pb-4">
                            <Activity className="w-4 h-4 text-primary" />
                            <h3 className="text-sm font-semibold text-foreground tracking-wide">Recent Activity</h3>
                        </div>
                        <div className="relative border-l border-border/50 ml-2 space-y-8 pl-8 py-2">
                            {recentActivity.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[33px] p-1.5 rounded-full border border-border bg-background z-10 text-muted-foreground shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <item.icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">{item.repo}</span>
                                            <span className="text-muted-foreground/30">•</span>
                                            <span className="text-muted-foreground text-xs">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        <div className="text-xs font-mono text-muted-foreground bg-muted hover:bg-muted/80 px-2 py-1 rounded w-fit mt-1 transition-colors">
                                            {item.ref}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Cards - Premium Product style */}
                    <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-4 md:mb-8 border-b border-border/50 pb-4">
                            <Star className="w-4 h-4 text-primary" />
                            <h3 className="text-sm font-semibold text-foreground tracking-wide">Overview</h3>
                        </div>

                        <div className="p-6 rounded-2xl border border-border/80 bg-card flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Pull Requests</span>
                            <div className="text-3xl font-bold tracking-tight text-foreground mt-2">142</div>
                            <span className="text-xs text-muted-foreground mt-1">+12% from last month</span>
                        </div>

                        <div className="p-6 rounded-2xl border border-border/80 bg-card flex flex-col gap-1 shadow-sm hover:shadow-md transition-shadow">
                            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Code Reviews</span>
                            <div className="text-3xl font-bold tracking-tight text-foreground mt-2">85</div>
                            <span className="text-xs text-muted-foreground mt-1">+5% from last month</span>
                        </div>

                        <div className="p-6 rounded-2xl border border-border/80 bg-primary/[0.03] hover:bg-primary/[0.05] border-primary/20 flex items-center justify-between shadow-sm mt-auto transition-colors">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-foreground tracking-tight">Top 1%</span>
                                <span className="text-xs text-muted-foreground font-mono mt-1">Global Contributor</span>
                            </div>
                            <Star className="w-5 h-5 text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
