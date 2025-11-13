'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Vision() {
    const visionImage = PlaceHolderImages.find(p => p.id === 'home-vision-bg');
    return (
        <section className="py-20 md:py-28 bg-muted">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square rounded-lg overflow-hidden shadow-2xl"
                    >
                        {visionImage && 
                            <Image 
                                src={visionImage.imageUrl} 
                                alt={visionImage.description} 
                                fill
                                className="object-cover"
                                data-ai-hint={visionImage.imageHint}
                            />
                        }
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                            Our Manifesto
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                            We believe AI should not replace people — it should amplify <span className="text-primary font-semibold">precision</span>, <span className="text-primary font-semibold">compassion</span>, & <span className="text-primary font-semibold">efficiency</span>. Our mission is to fuse deep learning, robotics, & ethical intelligence for tomorrow’s industries.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
