
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { AnimatedLinkButton } from '@/components/ui/AnimatedLinkButton';

export function Hero() {
  return (
    <section className="relative w-full py-32 md:py-48 lg:py-56 overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-[url(/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-50"></div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex justify-center mb-8"
        >
          <Logo className="w-48 h-auto" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground font-headline"
        >
          Intelligence Amplified.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80"
        >
          We build intelligent systems that learn, perceive, and collaborate to solve the world's most challenging problems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <AnimatedLinkButton href="#domains">Explore Our Work <ArrowRight className="ml-2 h-5 w-5" /></AnimatedLinkButton>
        </motion.div>
      </div>
    </section>
  );
}
