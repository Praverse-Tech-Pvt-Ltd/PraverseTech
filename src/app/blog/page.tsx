
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogIdeasGenerator } from '@/components/blog/BlogIdeasGenerator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata = {
  title: 'Blog | Praverse Tech',
  description: 'Insights and articles on AI in Pharma, Healthcare, and Technology.',
};

export default function BlogPage() {
  const posts = getBlogPosts();
  const founderPost = posts.find(p => p.slug === 'future-of-ai-in-healthcare');
  const otherPosts = posts.filter(p => p.slug !== 'future-of-ai-in-healthcare');
  const founderAvatar = PlaceHolderImages.find(p => p.id === 'avatar-2');


  return (
    <div>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">From the Praverse Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights on AI in Pharma, HealthTech, and our vision for a smarter industrial future.
          </p>
        </div>
      </section>

      {founderPost && (
        <section className="py-20 md:pt-0 md:pb-28">
            <div className="container">
                <h2 className="text-2xl font-bold mb-8 text-center">Founder's Corner</h2>
                <Link href={`/blog/${founderPost.slug}`} className="block group">
                    <Card className="overflow-hidden transition-all group-hover:shadow-2xl md:flex">
                        <div className="md:w-1/2 relative h-64 md:h-auto">
                           <Image 
                                src={PlaceHolderImages.find(p => p.id === founderPost.metadata.image)?.imageUrl || ''}
                                alt={founderPost.metadata.title}
                                fill
                                className="object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col justify-center">
                            <Badge variant="secondary" className="w-fit mb-4">Founder Insight</Badge>
                            <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{founderPost.metadata.title}</h3>
                            <p className="mt-4 text-muted-foreground">{founderPost.metadata.excerpt}</p>
                            <div className="mt-6 flex items-center gap-4">
                                <Avatar>
                                    <AvatarImage src={founderAvatar?.imageUrl} />
                                    <AvatarFallback>PS</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{founderPost.metadata.author}</p>
                                    <p className="text-sm text-muted-foreground">Founder, Praverse Tech</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Link>
            </div>
        </section>
      )}

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {otherPosts.map(post => {
                const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
                return (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                    <Card className="flex flex-col md:flex-row overflow-hidden transition-all group-hover:shadow-lg">
                      {image && (
                        <div className="md:w-1/3 relative h-48 md:h-auto">
                          <Image
                            src={image.imageUrl}
                            alt={post.metadata.title}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                          />
                        </div>
                      )}
                      <div className="md:w-2/3">
                        <CardHeader>
                          <div className="flex gap-2 mb-2">
                            {post.metadata.tags && post.metadata.tags.map(tag => (
                              <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.metadata.title}</CardTitle>
                          <CardDescription>{post.metadata.excerpt}</CardDescription>
                        </CardHeader>
                        <CardFooter className="text-xs text-muted-foreground flex justify-between">
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5"/>{new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5"/>{post.readingTime}</span>
                          </div>
                          <span className="flex items-center gap-1 group-hover:text-primary transition-colors">Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
                        </CardFooter>
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
            <aside className="lg:col-span-1 space-y-8">
                <BlogIdeasGenerator />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
