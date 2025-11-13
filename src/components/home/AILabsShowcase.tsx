
'use client';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Brain, Cpu, Orbit } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const tabs = [
    { id: 'vision', label: 'Vision AI', icon: Eye, imageId: 'lab-vision-ai', title: 'Medical Imaging Analysis', description: 'Detecting anomalies in retinal scans.' },
    { id: 'language', label: 'Language AI', icon: Brain, imageId: 'project-fda', title: 'FDA 483 Response Generation', description: 'AI-drafted response to regulatory observations.' },
    { id: 'edge', label: 'Edge AI', icon: Cpu, imageId: 'lab-edge-ai', title: 'Edge Device Inference', description: 'Running lightweight models on embedded systems.' },
    { id: 'simulation', label: 'Simulation', icon: Orbit, imageId: 'lab-simulation', title: 'Humanoid Pathing Simulation', description: 'Training robots in a physics-based virtual environment.' },
]

export function AILabsShowcase() {
    
    return (
        <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.18} amount={0.3}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">AI Labs & Experiments</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">
                        A peek into our research and development powerhouses.
                    </p>
                </AnimatedItem>

                <Tabs defaultValue="vision" className="w-full">
                    <TabsList className="grid h-auto w-full grid-cols-2 md:grid-cols-4">
                        {tabs.map(tab => (
                            <TabsTrigger key={tab.id} value={tab.id} className="py-3 gap-2">
                                <tab.icon className="w-5 h-5"/>
                                {tab.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map(tab => {
                        const image = PlaceHolderImages.find(p => p.id === tab.imageId);
                        return (
                            <TabsContent key={tab.id} value={tab.id} className="mt-6">
                                <AnimatedItem direction="up">
                                <Card className="overflow-hidden border-border/60">
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-lg font-semibold">{tab.title}</h3>
                                        <p className="mt-1 mb-4 text-sm text-muted-foreground md:text-base">{tab.description}</p>
                                        <div className="relative mx-auto aspect-video w-full max-w-2xl overflow-hidden rounded-xl border border-border/70 bg-background/60">
                                            {image && (
                                              <Image
                                                src={image.imageUrl}
                                                alt={tab.title}
                                                fill
                                                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="object-cover"
                                                data-ai-hint={image.imageHint}
                                              />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/20 mix-blend-overlay" />
                                        </div>
                                    </CardContent>
                                </Card>
                                </AnimatedItem>
                            </TabsContent>
                        )
                    })}
                </Tabs>
            </div>
        </AnimatedSection>
    );
}
