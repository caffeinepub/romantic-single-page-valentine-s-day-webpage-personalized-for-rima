import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useAvoidingButtonPosition } from '../../hooks/useAvoidingButtonPosition';

interface PlayfulNoButtonProps {
  onCatch: () => void;
}

export default function PlayfulNoButton({ onCatch }: PlayfulNoButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [attempts, setAttempts] = useState(0);
  const { position, moveButton } = useAvoidingButtonPosition();

  // Handle mouse enter (desktop)
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      moveButton(rect);
      setAttempts(prev => prev + 1);
    }
  };

  // Handle touch start (mobile)
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      moveButton(rect);
      setAttempts(prev => prev + 1);
    }
  };

  // After many attempts, allow clicking
  const handleClick = () => {
    if (attempts >= 5) {
      onCatch();
    }
  };

  // Get button text based on attempts
  const getButtonText = () => {
    if (attempts === 0) return 'No';
    if (attempts < 3) return 'No! 😊';
    if (attempts < 5) return 'Maybe? 🤔';
    return 'Fine... 😅';
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleTouchStart}
      size="lg"
      variant="outline"
      className="text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 h-auto border-2 border-rose-400 text-rose-700 hover:bg-rose-50 font-serif font-semibold rounded-2xl transition-all duration-200 dark:border-rose-600 dark:text-rose-300 dark:hover:bg-rose-950/50"
      style={{
        position: attempts > 0 ? 'fixed' : 'relative',
        left: attempts > 0 ? `${position.x}px` : 'auto',
        top: attempts > 0 ? `${position.y}px` : 'auto',
        transform: attempts > 0 ? 'translate(-50%, -50%)' : 'none',
        zIndex: 20,
      }}
    >
      {getButtonText()}
    </Button>
  );
}
