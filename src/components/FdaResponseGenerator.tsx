
"use client";

import { useState } from 'react';
import { useFlow } from '@genkit-ai/next/client';
import { generateFDA483Response } from '@/ai/flows/generate-fda-response';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

export function FdaResponseGenerator() {
  const [fdaLetter, setFdaLetter] = useState('');
  const [generate, generating, response] = useFlow(generateFDA483Response);

  const handleGenerate = async () => {
    if (!fdaLetter) return;
    await generate({ fda483WarningLetter: fdaLetter });
  };

  const sampleLetter = `OBSERVATION 1
Procedures for sterile drug products are not established and followed.
Specifically,
Your firm failed to perform smoke studies under dynamic conditions to demonstrate unidirectional airflow for the protection of sterile drug products. For example, during the manufacture of product X, operators were observed creating air turbulence...`;

  return (
    <div className="space-y-4">
      <Textarea
        placeholder="Paste your FDA 483 / Warning Letter text here..."
        value={fdaLetter}
        onChange={(e) => setFdaLetter(e.target.value)}
        rows={8}
        className="text-sm"
      />
       <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={handleGenerate} disabled={generating || !fdaLetter}>
          <Sparkles className="mr-2 h-4 w-4" />
          {generating ? 'Generating...' : 'Generate Draft Response'}
        </Button>
        <Button variant="outline" onClick={() => setFdaLetter(sampleLetter)}>
          Load Sample
        </Button>
      </div>

      {generating && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5 animate-pulse" /> AI is drafting the response...
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="h-4 bg-muted rounded animate-pulse w-3/4"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-full"></div>
            <div className="h-4 bg-muted rounded animate-pulse w-1/2"></div>
          </CardContent>
        </Card>
      )}

      {response && (
        <Card>
          <CardHeader>
            <CardTitle>AI-Generated Draft Response</CardTitle>
            <CardDescription>
              This is a draft. Please review and edit with your QA/RA team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-72 rounded-md border p-4">
                <pre className="whitespace-pre-wrap font-sans text-sm">{response.draftResponse}</pre>
            </ScrollArea>
          </CardContent>
           <CardFooter>
            <Button>Copy to Clipboard</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
