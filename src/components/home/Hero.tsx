
'use client'
import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const COLORS = ["#06B6D4", "#6D28D9", "#D946EF"];

export function Hero() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(35% 35% at 50% 50%, hsl(var(--background)) 10%, transparent 100%), radial-gradient(100% 100% at 50% 50%, transparent 40%, ${color} 100%)`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);
  
  return (
    <section className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden">
       <motion.div
        style={{ backgroundImage }}
        className="absolute inset-0 z-0 opacity-70"
      />
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground"
        >
          Engineering Human-Centered Intelligence.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80"
        >
          Praverse Tech pioneers intelligent systems that learn, perceive, and collaborate — from pharma AI to humanoid robotics and next-gen bio-intelligence. Bringing Innovations to Market.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" variant="secondary">
            <Link href="#domains">Explore AI Domains <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
            <Link href="/healthmate">Meet HealthMate (Coming Soon)</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
