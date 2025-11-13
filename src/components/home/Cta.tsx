
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Cta() {

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center"
        >
          <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Build the next wave of intelligent systems.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-primary-foreground/80">
              Whether you're looking to solve complex industry challenges or be the first to experience the future of assistive robotics, we want to hear from you.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                <Link href="/contact">Collaborate With Us</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                 <Link href="/contact">Intern / Partner</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
