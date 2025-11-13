
'use client';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database, Layers, BrainCircuit, Bot, Network } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const pipelineSteps = [
    { name: 'Data', icon: <Database className="w-6 h-6"/> },
    { name: 'Feature Eng.', icon: <Layers className="w-6 h-6"/> },
    { name: 'Training', icon: <BrainCircuit className="w-6 h-6"/> },
    { name: 'Evaluation', icon: <Bot className="w-6 h-6"/> },
    { name: 'Deployment', icon: <Network className="w-6 h-6"/> }
];

export function MachineLearningShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Machine Learning & Applied AI
            </h2>
            <p className="text-muted-foreground">
              From clinical decision support to intelligent automation, Praverse Tech designs and deploys machine-learning systems that actually ship — robust, explainable and production-ready.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>End-to-end ML lifecycle: data → model → validation → deployment.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>Computer vision for healthcare & imaging (fundus, ultrasound, diagnostics).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>NLP for assistants, triage bots, and document understanding.</span>
              </li>
               <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>MLOps: monitoring, drift detection, and CI/CD for ML in production.</span>
              </li>
            </ul>
             <Button asChild>
                <Link href="/machine-learning">Explore ML Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
             <Card className="glassmorphism p-6">
                <CardContent className="p-0">
                    <h3 className="text-center font-semibold mb-4">Production ML Pipeline</h3>
                    <div className="relative flex items-center justify-between">
                        {pipelineSteps.map((step, index) => (
                           <motion.div
                                key={step.name}
                                className="flex flex-col items-center gap-2 z-10"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                    {step.icon}
                                </div>
                                <span className="text-xs font-medium text-muted-foreground">{step.name}</span>
                           </motion.div>
                        ))}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0.5 bg-border -z-10" />
                    </div>
                    <div className="flex justify-around mt-4">
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">Vision</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">NLP</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">Tabular</span>
                        <span className="text-xs bg-muted px-2 py-1 rounded-full">Edge</span>
                    </div>
                </CardContent>
             </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
