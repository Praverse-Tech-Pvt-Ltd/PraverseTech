
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Target, Users, Bot } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const heroImage = PlaceHolderImages.find(p => p.id === 'about-mission');
const leadership1 = PlaceHolderImages.find(p => p.id === 'leadership-1');
const leadership2 = PlaceHolderImages.find(p => p.id === 'leadership-2');

const leadership = [
  {
    name: 'Anand Sharma',
    title: 'Founder & CEO',
    bio: 'With over 15 years in enterprise software, Anand is passionate about applying AI to solve real-world problems in regulated industries. His vision is to make complex technology accessible and impactful.',
    avatar: leadership1
  },
  {
    name: 'Priya Verma',
    title: 'CTO & Head of AI',
    bio: 'Priya leads our technology and research efforts. A PhD in computer science with a focus on NLP, she architects our domain-specific models and ensures our AI is explainable and robust.',
    avatar: leadership2
  },
];

const values = [
    { icon: <Target className="h-8 w-8 text-primary"/>, title: 'Customer Obsession', description: 'We succeed when our customers succeed. We deeply embed ourselves in their domain to solve their most critical problems.'},
    { icon: <Award className="h-8 w-8 text-primary"/>, title: 'Expertise & Trust', description: 'We are experts in our field and build trust through transparency, security, and delivering on our promises.'},
    { icon: <Users className="h-8 w-8 text-primary"/>, title: 'India-First, Global Outlook', description: 'Proudly building from India for the world. We combine local talent with a global vision for impact.'},
    { icon: <Bot className="h-8 w-8 text-primary"/>, title: 'Visionary Pragmatism', description: 'We dream big about the future of AI but stay grounded in delivering practical, tangible value to our customers today.'}
]

export default function AboutPage() {
  return (
    <div>
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="container text-center">
          <Badge>About Praverse Tech</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Building the Future of Industry AI</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a team of technologists, domain experts, and visionaries dedicated to solving complex industry challenges with safe, explainable AI.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To empower regulated industries like pharmaceuticals and healthcare with intelligent automation, turning their domain expertise into a competitive advantage. We believe in building AI that is not just powerful, but also trustworthy, explainable, and seamlessly integrated into the workflows of the experts who use it.
              </p>
              <p className="text-muted-foreground">
                From our base in India, we're building world-class solutions that address global challenges, ensuring our partners stay ahead of the curve in a rapidly evolving technological landscape.
              </p>
            </div>
            <div>
              {heroImage && 
                <Image src={heroImage.imageUrl} alt={heroImage.description} width={1200} height={800} className="rounded-lg" data-ai-hint={heroImage.imageHint}/>
              }
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-28 bg-muted">
        <div className="container">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
                <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide our work and our partnerships.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map(value => (
                    <div key={value.title} className="text-center space-y-4">
                        <div className="mx-auto bg-background p-4 rounded-full w-fit">{value.icon}</div>
                        <h3 className="font-bold text-xl">{value.title}</h3>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Leadership</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">The minds behind our mission.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map(leader => (
              <Card key={leader.name}>
                <CardHeader className="items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    {leader.avatar && <AvatarImage src={leader.avatar.imageUrl} alt={leader.name} data-ai-hint={leader.avatar.imageHint} />}
                    <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{leader.name}</CardTitle>
                  <CardDescription>{leader.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center text-muted-foreground">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
