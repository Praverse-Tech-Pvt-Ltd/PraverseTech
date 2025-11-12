
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot } from 'lucide-react';
import Link from 'next/link';

export default function HealthmatePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
        <div className="bg-primary/10 p-4 rounded-full mb-6">
            <Bot className="w-12 h-12 text-primary" />
        </div>
        <Badge variant="secondary" className="mb-4">Coming Soon</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">HealthMate is on its way!</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are hard at work building the future of patient intake. Our AI-powered HealthMate kiosk will revolutionize triage with smart, empathetic, and efficient technology. Stay tuned for our launch.
        </p>
        <div className="mt-8">
            <Button asChild>
                <Link href="/contact">
                    Get Notified
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
    </div>
  );
}

