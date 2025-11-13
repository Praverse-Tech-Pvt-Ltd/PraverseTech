
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Cpu, FlaskConical, Microscope, Stethoscope, Layers, Database, Shield } from 'lucide-react';
import Link from 'next/link';
import { AnimatedItem, AnimatedSection } from '@/components/common/AnimatedSection';

const useCases = [
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: 'Healthcare & Diagnostics',
    description: 'Leveraging multimodal AI on imaging, EHR, and genomic data for early detection, risk stratification, and personalized treatment pathways.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Generative AI & Assistants',
    description: 'Building custom LLMs and intelligent agents for complex Q&A, document summarization, and automating human-in-the-loop workflows.',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
    title: 'Federated & Privacy-First AI',
    description: 'Training models on decentralized data without compromising user privacy, essential for healthcare and on-device intelligence.',
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: 'Industrial & Scientific AI',
    description: 'Implementing advanced anomaly detection, predictive maintenance, and digital twin simulations for smart manufacturing and research.',
  },
];

const principles = [
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: 'Advanced Model Architectures',
    description: 'Transformers, GNNs, Diffusion Models & more.',
  },
  {
    icon: <Database className="w-8 h-8 text-primary" />,
    title: 'Data-Centric AI',
    description: 'Synthetic data, self-supervision, and robust feature engineering.',
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: 'Scalable MLOps',
    description: 'CI/CD, Kubernetes, and automated monitoring for production AI.',
  },
];

export default function MachineLearningPage() {
  return (
    <div>
      <AnimatedSection className="relative bg-muted pt-24 pb-12 md:pt-32 md:pb-20" amount={0.5}>
        <div className="container text-center">
          <AnimatedItem>
          <Badge>Machine Learning</Badge>
          </AnimatedItem>
          <AnimatedItem delay={0.1}>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">Machine Learning at Praverse Tech</h1>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
          <p className="mt-4 mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
            We don’t just train models — we build production-grade ML systems that solve real-world challenges with noisy data, edge constraints, and regulatory oversight.
          </p>
          </AnimatedItem>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 md:py-28" staggerChildren={0.12}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Applied AI Use Cases</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">How we turn machine learning theory into production-ready solutions.</p>
          </AnimatedItem>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {useCases.map(useCase => (
              <AnimatedItem key={useCase.title}>
              <Card className="glassmorphism h-full text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <CardHeader>
                  <div className="mx-auto w-fit rounded-full bg-primary/10 p-4">{useCase.icon}</div>
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

       <AnimatedSection className="bg-muted py-20 md:py-28" staggerChildren={0.15}>
        <div className="container">
          <AnimatedItem className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Core ML Principles</h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">We are technology agnostic. Our expertise is in first-principles thinking to select the best tools and architectures for the problem at hand.</p>
          </AnimatedItem>
           <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {principles.map(tech => (
              <AnimatedItem key={tech.title}>
              <Card className="border border-border/60 bg-background/70 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  {tech.icon}
                  <CardTitle className="text-base font-semibold">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20" amount={0.3}>
        <div className="container">
          <AnimatedItem>
          <Card className="border border-primary/20 bg-primary/5">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <CardTitle className="mt-4">Trustworthy AI by Design</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                In high-stakes environments, black-box models are a liability. We build systems centered on model governance, fairness, and continuous monitoring. Our commitment to explainable AI (XAI) means we use techniques like Grad-CAM and SHAP to make model decisions transparent and trustworthy to human experts, ensuring our solutions are not just powerful, but also accountable.
              </p>
            </CardContent>
          </Card>
          </AnimatedItem>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-20 md:pb-28">
        <div className="container">
          <AnimatedItem className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-cyan-500 to-secondary p-8 text-center md:p-12">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-10"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                Need a production-ready ML system?
              </h2>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-primary">
                  <Link href="/contact">Discuss a Project</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                   <Link href="/blog">View Selected Case Studies</Link>
                </Button>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </AnimatedSection>
    </div>
  );
}
