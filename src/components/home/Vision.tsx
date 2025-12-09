'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import { HeartPulse, Crosshair, TrendingUp } from 'lucide-react';

export function Vision() {
    return (
        <AnimatedSection className="py-20 md:py-28 bg-background" id="vision">
            <div className="container">
                <div className="grid gap-16 items-center md:grid-cols-2">
                    <div className="relative aspect-square w-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
                        <div className="absolute inset-1/4 bg-[url(/humanoid-silhouette.svg)] bg-contain bg-no-repeat bg-center opacity-20"></div>
                        <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-contain bg-no-repeat bg-center opacity-10 [mask-image:radial-gradient(ellipse_at_center,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_70%)]"></div>
                    </div>
                    <AnimatedItem direction="right" className="space-y-8">
                        <h2 className="text-4xl font-bold tracking-tighter md:text-5xl font-headline">
                            Our Manifesto
                        </h2>
                        <div className="space-y-6">
                            <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">
                                We believe AI should not replace people — it should amplify human potential.
                            </p>
                            <div className="grid gap-6 pt-4 text-lg">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <Crosshair className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Precision</h3>
                                        <p className="text-muted-foreground">Enhancing accuracy and effectiveness in every task.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <HeartPulse className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Compassion</h3>
                                        <p className="text-muted-foreground">Fostering empathy and understanding in AI interactions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                                        <TrendingUp className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Efficiency</h3>
                                        <p className="text-muted-foreground">Streamlining processes to achieve more with less.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedItem>
                </div>
            </div>
        </AnimatedSection>
    );
}
