
'use client'
import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/data';

export function InnovationTimeline() {

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Innovation Timeline</h2>
          <p className="mt-4 text-muted-foreground text-lg">A brief history of our key milestones.</p>
        </div>
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/70" />

          {TIMELINE.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              {/* Dot on the timeline */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 rounded-full bg-primary ring-8 ring-muted" />
              </div>

              {/* Content Card */}
              <div className={`w-[calc(50%_-_2.5rem)] ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="font-bold text-primary text-2xl">{item.year}</p>
                  <h3 className="font-semibold text-lg mt-1">{item.event}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
