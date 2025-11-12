
"use client";

import { useState } from 'react';
import { useFlow } from '@genkit-ai/next/client';
import { generateBlogIdeas } from '@/ai/flows/generate-blog-ideas';
import { Button } from '@/components/ui/button';
import { Wand2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

export function BlogIdeasGenerator() {
  const [topic, setTopic] = useState('AI in Pharma');
  const [generate, generating, response] = useFlow(generateBlogIdeas);

  const handleGenerate = async () => {
    await generate({ topic, numIdeas: 3 });
  };

  return (
    <Card className="bg-primary/5">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-6 w-6 text-primary" />
                Stuck for Ideas?
            </CardTitle>
            <CardDescription>
                Let our AI help you brainstorm your next blog post. Select a topic and generate ideas.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <Select onValueChange={setTopic} defaultValue={topic}>
                    <SelectTrigger className="w-full sm:w-[200px]">
                        <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="AI in Pharma">AI in Pharma</SelectItem>
                        <SelectItem value="Healthcare Innovation">Healthcare Innovation</SelectItem>
                        <SelectItem value="Regulatory Compliance">Regulatory Compliance</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={handleGenerate} disabled={generating}>
                    {generating ? 'Generating...' : 'Generate Ideas'}
                </Button>
            </div>
            
            {generating && <p className="text-sm text-muted-foreground">Generating...</p>}
            
            {response && (
                <div className="space-y-2 pt-4">
                    <h4 className="font-semibold">Here are some ideas:</h4>
                    <ul className="list-disc list-inside space-y-1">
                        {response.ideas.map((idea, index) => (
                            <li key={index} className="text-sm">{idea}</li>
                        ))}
                    </ul>
                </div>
            )}
        </CardContent>
    </Card>
  );
}
