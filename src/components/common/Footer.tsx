
"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/ui/button';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { WaitlistDialog } from '../healthmate/WaitlistDialog';

export function Footer() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

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
                <li><Link href="/healthmate-terms" className="text-sm text-muted-foreground hover:text-foreground">HealthMate Terms</Link></li>
                <li><Link href="/healthmate-privacy" className="text-sm text-muted-foreground hover:text-foreground">HealthMate Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-semibold">Be the first to know</h3>
            <p className="text-sm text-muted-foreground">Join the waitlist for HealthMate and get exclusive updates.</p>
            <WaitlistDialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <Button>Join Waitlist</Button>
            </WaitlistDialog>
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
