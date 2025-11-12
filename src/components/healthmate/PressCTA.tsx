
'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { MediaDialog } from './MediaDialog';
import { BriefingDialog } from './BriefingDialog';

export function PressCTA() {
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isPartnershipOpen, setIsPartnershipOpen] = useState(false);
  
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container">
        <Card className="glassmorphism border-primary/10">
          <CardHeader className="text-center">
            <Badge variant="secondary" className="w-fit mx-auto mb-2">Press & Partners</Badge>
            <CardTitle className="text-3xl font-bold">Collaborate with us</CardTitle>
            <CardDescription className="max-w-2xl mx-auto">
              We are actively seeking press and strategic partners to join us on our journey.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MediaDialog open={isMediaOpen} onOpenChange={setIsMediaOpen}>
                <Button>Request Media Kit</Button>
              </MediaDialog>
              <BriefingDialog open={isPartnershipOpen} onOpenChange={setIsPartnershipOpen}>
                <Button variant="outline">Discuss Partnership</Button>
              </BriefingDialog>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
