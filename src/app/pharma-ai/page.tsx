
import Image from 'next/image';
import { FdaResponseGenerator } from '@/components/FdaResponseGenerator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, FileText, GanttChartSquare, Layers, Search } from 'lucide-react';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const heroImage = PlaceHolderImages.find(p => p.id === 'pharma-hero');

export default function PharmaAiPage() {
  const useCases = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'FDA 483 Response Assist',
      description: 'Drastically reduce the time to draft comprehensive and compliant responses to FDA observations.',
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: 'OOS/OOT Analysis Aid',
      description: 'Accelerate root cause analysis for Out-of-Specification and Out-of-Trend results with AI-powered insights.',
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: 'DI Assessment Helpers',
      description: 'Streamline Data Integrity audits by automatically flagging potential anomalies and inconsistencies.',
    },
    {
      icon: <GanttChartSquare className="w-8 h-8 text-primary" />,
      title: 'SOP Automation',
      description: 'Generate, review, and manage Standard Operating Procedures with unparalleled speed and consistency.',
    },
  ];

  const workflowSteps = [
    { name: 'Ingest', description: 'Securely upload your FDA 483, warning letter, or other compliance documents.' },
    { name: 'Analyze', description: 'Our domain-trained AI parses the document, identifying key observations and requirements.' },
    { name: 'Draft', description: 'A comprehensive, referenced draft response is generated in minutes.' },
    { name: 'Review', description: 'Your team reviews, edits, and finalizes the AI-assisted draft, maintaining full control.' },
    { name: 'Archive', description: 'All documents and versions are securely archived for future reference and audits.' },
  ];

  return (
    <div>
      <AnimatedSection className="relative bg-primary pt-24 pb-12 text-primary-foreground md:pt-32 md:pb-20" amount={0.6}>
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
          <Badge variant="secondary">AI for Pharma</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Automate Compliance, Accelerate Release</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
          <p className="mt-4 mx-auto max-w-3xl text-base text-primary-foreground/80 md:text-lg">
            Leverage our specialized AI to navigate the complexities of pharmaceutical compliance, from FDA responses to SOP management.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Revolutionize Your GxP Workflows</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">Our AI tools are built to address your most pressing compliance challenges.</p>
          </AnimatedItem>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map(useCase => (
              <AnimatedItem key={useCase.title}>
              <Card className="flex h-full flex-col text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto mb-4 w-fit rounded-full bg-primary/10 p-4">{useCase.icon}</div>
                  <CardTitle className="mt-4">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.18}>
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
            <AnimatedItem direction="left" className="rounded-2xl border border-border/60 bg-background/90 p-6 shadow-lg backdrop-blur">
              <Badge>Live Demo</Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">FDA 483 Response Generator</h2>
              <p className="mt-4 text-base text-muted-foreground md:text-lg">
                Experience the power of Praverse Tech. Paste the text of an FDA 483 observation below and watch our AI generate a structured, compliant draft response in seconds.
              </p>
               <div className="mt-8 rounded-xl border border-dashed border-primary/30 bg-background p-6">
                <FdaResponseGenerator />
              </div>
            </AnimatedItem>
            <AnimatedItem direction="right" className="space-y-8">
              <h3 className="text-2xl font-bold md:text-3xl">Our Workflow: From Document to Draft</h3>
              {workflowSteps.map((step, index) => (
                <div key={step.name} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-md">{index + 1}</div>
                    {index < workflowSteps.length - 1 && <div className="w-px flex-grow bg-border" />}
                  </div>
                  <div className="rounded-xl border border-border/50 bg-background/80 p-4 shadow-sm">
                    <h4 className="font-semibold text-primary">{step.name}</h4>
                    <p className="text-sm text-muted-foreground md:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </AnimatedItem>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20" amount={0.3}>
        <div className="container">
          <AnimatedItem>
          <Card className="border border-primary/20 bg-primary/5">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="mt-4">A Note on Compliance</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground md:text-base">
                Praverse Tech's tools are designed to align with industry best practices and guidelines such as USFDA 21 CFR Part 211, ICH Q9 (Quality Risk Management), and ICH Q10 (Pharmaceutical Quality System). Our platform acts as a powerful assistant, augmenting the expertise of your QA and RA teams. All AI-generated outputs are intended as drafts and require final review and approval by qualified personnel. We do not make any legal claims of guaranteed compliance.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Discuss Your Compliance Needs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
