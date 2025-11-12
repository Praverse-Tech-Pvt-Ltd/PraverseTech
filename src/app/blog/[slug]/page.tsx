
import { notFound } from 'next/navigation';
import { getBlogPosts, getPostBySlug } from '@/lib/blog';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MdxComponents } from '@/components/blog/MdxComponents';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock } from 'lucide-react';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.metadata.title} | PraverseAI Blog`,
    description: post.metadata.excerpt,
    openGraph: {
        title: post.metadata.title,
        description: post.metadata.excerpt,
        type: 'article',
        publishedTime: post.metadata.date,
        authors: [post.metadata.author],
        images: [
            {
                url: PlaceHolderImages.find(p => p.id === post.metadata.image)?.imageUrl || '',
            }
        ]
    }
  };
}


export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{ title: string; date: string; author: string }>({
    source: post.content,
    components: MdxComponents,
    options: { parseFrontmatter: true },
  });

  const image = PlaceHolderImages.find(p => p.id === post.metadata.image);
  const authorAvatar = PlaceHolderImages.find(p => p.id === 'avatar-1');

  return (
    <article>
      <header className="relative py-24 md:py-40">
        {image && (
          <Image
            src={image.imageUrl}
            alt={post.metadata.title}
            fill
            className="object-cover opacity-20"
            data-ai-hint={image.imageHint}
            priority
          />
        )}
        <div className="container relative z-10 text-center">
          <div className="flex justify-center gap-2 mb-4">
            {post.metadata.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-sm">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">{post.metadata.title}</h1>
          <div className="mt-8 flex justify-center items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                {authorAvatar && <AvatarImage src={authorAvatar.imageUrl} alt={post.metadata.author} />}
                <AvatarFallback>{post.metadata.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <span>{post.metadata.author}</span>
            </div>
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4"/>{new Date(post.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4"/>{post.readingTime}</span>
          </div>
        </div>
      </header>
      <div className="container pb-20 prose dark:prose-invert max-w-3xl mx-auto">
        {content}
      </div>
    </article>
  );
}
