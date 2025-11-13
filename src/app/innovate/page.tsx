
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Handshake, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { InnovateForm } from '@/components/innovate/InnovateForm';

const processSteps = [
    { name: 'Submit Idea', description: 'Fill out our confidential pitch form with your concept.' },
    { name: 'Review', description: 'Our expert panel reviews every submission for feasibility, impact, and alignment.' },
    { name: 'Collaborate', description: 'If selected, we will reach out to schedule a meeting and discuss next steps.' },
    { name: 'Prototype', description: 'We work with you to build a proof-of-concept or minimum viable product.' },
    { name: 'Launch', description: 'Leverage our ecosystem to take your innovation to market.' },
  ];
  

export default function InnovatePage() {
  return (
    <div>
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-primary text-primary-foreground">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-5"></div>
            <div className="container relative z-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold">Innovate With Us</h1>
                <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
                    Your ideas have the power to change industries. We provide the expertise, resources, and partnership to help you bring them to life.
                </p>
            </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold">Why Collaborate with Praverse?</h2>
                        <p className="text-muted-foreground text-lg">
                            We're more than just a technology provider; we're a launchpad for deep-tech innovation.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Rocket className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Technical & Product Expertise</h3>
                                    <p className="text-sm text-muted-foreground">From AI model development to MLOps and robotics simulation, our team provides the technical firepower to build robust products.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Handshake className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Founder Mentorship</h3>
                                    <p className="text-sm text-muted-foreground">Gain direct access to our founder and leadership for strategic guidance, architectural reviews, and go-to-market planning.</p>
                                </div>
                            </li>
                             <li className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full mt-1">
                                    <Lightbulb className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold">From Idea to Market</h3>
                                    <p className="text-sm text-muted-foreground">We help you navigate the entire product lifecycle, from initial prototype to a scalable, market-ready solution.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                     <div>
                        <Card>
                            <CardHeader>
                                <CardTitle>Pitch Your Idea</CardTitle>
                                <CardDescription>Ready to start? Fill out the form to submit your concept.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <InnovateForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-muted">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">A transparent and collaborative journey from concept to reality.</p>
                </div>
                <div className="relative max-w-5xl mx-auto">
                     <div className="absolute left-0 top-4 right-0 h-0.5 bg-border -z-10" />
                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {processSteps.map((step, index) => (
                        <div key={step.name} className="flex flex-col items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold mb-2 border-4 border-muted">{index + 1}</div>
                            <h4 className="font-semibold">{step.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20">
            <div className="container">
            <Card className="bg-primary/5">
                <CardHeader className="text-center flex-row items-center justify-center gap-4">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                    <CardTitle>Your Ideas Are Safe With Us</CardTitle>
                </CardHeader>
                <CardContent className="text-center max-w-3xl mx-auto">
                <p className="text-muted-foreground">
                    We believe that great ideas deserve protection. All submissions are treated as strictly confidential. We respect intellectual property and are committed to a transparent and fair collaboration process. Formal NDAs will be established before any detailed technical discussions.
                </p>
                </CardContent>
            </Card>
            </div>
      </section>
    </div>
  )
}
