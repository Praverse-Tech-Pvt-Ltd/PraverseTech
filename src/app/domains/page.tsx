
import { DOMAINS } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function DomainsPage() {
  return (
    <div>
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-muted">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Innovation Domains</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are a multi-disciplinary team of experts pushing the boundaries of what's possible in intelligent systems.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DOMAINS.map((domain) => {
              const card = (
                <Card className="h-full flex flex-col transition-all duration-300 hover:border-primary hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <domain.icon className={cn("w-10 h-10 transition-colors", domain.color, "group-hover:text-primary")} />
                      <CardTitle className="text-xl">{domain.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardDescription className="px-6 pb-6 text-sm flex-grow">
                    {domain.description}
                  </CardDescription>
                  <div className="px-6 pb-4">
                    <div className="text-sm font-semibold text-primary flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Domain <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              );

              if (domain.href) {
                return (
                  <Link key={domain.title} href={domain.href} className="group block h-full">
                    {card}
                  </Link>
                );
              }

              return (
                <div key={domain.title} className="group block h-full cursor-default">
                  {card}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
