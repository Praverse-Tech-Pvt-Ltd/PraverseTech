
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Brain, Cpu, Orbit } from 'lucide-react';
import Image from 'next/image';

const tabs = [
    { id: 'vision', label: 'Vision AI', icon: Eye },
    { id: 'language', label: 'Language AI', icon: Brain },
    { id: 'edge', label: 'Edge AI', icon: Cpu },
    { id: 'simulation', label: 'Simulation', icon: Orbit },
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
                    <TabsContent value="vision" className="mt-6">
                        <Card>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-semibold">Medical Imaging Analysis</h3>
                                <p className="text-muted-foreground text-sm mt-1 mb-4">Detecting anomalies in retinal scans.</p>
                                <div className="relative aspect-video max-w-xl mx-auto rounded-lg overflow-hidden border">
                                    <Image src="https://images.unsplash.com/photo-1639772823849-6efbd173043c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwaGFybWFjZXV0aWNhbCUyMGxhYm9yYXRvcnl8ZW58MHx8fHwxNzYyOTUzNDE5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="retina scan" layout="fill" objectFit="cover" data-ai-hint="retina scan" />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="language" className="mt-6">
                         <Card>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-semibold">FDA 483 Response Generation</h3>
                                <p className="text-muted-foreground text-sm mt-1 mb-4">AI-drafted response to regulatory observations.</p>
                                <div className="max-w-xl mx-auto p-4 border rounded-lg bg-background text-left text-xs">
                                    <p className="font-semibold">Observation 1: Lack of dynamic smoke studies.</p>
                                    <p className="mt-2"><span className="font-bold text-primary">AI Draft:</span> Acknowledged. We have initiated a protocol to conduct comprehensive smoke studies under dynamic conditions for all aseptic processing lines. The study will be completed by Q3 2025, and all operators will be retrained.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="edge" className="mt-6">
                         <Card>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-semibold">Edge Device Inference</h3>
                                <p className="text-muted-foreground text-sm mt-1 mb-4">Running lightweight models on embedded systems.</p>
                                 <div className="relative aspect-video max-w-xl mx-auto rounded-lg overflow-hidden border">
                                    <Image src="https://images.unsplash.com/photo-1596638243887-fe8c3efe5911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlbWJlZGRlZCUyMHN5c3RlbXxlbnwwfHx8fDE3NjMwNTA5NTN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Embedded System" layout="fill" objectFit="cover" data-ai-hint="embedded system" />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="simulation" className="mt-6">
                         <Card>
                            <CardContent className="p-6 text-center">
                                <h3 className="text-lg font-semibold">Humanoid Pathing Simulation</h3>
                                <p className="text-muted-foreground text-sm mt-1 mb-4">Training robots in a physics-based virtual environment.</p>
                                 <div className="relative aspect-video max-w-xl mx-auto rounded-lg overflow-hidden border">
                                    <Image src="https://images.unsplash.com/photo-1651530065437-9d961dc5e8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cm9ib3QlMjBzaW11bGF0aW9ufGVufDB8fHx8MTc2Mjk3MjAxOHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Robot simulation" layout="fill" objectFit="cover" data-ai-hint="robot simulation" />
                                    <div className="absolute inset-0 bg-black/10" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}
