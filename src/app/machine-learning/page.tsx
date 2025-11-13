
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Cpu, FlaskConical, Microscope, Stethoscope } from 'lucide-react';
import Link from 'next/link';

const useCases = [
  {
    icon: <Stethoscope className="w-10 h-10 text-primary" />,
    title: 'Healthcare & Diagnostics',
    description: 'Automated detection of anomalies in medical imaging (fundus, ultrasound) and risk stratification from EHR data.',
  },
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: 'Intelligent Assistants & NLP',
    description: 'Powering conversational assistants like Netra Sakhi for triage, clinical Q&A, and patient-facing communication.',
  },
  {
    icon: <FlaskConical className="w-10 h-10 text-primary" />,
    title: 'Federated & Edge Learning',
    description: 'Developing privacy-first models that train on decentralized data, crucial for on-device applications and sensitive health info.',
  },
  {
    icon: <Microscope className="w-10 h-10 text-primary" />,
    title: 'Industrial & IoT Analytics',
    description: 'Implementing anomaly detection and predictive maintenance models for smart factory and industrial intelligence use cases.',
  },
];

const techStack = [
    'Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Rasa', 'spaCy', 'Transformers', 'Docker', 'Kubernetes', 'GitHub Actions', 'MLFlow'
];

export default function MachineLearningPage() {
  return (
    <div>
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="container text-center">
          <Badge>Machine Learning</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Machine Learning at Praverse Tech</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We don’t just train models — we build ML systems that survive the real world: noisy data, edge constraints, and regulatory oversight.
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
            <h2 className="text-3xl md:text-4xl font-bold">Our Technology Stack</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">The tools and frameworks we use to build robust machine learning systems.</p>
          </div>
           <div className="flex flex-wrap justify-center gap-3">
            {techStack.map(tech => (
              <Badge key={tech} variant="secondary" className="text-base px-4 py-2">{tech}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <Card className="bg-primary/5">
            <CardHeader className="text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <CardTitle className="mt-4">Model Governance & Explainability</CardTitle>
            </CardHeader>
            <CardContent className="text-center max-w-3xl mx-auto">
              <p className="text-muted-foreground">
                In regulated and high-stakes environments, black-box models are not an option. We prioritize model validation, fairness checks, and continuous monitoring. Our commitment to explainable AI (XAI) means we use techniques like Grad-CAM and SHAP-based analyses to make model decisions transparent and trustworthy to human experts, ensuring our solutions are not just powerful, but also accountable.
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
