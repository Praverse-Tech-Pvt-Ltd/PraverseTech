
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Lightbulb, Handshake, BrainCircuit, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const collaborationItems = [
    {
        icon: Lightbulb,
        title: 'Pitch Your Concept',
        description: 'Turn your idea into a structured proposal. We review every high-potential pitch personally.',
        buttonText: 'Submit Your Idea',
        href: '/innovate'
    },
    {
        icon: Handshake,
        title: 'Co-build & Innovate Together',
        description: 'Partner with Praverse Tech to co-develop AI/ML models, software tools, robotics solutions, or healthcare innovations.',
        buttonText: 'Collaborate',
        href: '/innovate'
    },
    {
        icon: BrainCircuit,
        title: 'Founder Guidance & Technical Direction',
        description: 'Get direction, prototype support, architectural guidance, and help in taking your idea to market.',
        buttonText: 'Get Mentored',
        href: '/innovate'
    }
];

export function Collaborations() {
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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Pitch Your Idea. Build With Us. Change the Future.</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                        We collaborate with innovators, students, researchers, and early-stage founders to turn breakthrough concepts into real-world products. If you have an idea in AI, healthcare, robotics, software, or emerging tech — let’s make it happen together.
                    </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {collaborationItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center h-full flex flex-col glassmorphism">
                                <CardHeader>
                                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                        <item.icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm">{item.description}</p>
                                </CardContent>
                                <div className="p-6 pt-0">
                                    <Button asChild variant="outline" className="w-full">
                                        <Link href={item.href}>{item.buttonText}</Link>
                                    </Button>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-16"
                 >
                    <div className="relative p-8 rounded-lg border border-primary/20 bg-primary/5 text-center overflow-hidden">
                        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-20 blur-lg animate-pulse" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold">Have a game-changing idea? Let’s bring it to life.</h3>
                            <Button asChild className="mt-6">
                                <Link href="/innovate">Start Your Pitch <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
