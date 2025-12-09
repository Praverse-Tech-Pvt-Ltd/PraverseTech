
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { Card, CardContent } from '../ui/card';
import { Eye, Brain, Cpu, Orbit } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const tabs = [
    { id: 'vision', label: 'Vision AI', icon: Eye, imageId: 'lab-vision-ai', title: 'Medical Imaging Analysis', description: 'Our vision models analyze retinal scans with superhuman accuracy, detecting subtle anomalies to assist in early diagnosis of diseases like diabetic retinopathy.' },
    { id: 'language', label: 'Language AI', icon: Brain, imageId: 'project-fda', title: 'FDA 483 Response Generation', description: 'We leverage large language models to draft comprehensive and compliant responses to regulatory observations, saving pharma companies weeks of work.' },
    { id: 'edge', label: 'Edge AI', icon: Cpu, imageId: 'lab-edge-ai', title: 'Real-Time Edge Inference', description: 'We optimize and deploy lightweight deep learning models on embedded systems for real-time applications, from industrial monitoring to wearable health tech.' },
    { id: 'simulation', label: 'Simulation', icon: Orbit, imageId: 'lab-simulation', title: 'Humanoid Digital Twins', description: 'In our virtual labs, we train humanoid robots in physics-based environments, accelerating development and testing of complex navigation and interaction algorithms.' },
]

export function AILabsShowcase() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const activeTabData = tabs.find(tab => tab.id === activeTab);
    const activeImage = PlaceHolderImages.find(p => p.id === activeTabData?.imageId);

    return (
        <AnimatedSection className="py-20 md:py-28 bg-muted/50" amount={0.3}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">From Lab to Life</h2>
                    <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                        A glimpse into our research, experimental prototypes, and the future we are building.
                    </p>
                </AnimatedItem>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <AnimatedItem direction='left' className="col-span-1 flex flex-col gap-4">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    'px-6 py-4 text-left rounded-lg transition-all duration-300 w-full border',
                                    activeTab === tab.id 
                                        ? 'bg-background shadow-lg border-primary/50' 
                                        : 'bg-muted border-transparent hover:bg-background/70'
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        'p-3 rounded-md transition-colors duration-300',
                                        activeTab === tab.id ? 'bg-primary/10 text-primary' : 'bg-background/50 text-foreground/70'
                                    )}>
                                        <tab.icon className="w-6 h-6"/>
                                    </div>
                                    <span className="font-semibold text-lg text-foreground">{tab.label}</span>
                                </div>
                            </button>
                        ))}
                    </AnimatedItem>

                    <div className="col-span-1 lg:col-span-2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            >
                                <Card className="overflow-hidden border-border/40">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-video w-full overflow-hidden bg-background">
                                            {activeImage && (
                                                <Image
                                                    src={activeImage.imageUrl}
                                                    alt={activeTabData?.title || 'AI Lab Image'}
                                                    fill
                                                    sizes="(min-width: 1024px) 60vw, 100vw"
                                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                                    data-ai-hint={activeImage.imageHint}
                                                />
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        </div>
                                        <div className="p-6 sm:p-8 space-y-4">
                                            <h3 className="text-2xl font-bold text-foreground font-headline">{activeTabData?.title}</h3>
                                            <p className="text-base text-muted-foreground md:text-lg leading-relaxed">{activeTabData?.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
