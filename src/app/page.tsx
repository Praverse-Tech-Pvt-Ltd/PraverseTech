
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Bot, FlaskConical, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Testimonials, TechStack } from '@/lib/data';
import { ContactForm } from '@/components/ContactForm';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-abstract');

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-24 md:py-32 lg:py-40 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Build faster with domain-smart AI.
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80">
                Praverse Tech helps pharma & healthcare teams automate compliance and patient workflows with safe, explainable AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Book a discovery call</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <Link href="#demo">See live demo</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              {heroImage && 
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  className="object-cover rounded-lg"
                  data-ai-hint={heroImage.imageHint}
                />
              }
            </div>
          </div>
        </section>

        {/* Problem -> Solution Section */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline">The Praverse Advantage</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">From Complex Challenges to AI-Powered Solutions</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">We transform your toughest industry-specific problems into opportunities for growth and efficiency with our custom AI solutions.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>The Problem: Regulatory Burden</CardTitle>
                  <CardDescription>Pharma companies face ever-increasing compliance complexity, leading to long cycles and high costs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Manual documentation, slow responses to regulatory inquiries (like FDA 483s), and inconsistent SOP management drain resources and introduce risk.</p>
                </CardContent>
              </Card>
              <div className="flex items-center justify-center">
                 <ArrowRight className="h-12 w-12 text-primary hidden lg:block" />
                 <Bot className="h-16 w-16 text-primary lg:hidden" />
              </div>
              <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Our Solution: Compliance Automation</CardTitle>
                  <CardDescription>Our AI platform automates and assists with critical compliance tasks, ensuring accuracy and speed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Generate draft FDA 483 responses in minutes, automate SOP creation, and ensure data integrity with our specialized AI models, trained on domain-specific knowledge.</p>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                  <CardTitle>The Problem: Healthcare Inefficiency</CardTitle>
                  <CardDescription>Patient triage is often slow, manual, and places a heavy burden on clinical staff, leading to delays in care.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Overloaded front-desks, inconsistent data capture, and long wait times create a poor patient experience and inefficient resource allocation.</p>
                </CardContent>
              </Card>
              <div className="flex items-center justify-center">
                 <ArrowRight className="h-12 w-12 text-primary hidden lg:block" />
                 <Bot className="h-16 w-16 text-primary lg:hidden" />
              </div>
               <Card className="bg-primary/5">
                <CardHeader>
                  <CardTitle>Our Solution: Intelligent Triage</CardTitle>
                  <CardDescription>HealthMate, our AI-powered kiosk, provides rapid, accurate, and multimodal patient triage.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Our kiosk captures vitals, understands symptoms via natural language, and provides an explainable triage score, integrating seamlessly with your EHR.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Two Pillars Section */}
        <section id="demo" className="w-full py-20 md:py-28 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Two Pillars of Innovation</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">Focused expertise for critical industries.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <FlaskConical className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">AI for Pharma</h3>
                </div>
                <p className="text-muted-foreground">Automate and accelerate your compliance workflows. Our platform is designed to assist with:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>FDA 483 & Warning Letter response assistance</li>
                  <li>SOP automation and management</li>
                  <li>Data Integrity (DI) audit support</li>
                  <li>OOS/OOT investigation aids</li>
                </ul>
                <Button asChild>
                  <Link href="/pharma-ai">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                 <div className="aspect-video bg-background rounded-lg p-4 border relative mt-4">
                   <p className="text-sm text-muted-foreground">Live demo of AI for Pharma. Shows generating an FDA response.</p>
                   {PlaceHolderImages.find(p => p.id === 'pharma-demo') && 
                     <Image
                       src={PlaceHolderImages.find(p => p.id === 'pharma-demo')?.imageUrl!}
                       alt={PlaceHolderImages.find(p => p.id === 'pharma-demo')?.description!}
                       fill
                       className="object-contain rounded-md"
                       data-ai-hint={PlaceHolderImages.find(p => p.id === 'pharma-demo')?.imageHint}
                     />
                   }
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Stethoscope className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">HealthMate Kiosk</h3>
                </div>
                <p className="text-muted-foreground">The future of patient intake. A smart, empathetic, and efficient first point of contact.</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Multimodal triage (voice, text, vitals)</li>
                  <li>Seamless EHR integration</li>
                  <li>Telemedicine handoff capabilities</li>
                  <li>Reduces wait times and staff workload</li>
                </ul>
                <Button asChild>
                  <Link href="/healthmate">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <div className="aspect-video bg-background rounded-lg p-4 border relative mt-4">
                   <p className="text-sm text-muted-foreground">Live demo of HealthMate. Shows patient triage process.</p>
                   {PlaceHolderImages.find(p => p.id === 'healthmate-demo') && 
                     <Image
                       src={PlaceHolderImages.find(p => p.id === 'healthmate-demo')?.imageUrl!}
                       alt={PlaceHolderImages.find(p => p.id === 'healthmate-demo')?.description!}
                       fill
                       className="object-contain rounded-md"
                       data-ai-hint={PlaceHolderImages.find(p => p.id === 'healthmate-demo')?.imageHint}
                     />
                   }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Trusted by Industry Leaders</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">Don't just take our word for it. Here's what our partners have to say.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Testimonials.map((testimonial, index) => (
                <Card key={index} className="flex flex-col">
                  <CardContent className="pt-6 flex-grow">
                    <p className="italic">"{testimonial.quote}"</p>
                  </CardContent>
                  <CardHeader className="flex-row items-center gap-4">
                    <Avatar>
                      {PlaceHolderImages.find(p => p.id === testimonial.avatarId) &&
                        <AvatarImage src={PlaceHolderImages.find(p => p.id === testimonial.avatarId)!.imageUrl} alt={testimonial.name} data-ai-hint={PlaceHolderImages.find(p => p.id === testimonial.avatarId)!.imageHint} />
                      }
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.title}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tech Stack Section */}
        <section className="w-full py-20 md:py-28 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">Powered by a World-Class Tech Stack</h2>
            <div className="relative flex overflow-hidden">
              <div className="flex animate-marquee motion-reduce:animate-none">
                {TechStack.map((tech, i) => (
                  <div key={i} className="flex items-center justify-center mx-8">
                    <span className="text-4xl text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-0 flex animate-marquee2 motion-reduce:animate-none">
                {TechStack.map((tech, i) => (
                  <div key={i} className="flex items-center justify-center mx-8">
                    <span className="text-4xl text-muted-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="w-full py-20 md:py-28 bg-background">
          <div className="container px-4 md:px-6">
            <Card className="bg-primary text-primary-foreground">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Workflow?</h2>
                  <p className="text-primary-foreground/80">Let's discuss how Praverse Tech can tailor an AI solution for your specific needs. Schedule a free, no-obligation discovery call with our experts today.</p>
                  <div className="pt-4">
                    <Button asChild size="lg" variant="secondary">
                      <Link href="/contact">Book a Discovery Call</Link>
                    </Button>
                  </div>
                </div>
                <div className="p-8 md:p-12 bg-primary/80 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                   <ContactForm/>
                </div>
              </div>
            </Card>
          </div>
        </section>

      </main>
    </div>
  )
}
