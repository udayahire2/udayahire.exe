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
        ref: "feat/new-dashboard",
        desc: "Implemented new dashboard analytics components",
        repo: "uday/portfolio-v2",
        time: "2 hours ago",
    },
    {
        id: 2,
        type: "pr",
        icon: GitPullRequest,
        ref: "#42",
        desc: "Fix: Resolved hydration mismatch in header",
        repo: "uday/next-starter",
        time: "5 hours ago",
    },
    {
        id: 3,
        type: "star",
        icon: Star,
        ref: "starred",
        desc: "Starred shadcn/ui repository",
        repo: "shadcn/ui",
        time: "1 day ago",
    },
    {
        id: 4,
        type: "merge",
        icon: GitMerge,
        ref: "main",
        desc: "Merged PR #21: Authentication flow update",
        repo: "uday/saas-platform",
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
        <SectionContainer id="activity" className="py-24">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Activity</p>
                        <h2 className="text-3xl font-bold tracking-tight mb-1">Coding Activity</h2>
                        <p className="text-muted-foreground text-sm">My contributions over the last year.</p>
                    </div>
                    <div className="flex gap-6">
                        <div className="text-right">
                            <div className="text-2xl font-bold font-mono text-foreground">
                                {totalContributions.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Total</div>
                        </div>
                        <div className="w-px bg-border h-10" />
                        <div className="text-right">
                            <div className="text-2xl font-bold font-mono text-foreground">14</div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">Streak</div>
                        </div>
                    </div>
                </div>

                {/* Contribution Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-6 rounded-md border border-border bg-card overflow-hidden"
                >
                    <ContributionGraph
                        data={contributionData}
                        maxLevel={MAX_LEVEL}
                        blockSize={12}
                        blockMargin={4}
                        blockRadius={2}
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
                        <ContributionGraphFooter className="mt-3 text-xs text-muted-foreground">
                            <ContributionGraphTotalCount />
                            <ContributionGraphLegend>
                                {({ level }) => (
                                    <svg height={12} width={12}>
                                        <title>{`Level ${level}`}</title>
                                        <rect
                                            className={cn(
                                                "stroke-[0.5px] stroke-border/50",
                                                'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                                                'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                                                'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                                                'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                                                'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                                            )}
                                            data-level={level}
                                            height={12}
                                            rx={2}
                                            ry={2}
                                            width={12}
                                        />
                                    </svg>
                                )}
                            </ContributionGraphLegend>
                        </ContributionGraphFooter>
                    </ContributionGraph>
                </motion.div>

                {/* Recent Activity + Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-5">
                        <h3 className="text-base font-semibold flex items-center gap-2">
                            <Activity className="w-4 h-4 text-muted-foreground" />
                            Recent Activity
                        </h3>
                        <div className="relative border-l border-border/50 ml-2 space-y-7 pl-7 py-1">
                            {recentActivity.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[33px] p-1 rounded-sm border border-border bg-background z-10 text-muted-foreground">
                                        <item.icon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="font-medium text-foreground group-hover:text-foreground/80 transition-colors cursor-pointer">{item.repo}</span>
                                            <span className="text-muted-foreground/50">·</span>
                                            <span className="text-muted-foreground text-xs">{item.time}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                                        <div className="text-xs font-mono text-muted-foreground bg-muted/40 px-2 py-0.5 rounded w-fit mt-0.5">
                                            {item.ref}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit">
                        <Card className="bg-card border-border/60">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Pull Requests</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold font-mono text-foreground">142</div>
                                <div className="text-xs text-muted-foreground mt-1">+12% from last month</div>
                            </CardContent>
                        </Card>
                        <Card className="bg-card border-border/60">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground">Code Reviews</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold font-mono text-foreground">85</div>
                                <div className="text-xs text-muted-foreground mt-1">+5% from last month</div>
                            </CardContent>
                        </Card>
                        <Card className="col-span-1 sm:col-span-2 bg-card border-border/60">
                            <CardContent className="pt-5 flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-bold text-foreground">Top 1%</div>
                                    <div className="text-sm text-muted-foreground">Global contributor rank</div>
                                </div>
                                <Star className="w-6 h-6 text-muted-foreground" />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
}
