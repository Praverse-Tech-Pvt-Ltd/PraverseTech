
'use client';
import { motion } from 'framer-motion';
import { useMemoFirebase, useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from '../ui/skeleton';

interface TimelineItem {
  date: string;
  description: string;
}

export function Timeline() {
  const firestore = useFirestore();
  const timelineQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'hm_timeline');
  }, [firestore]);

  const { data: timeline, isLoading } = useCollection<TimelineItem>(timelineQuery);

  const sortedTimeline = timeline ? [...timeline].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()) : [];

  if (isLoading) {
    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-3xl mx-auto">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Roadmap</h2>
                    <p className="mt-4 text-muted-foreground text-lg">The journey to a new kind of care.</p>
                </div>
                <div className="space-y-8">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                </div>
            </div>
        </section>
    )
  }
  
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Roadmap</h2>
          <p className="mt-4 text-muted-foreground text-lg">The journey to a new kind of care.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true"></div>
          {sortedTimeline.map((item, index) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className={`relative mb-12 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <p className="font-bold text-primary text-lg">{item.date}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" aria-hidden="true"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
