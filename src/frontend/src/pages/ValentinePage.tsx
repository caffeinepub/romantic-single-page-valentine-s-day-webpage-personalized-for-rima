import { Heart } from 'lucide-react';
import SectionShell from '../components/valentine/SectionShell';
import { RECIPIENT_NAME } from '../lib/valentineCopy';

export default function ValentinePage() {
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
      <div className="relative z-10">
        {/* Hero Section */}
        <SectionShell className="min-h-screen flex flex-col items-center justify-center text-center pt-20 pb-16">
          <div className="space-y-8 animate-fade-in">
            {/* Heart Wreath Decoration */}
            <div className="flex justify-center mb-6">
              <img 
                src="/assets/generated/heart-wreath.dim_800x800.png" 
                alt="" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain opacity-90"
                width={160}
                height={160}
              />
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-rose-900 dark:text-rose-100 tracking-tight">
                For {RECIPIENT_NAME}
              </h1>
              <div className="flex items-center justify-center gap-3">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500 animate-pulse" />
                <p className="text-2xl md:text-3xl lg:text-4xl font-light text-rose-700 dark:text-rose-200 italic">
                  My Valentine
                </p>
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-rose-600 dark:text-rose-300 max-w-2xl mx-auto font-light leading-relaxed">
              A special message from my heart to yours
            </p>

            {/* Heart Icons Decoration - Asset path preserved, underlying PNG updated with transparency */}
            <div className="flex justify-center pt-4">
              <img 
                src="/assets/generated/heart-icons-set.dim_256x256.png" 
                alt="" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80"
                width={128}
                height={128}
              />
            </div>
          </div>
        </SectionShell>

        {/* Letter Section */}
        <SectionShell className="py-20 md:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-rose-200/50 dark:border-rose-800/50">
              <div className="space-y-6 text-rose-900 dark:text-rose-100">
                <div className="text-center mb-8">
                  <Heart className="w-10 h-10 text-rose-500 fill-rose-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-rose-900 dark:text-rose-100">
                    My Dearest {RECIPIENT_NAME}
                  </h2>
                </div>

                <div className="space-y-5 text-base md:text-lg leading-relaxed font-light">
                  <p>
                    Every moment with you feels like a beautiful dream I never want to wake from. 
                    Your smile lights up my world in ways I never thought possible, and your laughter 
                    is the sweetest melody my heart has ever known.
                  </p>

                  <p>
                    You've brought so much joy, warmth, and meaning into my life. With you, 
                    every day feels like Valentine's Day—filled with love, tenderness, and endless 
                    reasons to be grateful.
                  </p>

                  <p>
                    Thank you for being you, for your kindness, your strength, and the incredible 
                    way you make everything better just by being there. You are my heart's greatest 
                    treasure, and I am so lucky to call you mine.
                  </p>

                  <p className="text-center italic text-rose-700 dark:text-rose-300 pt-4">
                    I love you more than words could ever express.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* Closing Section */}
        <SectionShell className="py-20 md:py-32">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <img 
                src="/assets/generated/heart-wreath.dim_800x800.png" 
                alt="" 
                className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-80 mx-auto"
                width={128}
                height={128}
              />
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-rose-900 dark:text-rose-100">
                Forever Yours
              </h3>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
              </div>
            </div>

            <div className="pt-8 space-y-3">
              <p className="text-lg md:text-xl text-rose-700 dark:text-rose-300 font-light italic">
                Happy Valentine's Day, {RECIPIENT_NAME}
              </p>
              <p className="text-base text-rose-600 dark:text-rose-400">
                February 14, 2026
              </p>
            </div>
          </div>
        </SectionShell>

        {/* Footer */}
        <footer className="relative z-10 py-8 text-center">
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
    </div>
  );
}
