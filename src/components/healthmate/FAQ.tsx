
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useMemoFirebase, useCollection, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';
import { Skeleton } from "../ui/skeleton";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const firestore = useFirestore();
  const faqQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'hm_faq');
  }, [firestore]);

  const { data: faqs, isLoading } = useCollection<FAQItem>(faqQuery);

  if (isLoading) {
    return (
        <section className="py-20 md:py-28">
            <div className="container max-w-3xl mx-auto">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                    <Skeleton className="h-16 w-full" />
                </div>
            </div>
        </section>
    )
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs?.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
