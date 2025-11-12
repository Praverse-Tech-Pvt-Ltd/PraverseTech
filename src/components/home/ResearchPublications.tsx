
'use client';
import * as React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PUBLICATIONS } from '@/lib/data';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';


export function ResearchPublications() {

  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Research & Publications
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            We are committed to advancing the field through peer-reviewed research.
          </p>
        </motion.div>

        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {PUBLICATIONS.map((pub, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                    <Card className="h-full flex flex-col">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <Badge variant="secondary">{pub.badge}</Badge>
                          <span className="text-sm text-muted-foreground">{pub.year}</span>
                        </div>
                        <CardTitle className="pt-4">{pub.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                          <CardDescription>{pub.abstract}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Read Abstract</Button>
                      </CardFooter>
                    </Card>
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
}
