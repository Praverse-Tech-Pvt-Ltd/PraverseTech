
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BrainCircuit, Code, Rocket } from 'lucide-react';
import { JOB_OPENINGS } from '@/lib/careers-data';

const heroImage = PlaceHolderImages.find(p => p.id === 'careers-hero');

const whyWorkWithUs = [
    {
        icon: <Rocket className="h-8 w-8 text-primary"/>,
        title: 'Work on What Matters',
        description: 'Solve real-world problems in healthcare, robotics, and industrial AI that have a meaningful impact on society.'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary"/>,
        title: 'Innovate at the Edge',
        description: 'Join a team that’s constantly pushing the boundaries of what’s possible, from federated learning to bio-inspired intelligence.'
    },
    {
        icon: <Code className="h-8 w-8 text-primary"/>,
        title: 'Grow With the Best',
        description: 'We are a culture of learners and builders. Collaborate with and get mentored by experts in deep tech and product development.'
    }
]

export default function CareersPage() {
  return (
    <div>
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-primary text-primary-foreground">
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Join Our Mission</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            We are building the future of intelligent systems. If you are passionate about solving hard problems and creating technology that matters, you’ve come to the right place.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Why Work at Praverse Tech?</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">We're more than a company; we're a hub for innovation.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {whyWorkWithUs.map(item => (
                    <div key={item.title} className="text-center space-y-4">
                        <div className="mx-auto bg-background p-4 rounded-full w-fit border">{item.icon}</div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Current Openings</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Ready to make your mark? Find your role below.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {JOB_OPENINGS.map(job => (
                    <Card key={job.title} className="glassmorphism hover:border-primary/50">
                        <CardHeader>
                            <CardTitle>{job.title}</CardTitle>
                            <CardDescription>{job.location} &middot; {job.type}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground line-clamp-2">{job.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Button asChild variant="outline">
                                <Link href="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
             <div className="text-center mt-12">
                <p className="text-muted-foreground">Don't see your role? We're always looking for talent.</p>
                <Button asChild variant="link">
                    <Link href="/contact">Submit a general application</Link>
                </Button>
             </div>
        </div>
      </section>
    </div>
  );
}
