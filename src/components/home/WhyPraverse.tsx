
'use client'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WHY_PRAVERSE } from '@/lib/data';
import { BrainCircuit, Handshake, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const icons = [BrainCircuit, Handshake, ShieldCheck];

export function WhyPraverse() {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Praverse?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We combine deep technical expertise with a commitment to ethical, human-centric AI.
            </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_PRAVERSE.map((item, index) => {
            const Icon = icons[index];
            return (
                <Card key={item.title} className="text-center">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardDescription className="px-6 pb-6">
                        {item.description}
                    </CardDescription>
                </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
