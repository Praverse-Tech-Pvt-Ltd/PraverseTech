
"use client";

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email.' }),
});

export function Footer() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: '' },
  });

  async function onSubmit(values: z.infer<typeof newsletterSchema>) {
    const result = await subscribeToNewsletter(values);
    if (result.success) {
      toast({
        title: 'Subscribed!',
        description: "Thanks for joining our newsletter. Look out for updates in your inbox.",
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Something went wrong.',
        description: result.message,
      });
    }
  }

  return (
    <footer className="border-t bg-muted">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4 md:col-span-1">
            <Logo />
            <p className="text-sm text-muted-foreground">Domain-smart AI for Pharma & Healthcare.</p>
            <address className="text-sm text-muted-foreground not-italic">
              Bangalore, India
            </address>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h3 className="font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">Get the latest on AI in pharma and health-tech.</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={form.formState.isSubmitting}>Subscribe</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
