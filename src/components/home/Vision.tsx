'use client'
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Vision() {
    const visionImage = PlaceHolderImages.find(p => p.id === 'home-vision-bg');
    return (
        <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.25}>
            <div className="container">
                <div className="grid gap-12 items-center md:grid-cols-2">
                    <AnimatedItem direction="left" className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 bg-background/40 shadow-xl backdrop-blur">
                        {visionImage && 
                            <Image 
                                src={visionImage.imageUrl} 
                                alt={visionImage.description} 
                                fill
                                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                data-ai-hint={visionImage.imageHint}
                            />
                        }
                    </AnimatedItem>
                    <AnimatedItem direction="right" className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Our Manifesto
                        </h2>
                        <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                            We believe AI should not replace people — it should amplify <span className="text-primary font-semibold">precision</span>, <span className="text-primary font-semibold">compassion</span>, & <span className="text-primary font-semibold">efficiency</span>. Our mission is to fuse deep learning, robotics, & ethical intelligence for tomorrow’s industries.
                        </p>
                    </AnimatedItem>
                </div>
            </div>
        </AnimatedSection>
    );
}
