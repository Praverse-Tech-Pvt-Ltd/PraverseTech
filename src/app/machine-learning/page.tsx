
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Cpu, FlaskConical, Microscope, Stethoscope, Layers, Database, Shield } from 'lucide-react';
import Link from 'next/link';

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
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="container text-center">
          <Badge>Machine Learning</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Machine Learning at Praverse Tech</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We don’t just train models — we build production-grade ML systems that solve real-world challenges with noisy data, edge constraints, and regulatory oversight.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Applied AI Use Cases</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">How we turn machine learning theory into production-ready solutions.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map(useCase => (
              <Card key={useCase.title} className="text-center hover:shadow-xl transition-shadow glassmorphism">
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core ML Principles</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">We are technology agnostic. Our expertise is in first-principles thinking to select the best tools and architectures for the problem at hand.</p>
          </div>
           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {principles.map(tech => (
              <Card key={tech.title} className="bg-background/50">
                <CardHeader className="flex flex-row items-center gap-4">
                  {tech.icon}
                  <CardTitle className="text-base">{tech.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <Card className="bg-primary/5">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <CardTitle className="mt-4">Trustworthy AI by Design</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                In high-stakes environments, black-box models are a liability. We build systems centered on model governance, fairness, and continuous monitoring. Our commitment to explainable AI (XAI) means we use techniques like Grad-CAM and SHAP to make model decisions transparent and trustworthy to human experts, ensuring our solutions are not just powerful, but also accountable.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-20 md:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-secondary p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[url(/circuit-board.svg)] bg-repeat opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Need a production-ready ML system?
              </h2>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
                  <Link href="/contact">Discuss a Project</Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                   <Link href="/blog">View Selected Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
