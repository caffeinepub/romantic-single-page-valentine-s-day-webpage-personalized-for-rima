import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlayfulNoButton from '../components/valentine/PlayfulNoButton';
import { RECIPIENT_NAME } from '../lib/valentineCopy';

interface ValentineQuestionGatePageProps {
  onAnswer: () => void;
}

export default function ValentineQuestionGatePage({ onAnswer }: ValentineQuestionGatePageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/90 via-rose-50/80 to-cream/90 dark:from-rose-950/90 dark:via-rose-900/80 dark:to-rose-950/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl space-y-12 animate-fade-in">
          {/* Question Section */}
          <div className="text-center space-y-8">
            {/* Top Heart Decoration */}
            <div className="flex justify-center">
              <img 
                src="/assets/generated/gate-heart-top-transparent.dim_800x300.png" 
                alt="" 
                className="w-full max-w-md h-auto object-contain opacity-90"
                width={800}
                height={300}
              />
            </div>

            {/* Question */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-rose-900 dark:text-rose-100 tracking-tight leading-tight">
                Will you be my Valentine?
              </h1>
              
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500 animate-pulse" />
                <p className="text-xl md:text-2xl font-light text-rose-700 dark:text-rose-200 italic">
                  {RECIPIENT_NAME}
                </p>
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>

            {/* Bottom Heart Decoration */}
            <div className="flex justify-center">
              <img 
                src="/assets/generated/gate-heart-bottom-transparent.dim_800x300.png" 
                alt="" 
                className="w-full max-w-md h-auto object-contain opacity-90"
                width={800}
                height={300}
              />
            </div>
          </div>

          {/* Buttons Section */}
          <div className="relative min-h-[200px] md:min-h-[240px]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Yes Button */}
              <Button
                onClick={onAnswer}
                size="lg"
                className="text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 h-auto bg-rose-600 hover:bg-rose-700 text-white font-serif font-semibold rounded-2xl shadow-romantic transition-all duration-300 hover:scale-105 dark:bg-rose-700 dark:hover:bg-rose-800"
              >
                Yes! 💕
              </Button>

              {/* Playful No Button */}
              <PlayfulNoButton onCatch={onAnswer} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 z-10 py-6 text-center">
        <p className="text-sm text-rose-600/80 dark:text-rose-400/80 font-light">
          © 2026. Built with <Heart className="inline w-4 h-4 text-rose-500 fill-rose-500" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
