
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, Bot } from 'lucide-react';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'about-mission');

const values = [
    { icon: <Target className="h-8 w-8 text-primary"/>, title: 'Customer Obsession', description: 'We succeed when our customers succeed. We deeply embed ourselves in their domain to solve their most critical problems.'},
    { icon: <Award className="h-8 w-8 text-primary"/>, title: 'Expertise & Trust', description: 'We are experts in our field and build trust through transparency, security, and delivering on our promises.'},
    { icon: <Users className="h-8 w-8 text-primary"/>, title: 'India-First, Global Outlook', description: 'Proudly building from India for the world. We combine local talent with a global vision for impact.'},
    { icon: <Bot className="h-8 w-8 text-primary"/>, title: 'Visionary Pragmatism', description: 'We dream big about the future of AI but stay grounded in delivering practical, tangible value to our customers today.'}
]

export default function AboutPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-muted pt-24 pb-12 md:pt-32 md:pb-20" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem direction="up" className="inline-flex justify-center">
            <Badge>About Praverse Tech</Badge>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.1}>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">Building the Future of Industry AI</h1>
          </AnimatedItem>
          <AnimatedItem direction="up" delay={0.2}>
          <p className="mt-4 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            We are a team of technologists, domain experts, and visionaries dedicated to solving complex industry challenges with safe, explainable AI.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.2}>
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimatedItem direction="left" className="space-y-6">
              <h2 className="text-3xl font-bold md:text-4xl">Our Mission</h2>
              <p className="text-base text-muted-foreground md:text-lg">
                To empower regulated industries like pharmaceuticals and healthcare with intelligent automation, turning their domain expertise into a competitive advantage. We believe in building AI that is not just powerful, but also trustworthy, explainable, and seamlessly integrated into the workflows of the experts who use it.
              </p>
              <p className="text-muted-foreground">
                From our base in India, we're building world-class solutions that address global challenges, ensuring our partners stay ahead of the curve in a rapidly evolving technological landscape.
              </p>
            </AnimatedItem>
            <AnimatedItem direction="right" className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/60 shadow-lg">
              {heroImage && 
                <Image src={heroImage.imageUrl} alt={heroImage.description} fill sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 90vw" className="object-cover transition-transform duration-700 hover:scale-105" data-ai-hint={heroImage.imageHint}/>
              }
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.12}>
        <div className="container">
            <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
                <p className="mt-4 text-muted-foreground text-lg">The principles that guide our work and our partnerships.</p>
            </AnimatedItem>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {values.map(value => (
                    <AnimatedItem key={value.title} className="space-y-4 rounded-2xl border border-border/50 bg-background/70 p-6 text-center shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">{value.icon}</div>
                        <h3 className="text-xl font-bold">{value.title}</h3>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                    </AnimatedItem>
                ))}
            </div>
        </div>
      </AnimatedSection>

    </div>
  );
}
