
'use client';
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
      className="py-20 md:py-28 bg-muted/50"
      staggerChildren={0.1}
      amount={0.25}
    >
      <div className="container">
        <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
            Core Innovation Domains
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            We are a multi-disciplinary team of experts pushing the boundaries of what's possible in intelligent systems.
          </p>
        </AnimatedItem>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((domain) => (
            <AnimatedItem key={domain.title} className="h-full">
              <Card className={cn(
                'group flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out relative ',
                'border-border/40 hover:shadow-2xl hover:border-primary/50 bg-card',
                domain.href ? 'hover:-translate-y-2' : ''
              )}>
                <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 opacity-50 blur-3xl"></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-4 border border-primary/20">
                      <domain.icon className={cn('h-8 w-8 transition-colors duration-300 text-primary', domain.color)} />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold leading-tight text-foreground">{domain.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="flex-grow px-6 pb-6 text-base text-muted-foreground">
                  {domain.description}
                </CardDescription>
                {domain.href && (
                  <div className="px-6 pb-6 mt-auto">
                    <Link href={domain.href} className="font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                )}
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
