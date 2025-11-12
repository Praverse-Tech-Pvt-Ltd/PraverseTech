
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
            <motion.div key={domain.title} variants={itemVariants} className="[perspective:1000px]">
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:[transform:rotateY(5deg)_rotateX(5deg)]">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <domain.icon className={cn("w-8 h-8 transition-colors", domain.color)} />
                      </div>
                      <CardTitle className="text-xl">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="px-6 pb-6 text-sm flex-grow">
                    {domain.description}
                  </CardDescription>
                   {domain.href && <div className="px-6 pb-4 mt-auto">
                      <Link href={domain.href} className="text-sm font-semibold text-primary flex items-center gap-2 group">
                        Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                   </div>}
                </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
