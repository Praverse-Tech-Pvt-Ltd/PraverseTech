
'use client'
import { Post } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "../ui/badge";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";

interface InsightsProps {
    founderPost?: Post;
    otherPosts: Post[];
}

export function Insights({ founderPost, otherPosts }: InsightsProps) {
    if (!founderPost && otherPosts.length === 0) {
        return null;
    }

    return (
        <AnimatedSection className="py-20 md:py-28 bg-muted" staggerChildren={0.15}>
            <div className="container">
                <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Insights & Research</h2>
                    <p className="mt-4 text-base text-muted-foreground md:text-lg">
                        From our blog, the latest in AI, robotics, and industry transformation.
                    </p>
                </AnimatedItem>

                <div className="grid lg:grid-cols-2 gap-8">
                    {founderPost && (
                        <AnimatedItem direction="up" className="lg:col-span-2">
                         <Link href={`/blog/${founderPost.slug}`} className="block group lg:col-span-2">
                            <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-background/90 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl md:flex-row">
                                {(() => {
                                    const imageMeta = PlaceHolderImages.find(p => p.id === founderPost.metadata.image);
                                    if (!imageMeta) return null;
                                    return (
                                    <div className="relative h-64 w-full md:h-auto md:w-1/2">
                                        <Image
                                            src={imageMeta.imageUrl}
                                            alt={founderPost.metadata.title}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20" />
                                    </div>
                                    );
                                })()}
                                <div className="flex flex-col p-6 md:w-1/2">
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
                        </AnimatedItem>
                    )}
                    
                    <div className={`grid gap-8 lg:col-span-2 ${otherPosts.length === 1 ? 'lg:grid-cols-1' : 'lg:grid-cols-2'}`}>
                        {otherPosts.map(post => {
                            const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
                            return (
                                <AnimatedItem key={post.slug}>
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                    <Card className="flex h-full flex-col overflow-hidden border-border/60 bg-background transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                                        {image && (
                                            <div className="relative h-48">
                                            <Image
                                                src={image.imageUrl}
                                                alt={post.metadata.title}
                                                fill
                                                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
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
                                </AnimatedItem>
                            );
                        })}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
