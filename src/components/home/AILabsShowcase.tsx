
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
        <section className="py-20 md:py-28 bg-muted">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">AI Labs & Experiments</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        A peek into our research and development powerhouses.
                    </p>
                </motion.div>

                <Tabs defaultValue="vision" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
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
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-lg font-semibold">{tab.title}</h3>
                                        <p className="text-muted-foreground text-sm mt-1 mb-4">{tab.description}</p>
                                        <div className="relative aspect-video max-w-xl mx-auto rounded-lg overflow-hidden border">
                                            {image && <Image src={image.imageUrl} alt={tab.title} layout="fill" objectFit="cover" data-ai-hint={image.imageHint} />}
                                            <div className="absolute inset-0 bg-black/10" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        )
                    })}
                </Tabs>
            </div>
        </section>
    );
}
