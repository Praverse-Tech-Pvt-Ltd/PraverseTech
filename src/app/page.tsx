
import React from 'react';
import { Hero } from '@/components/home/Hero';
import { Vision } from '@/components/home/Vision';
import { Domains } from '@/components/home/Domains';
import { Cta } from '@/components/home/Cta';
import { getBlogPosts } from '@/lib/blog';
import { PravChatbot } from '@/components/home/PravChatbot';
import { InnovationTimeline } from '@/components/home/InnovationTimeline';
import { ResearchPublications } from '@/components/home/ResearchPublications';
import { Collaborations } from '@/components/home/Collaborations';
import { AILabsShowcase } from '@/components/home/AILabsShowcase';

export default function Home() {
  const posts = getBlogPosts().slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <Hero />
        <Vision />
        <Domains />
        <AILabsShowcase />
        <InnovationTimeline />
        <ResearchPublications />
        <Collaborations />
        <Cta />
        <PravChatbot />
      </main>
    </div>
  );
}
