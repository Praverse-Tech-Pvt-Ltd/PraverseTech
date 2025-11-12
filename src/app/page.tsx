
import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Vision } from '@/components/home/Vision';
import { Domains } from '@/components/home/Domains';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { TechStack } from '@/components/home/TechStack';
import { WhyPraverse } from '@/components/home/WhyPraverse';
import { Insights } from '@/components/home/Insights';
import { Cta } from '@/components/home/Cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Vision />
        <Domains />
        <FeaturedProjects />
        <TechStack />
        <WhyPraverse />
        <Insights />
        <Cta />
      </main>
    </div>
  )
}
