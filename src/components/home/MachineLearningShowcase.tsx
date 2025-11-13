
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
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
    <AnimatedSection className="py-20 md:py-28 bg-background" staggerChildren={0.2}>
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <AnimatedItem direction="left" className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Machine Learning & Applied AI
            </h2>
            <p className="text-base text-muted-foreground md:text-lg">
              From clinical decision support to intelligent automation, Praverse Tech designs and deploys machine-learning systems that actually ship — robust, explainable and production-ready.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>End-to-end ML lifecycle: data → model → validation → deployment.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>Computer vision for healthcare & imaging (fundus, ultrasound, diagnostics).</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>NLP for assistants, triage bots, and document understanding.</span>
              </li>
               <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span>MLOps: monitoring, drift detection, and CI/CD for ML in production.</span>
              </li>
            </ul>
             <Button asChild>
                <Link href="/machine-learning">Explore ML Work <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </AnimatedItem>
          <AnimatedItem direction="right">
             <Card className="glassmorphism border-border/50 p-6">
                <CardContent className="p-0">
                    <h3 className="text-center font-semibold mb-4">Production ML Pipeline</h3>
                    <div className="relative flex flex-wrap items-center justify-between gap-6">
                        {pipelineSteps.map((step, index) => (
                           <AnimatedItem
                                key={step.name}
                                className="flex flex-col items-center gap-2 z-10"
                                delay={index * 0.08}
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-inner">
                                    {step.icon}
                                </div>
                                <span className="text-xs font-medium text-muted-foreground md:text-sm">{step.name}</span>
                           </AnimatedItem>
                        ))}
                        <div className="absolute left-0 top-1/2 -z-10 h-0.5 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
                    </div>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Vision</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">NLP</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Tabular</span>
                        <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Edge</span>
                    </div>
                </CardContent>
             </Card>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
