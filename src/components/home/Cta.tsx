
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {

  return (
    <AnimatedSection className="py-20 md:py-28" amount={0.4}>
      <div className="container">
        <AnimatedItem className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-8 text-center md:p-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Build the next wave of intelligent systems.
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-white/85">
              Whether you're looking to solve complex industry challenges or be the first to experience the future of assistive robotics, we want to hear from you.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                 <Link href="/contact">Intern / Partner</Link>
              </Button>
            </div>
          </div>
        </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
