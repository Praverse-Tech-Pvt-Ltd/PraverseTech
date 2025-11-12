
'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DOMAINS } from '@/lib/data';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Domains() {
  return (
    <section id="domains" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Our Core Innovation Domains
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are a multi-disciplinary team of experts pushing the boundaries of what's possible in intelligent systems.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {DOMAINS.map((domain) => (
            <motion.div key={domain.title} variants={itemVariants}>
              <Link href={domain.href} className="group block h-full">
                <Card className="h-full flex flex-col transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <domain.icon className={cn("w-10 h-10 transition-colors", domain.color, "group-hover:text-primary")} />
                      <CardTitle className="text-xl">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="px-6 pb-6 text-sm flex-grow">
                    {domain.description}
                  </CardDescription>
                   <div className="px-6 pb-4">
                      <div className="text-sm font-semibold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore Domain <ArrowRight className="w-4 h-4" />
                      </div>
                   </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
