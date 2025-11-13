
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DOMAINS } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Domains() {
  return (
    <AnimatedSection
      id="domains"
      className="py-20 md:py-28 bg-background"
      staggerChildren={0.12}
      amount={0.35}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Our Core Innovation Domains
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            We are a multi-disciplinary team of experts pushing the boundaries of what's possible in intelligent systems.
          </p>
        </AnimatedItem>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((domain) => (
            <AnimatedItem key={domain.title} className="[perspective:1200px]">
              <Card className="group flex h-full flex-col overflow-hidden border-border/60 bg-background/80 transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:[transform:rotateY(6deg)_rotateX(2deg)]">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <domain.icon className={cn("h-8 w-8 transition-colors duration-300 group-hover:text-primary", domain.color)} />
                      </div>
                      <CardTitle className="text-lg md:text-xl">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="flex-grow px-6 pb-6 text-sm text-muted-foreground md:text-base">
                    {domain.description}
                  </CardDescription>
                   {domain.href && <div className="px-6 pb-4 mt-auto">
                      <Link href={domain.href} className="text-sm font-semibold text-primary flex items-center gap-2 group">
                        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                   </div>}
                </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
