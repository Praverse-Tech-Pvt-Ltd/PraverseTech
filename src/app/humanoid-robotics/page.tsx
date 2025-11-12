
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Bot, Cpu, Users, Orbit, CheckCircle } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'humanoid-hero');
const assistImage = PlaceHolderImages.find(p => p.id === 'humanoid-assist');
const virtualImage = PlaceHolderImages.find(p => p.id === 'humanoid-virtual');

const features = [
    {
        icon: <Bot className="w-10 h-10 text-primary" />,
        title: 'Advanced Virtual Humanoids',
        description: 'We build sophisticated virtual humanoid robots capable of complex interactions and tasks in simulated environments, pushing the boundaries of AI and robotics.',
    },
    {
        icon: <Cpu className="w-10 h-10 text-primary" />,
        title: 'Seamless Human-Robot Collaboration',
        description: 'Our robots are designed to be intuitive partners for humans, assisting with tasks to enhance productivity and safety across various industries.',
    },
    {
        icon: <Orbit className="w-10 h-10 text-primary" />,
        title: 'Physics-Based Simulation',
        description: 'We leverage high-fidelity physics simulations to train and validate our robots, ensuring they can operate effectively and safely in real-world scenarios.',
    },
    {
        icon: <Users className="w-10 h-10 text-primary" />,
        title: 'Assistance for Humanity',
        description: 'Our ultimate goal is to create robots that serve humanity, from assisting in hazardous environments to providing support in healthcare and daily life.',
    },
];

export default function HumanoidRoboticsPage() {
  return (
    <div>
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-primary text-primary-foreground">
        {heroImage && 
          <Image 
            src={heroImage.imageUrl} 
            alt={heroImage.description} 
            fill
            className="object-cover opacity-25"
            data-ai-hint={heroImage.imageHint}
          />
        }
        <div className="container relative z-10 text-center">
          <Badge variant="secondary">Our New Frontier</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Pioneering Humanoid Robotics</h1>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            At Praverse Tech, we are engineering the next generation of virtual humanoid robots designed to collaborate with and assist humans in complex tasks.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">The Future of Human-Robot Interaction</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">We are building intelligent virtual agents that can learn, adapt, and work alongside people.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(feature => (
              <Card key={feature.title} className="text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">{feature.icon}</div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge>Our Approach</Badge>
              <h2 className="text-3xl font-bold mt-2">Virtual First, Physically Realized</h2>
              <p className="text-muted-foreground text-lg">
                We believe the key to creating capable real-world robots is to perfect them in simulation. Our virtual-first approach allows for rapid iteration, extensive training, and rigorous safety testing before a single component is manufactured.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Train complex behaviors in diverse, simulated environments.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Validate safety and effectiveness through millions of virtual hours.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Develop control policies that seamlessly transfer from simulation to reality.</span>
                </li>
              </ul>
            </div>
            <div>
              {virtualImage && 
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image src={virtualImage.imageUrl} alt={virtualImage.description} fill className="object-cover" data-ai-hint={virtualImage.imageHint}/>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {assistImage && 
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image src={assistImage.imageUrl} alt={assistImage.description} fill className="object-cover" data-ai-hint={assistImage.imageHint}/>
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              }
            </div>
            <div className="space-y-6">
              <Badge>Applications</Badge>
              <h2 className="text-3xl font-bold mt-2">Assistive Robotics for a Better Tomorrow</h2>
              <p className="text-muted-foreground text-lg">
                Our humanoid robotics program is focused on creating practical solutions for real-world problems. We're exploring applications in:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <Bot className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><b>Manufacturing:</b> Assisting with complex assembly and quality control tasks.</span>
                </li>
                <li className="flex items-start">
                  <Bot className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><b>Logistics:</b> Smart warehouse automation and last-mile delivery solutions.</span>
                </li>
                <li className="flex items-start">
                  <Bot className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span><b>Healthcare Support:</b> Aiding nurses and staff with non-clinical tasks to improve patient care.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
