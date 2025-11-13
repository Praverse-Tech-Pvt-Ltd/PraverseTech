
'use client'
import { Post } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";

interface InsightsProps {
    founderPost?: Post;
    otherPosts: Post[];
}

export function Insights({ founderPost, otherPosts }: InsightsProps) {
    if (!founderPost && otherPosts.length === 0) {
        return null;
    }

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
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Insights & Research</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                        From our blog, the latest in AI, robotics, and industry transformation.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {founderPost && (
                         <Link href={`/blog/${founderPost.slug}`} className="block group lg:col-span-2">
                            <Card className="flex flex-col md:flex-row h-full overflow-hidden transition-all group-hover:shadow-2xl">
                                {PlaceHolderImages.find(p => p.id === founderPost.metadata.image) && (
                                    <div className="md:w-1/2 relative h-64 md:h-auto">
                                        <Image
                                            src={PlaceHolderImages.find(p => p.id === founderPost.metadata.image)!.imageUrl}
                                            alt={founderPost.metadata.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent" />
                                    </div>
                                )}
                                <div className="md:w-1/2 p-6 flex flex-col">
                                    <Badge variant="secondary" className="w-fit mb-2">Founder Insight</Badge>
                                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{founderPost.metadata.title}</CardTitle>
                                    <CardDescription className="mt-2 flex-grow">{founderPost.metadata.excerpt}</CardDescription>
                                    <CardFooter className="p-0 pt-4 text-xs text-muted-foreground flex justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5"/>{new Date(founderPost.metadata.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5"/>{founderPost.readingTime}</span>
                                        </div>
                                        <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                                            Read Founder's Vision <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </CardFooter>
                                </div>
                            </Card>
                        </Link>
                    )}
                    
                    <div className={`lg:col-span-2 grid ${otherPosts.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
                        {otherPosts.map(post => {
                            const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
                            return (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                    <Card className="flex flex-col h-full overflow-hidden transition-all group-hover:shadow-lg">
                                        {image && (
                                            <div className="h-48 relative">
                                            <Image
                                                src={image.imageUrl}
                                                alt={post.metadata.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={image.imageHint}
                                            />
                                            </div>
                                        )}
                                        <CardHeader>
                                        <div className="flex gap-2 mb-2">
                                            {post.metadata.tags && post.metadata.tags.map(tag => (
                                            <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                        <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.metadata.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <CardDescription className="text-sm">{post.metadata.excerpt}</CardDescription>
                                        </CardContent>
                                        <CardFooter className="text-xs text-muted-foreground">
                                             <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                                                Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </CardFooter>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
