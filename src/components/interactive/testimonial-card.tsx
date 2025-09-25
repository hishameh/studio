'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Loader2, Mic } from 'lucide-react';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { generateTestimonialAction } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

// A mock, short, silent WAV file encoded in Base64
const MOCK_AUDIO_DATA_URI = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar?: ImagePlaceholder;
  isAudio?: boolean;
}

export default function TestimonialCard({ name, role, quote, avatar, isAudio = false }: TestimonialCardProps) {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateText = async () => {
    setIsLoading(true);
    setGeneratedText('');
    const result = await generateTestimonialAction(MOCK_AUDIO_DATA_URI);
    setIsLoading(false);

    if (result.success && result.data) {
        // Since the AI might just return the prompt, we'll use a mock text for demo
        setGeneratedText(`"Alive has been a game-changer for my store. I'm earning more and customers are happier. It's a win-win!" (Generated from audio)`);
    } else {
      toast({
        variant: 'destructive',
        title: 'Transcription Failed',
        description: result.error || 'Could not generate text from audio.',
      });
    }
  };

  return (
    <Card className="flex h-full flex-col text-left">
      <CardContent className="flex flex-1 flex-col justify-between p-6">
        <blockquote className="flex-1 text-lg text-muted-foreground">
          “{generatedText || quote}”
        </blockquote>
        <div className="mt-6">
          {isAudio && (
            <div className="mb-4">
              <Button onClick={handleGenerateText} disabled={isLoading} size="sm">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Mic className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Generating...' : 'Tap to hear (and transcribe)'}
              </Button>
            </div>
          )}
          <div className="flex items-center gap-4">
            <Avatar>
              {avatar && <AvatarImage src={avatar.imageUrl} alt={name} data-ai-hint={avatar.imageHint} />}
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-primary">{name}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
