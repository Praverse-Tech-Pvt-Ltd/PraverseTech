
'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { TIMELINE } from '@/lib/data';

export function InnovationTimeline() {

  return (
    <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.08}>
      <div className="container mx-auto max-w-5xl">
        <AnimatedItem className="mb-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our Innovation Timeline</h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">A brief history of our key milestones.</p>
        </AnimatedItem>
        <div className="relative pl-6 md:pl-0">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border/70 md:left-1/2" />

          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <AnimatedItem
                key={item.year}
                direction="up"
                delay={index * 0.05}
                className="relative mb-12 md:mb-16"
              >
                <div className="relative flex flex-col gap-4 md:flex-row md:items-start">
                  <div className="absolute left-3 top-2 -translate-x-1/2 md:left-1/2 md:top-4">
                    <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_0_8px_rgba(6,182,212,0.15)] md:shadow-[0_0_0_12px_rgba(6,182,212,0.1)]" />
                  </div>
                  <div
                    className={`ml-8 rounded-2xl border border-border/60 bg-background/80 p-6 shadow-lg backdrop-blur md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'
                    }`}
                  >
                    <p className="text-lg font-bold text-primary md:text-2xl">{item.year}</p>
                    <h3 className="mt-2 text-lg font-semibold md:text-xl">{item.event}</h3>
                    <p className="mt-2 text-sm text-muted-foreground md:text-base">{item.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
