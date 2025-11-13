
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { WaitlistDialog } from '../healthmate/WaitlistDialog';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/pharma-ai', label: 'Domains' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <Logo />
            <p className="text-sm text-muted-foreground">Bringing Innovations to Market.</p>
            <address className="text-sm text-muted-foreground not-italic">
              Bangalore, India | Global Operations
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
          <div className="grid grid-cols-2 gap-8 md:col-span-4">
            <div>
              <h3 className="font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.map(link => (
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
                <li><Link href="/healthmate-terms" className="text-sm text-muted-foreground hover:text-foreground">HealthMate Terms</Link></li>
                <li><Link href="/healthmate-privacy" className="text-sm text-muted-foreground hover:text-foreground">HealthMate Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 md:col-span-4">
            <h3 className="font-semibold">Subscribe to our newsletter</h3>
            <p className="text-sm text-muted-foreground">Get the latest on our research, products, and insights.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Praverse Tech Pvt Ltd. All rights reserved.</p>
          <p className="mt-2">HealthMate is proprietary and patent-pending. Details available under NDA.</p>
        </div>
      </div>
    </footer>
  );
}
