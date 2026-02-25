import React from 'react'
import { HeroProfile } from '@/components/sections/hero-profile'
import { AboutSection } from '@/components/sections/about-section'
import { ActivityStats } from '@/components/sections/activity-stats'
import { ProjectsShowcase } from '@/components/sections/projects-showcase'
import { BlogSection } from '@/components/sections/blog-section'
import { ExperienceTimeline } from '@/components/sections/experience-timeline'
import { CertificationsAwards } from '@/components/sections/certifications-awards'
import { SectionDivider } from '@/components/layout/section-divider'

const page = () => {
  return (
    <main className="flex-1 pb-24">
      <HeroProfile />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ActivityStats />
      <SectionDivider />
      <ProjectsShowcase />
      <SectionDivider />
      <BlogSection />
      <SectionDivider />
      <ExperienceTimeline />
      <SectionDivider />
      <CertificationsAwards />
    </main>
  )
}

export default page