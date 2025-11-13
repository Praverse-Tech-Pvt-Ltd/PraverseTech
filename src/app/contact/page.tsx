
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedItem, AnimatedSection } from "@/components/common/AnimatedSection";

const heroImage = PlaceHolderImages.find(p => p.id === 'contact-hero');

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-primary py-20 text-primary-foreground md:py-32" amount={0.55}>
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <AnimatedItem>
          <h1 className="text-4xl font-bold md:text-5xl">Get in Touch</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <p className="mt-4 mx-auto max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            We're here to answer your questions and explore how our AI solutions can help you.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.15}>
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            <AnimatedItem className="space-y-8 rounded-2xl border border-border/60 bg-muted/60 p-6 shadow-sm backdrop-blur lg:col-span-1">
                <div>
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="text-muted-foreground mt-2">Find us at our office or drop us a line.</p>
                </div>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Our Office</h3>
                            <p className="text-muted-foreground text-sm">Praverse Tech Pvt Ltd,<br />Bangalore, India</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p className="text-muted-foreground text-sm">contact@praverse.ai</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-muted-foreground text-sm">+91 123 456 7890</p>
                        </div>
                    </div>
                </div>
            </AnimatedItem>
            <AnimatedItem className="lg:col-span-2">
                <Card className="border-border/60 shadow-xl">
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                        <CardDescription>Fill out the form and we'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
