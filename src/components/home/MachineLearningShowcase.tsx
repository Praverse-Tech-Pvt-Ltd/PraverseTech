
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Database, Layers, BrainCircuit, Bot, Network } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const pipelineSteps = [
    { name: 'Data', icon: <Database className="w-8 h-8"/> },
    { name: 'Feature Eng.', icon: <Layers className="w-8 h-8"/> },
    { name: 'Training', icon: <BrainCircuit className="w-8 h-8"/> },
    { name: 'Evaluation', icon: <Bot className="w-8 h-8"/> },
    { name: 'Deployment', icon: <Network className="w-8 h-8"/> }
];

export function MachineLearningShowcase() {
  return (
    <AnimatedSection className="py-20 md:py-28 bg-background" staggerChildren={0.2}>
      <div className="container">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <AnimatedItem direction="left" className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
              Machine Learning & Applied AI
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              From clinical decision support to intelligent automation, we design and deploy robust, explainable, and production-ready machine learning systems.
            </p>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <span><strong className='text-foreground'>End-to-End Lifecycle:</strong> From data to deployment, we handle the entire ML pipeline.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <span><strong className='text-foreground'>Advanced CV & NLP:</strong> Expertise in medical imaging, document analysis, and conversational AI.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <span><strong className='text-foreground'>MLOps & Automation:</strong> CI/CD for ML, ensuring your models are always production-ready.</span>
              </li>
            </ul>
             <Button asChild size="lg">
                <Link href="/machine-learning">Explore ML Work <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </AnimatedItem>
          <AnimatedItem direction="right" className="[perspective:1500px]">
             <Card className="border-border/40 bg-card/80 [transform:rotateY(-10deg)_rotateX(5deg)] hover:[transform:rotateY(0)_rotateX(0)] transition-transform duration-500 ease-out">
                <CardContent className="p-8">
                    <h3 className="text-center font-semibold text-2xl mb-8 text-foreground">Production ML Pipeline</h3>
                    <div className="relative flex items-center justify-between gap-2">
                        {pipelineSteps.map((step, index) => (
                           <AnimatedItem
                                key={step.name}
                                className="flex flex-col items-center gap-3 z-10 group"
                                delay={index * 0.1}
                            >
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-lg">
                                    {step.icon}
                                </div>
                                <span className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{step.name}</span>
                           </AnimatedItem>
                        ))}
                        <div className="absolute left-0 top-10 -z-10 h-1 w-full bg-border" />
                        <div className="absolute left-0 top-10 -z-10 h-1 w-full bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300 origin-left" />
                    </div>
                    <div className="mt-8 flex flex-wrap justify-center gap-3">
                        <span className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">Computer Vision</span>
                        <span className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">NLP</span>
                        <span className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">Tabular Data</span>
                        <span className="rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">Edge AI</span>
                    </div>
                </CardContent>
             </Card>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
