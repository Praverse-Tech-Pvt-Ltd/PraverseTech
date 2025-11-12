
import Image from 'next/image';
import { FdaResponseGenerator } from '@/components/FdaResponseGenerator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, CheckCircle, FileText, GanttChartSquare, Layers, Search } from 'lucide-react';
import Link from 'next/link';

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
          <Badge variant="secondary">AI for Pharma</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Automate Compliance, Accelerate Release</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            Leverage our specialized AI to navigate the complexities of pharmaceutical compliance, from FDA responses to SOP management.
          </p>
        </div>
      </section>
      
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Revolutionize Your GxP Workflows</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">Our AI tools are built to address your most pressing compliance challenges.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map(useCase => (
              <Card key={useCase.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">{useCase.icon}</div>
                  <CardTitle className="mt-4">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge>Live Demo</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4">FDA 483 Response Generator</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Experience the power of PraverseAI. Paste the text of an FDA 483 observation below and watch our AI generate a structured, compliant draft response in seconds.
              </p>
               <div className="mt-8 p-6 border rounded-lg bg-background">
                <FdaResponseGenerator />
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Our Workflow: From Document to Draft</h3>
              {workflowSteps.map((step, index) => (
                <div key={step.name} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">{index + 1}</div>
                    {index < workflowSteps.length - 1 && <div className="w-px flex-grow bg-border"></div>}
                  </div>
                  <div>
                    <h4 className="font-semibold">{step.name}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <Card className="bg-primary/5">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <CardTitle className="mt-4">A Note on Compliance</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                PraverseAI's tools are designed to align with industry best practices and guidelines such as USFDA 21 CFR Part 211, ICH Q9 (Quality Risk Management), and ICH Q10 (Pharmaceutical Quality System). Our platform acts as a powerful assistant, augmenting the expertise of your QA and RA teams. All AI-generated outputs are intended as drafts and require final review and approval by qualified personnel. We do not make any legal claims of guaranteed compliance.
              </p>
              <Button asChild className="mt-6">
                <Link href="/contact">Discuss Your Compliance Needs <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
