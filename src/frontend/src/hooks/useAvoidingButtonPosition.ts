import { useState, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useAvoidingButtonPosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const moveButton = useCallback((currentRect: DOMRect) => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Button dimensions (approximate)
    const buttonWidth = 200;
    const buttonHeight = 80;

    // Safe margins from edges
    const margin = 50;

    // Calculate safe bounds
    const minX = margin + buttonWidth / 2;
    const maxX = viewportWidth - margin - buttonWidth / 2;
    const minY = margin + buttonHeight / 2;
    const maxY = viewportHeight - margin - buttonHeight / 2;

    // Current button center
    const currentX = currentRect.left + currentRect.width / 2;
    const currentY = currentRect.top + currentRect.height / 2;

    // Generate new position away from current position
    let newX: number;
    let newY: number;
    let attempts = 0;
    const maxAttempts = 10;

    do {
      // Random position within safe bounds
      newX = Math.random() * (maxX - minX) + minX;
      newY = Math.random() * (maxY - minY) + minY;

      // Calculate distance from current position
      const distance = Math.sqrt(
        Math.pow(newX - currentX, 2) + Math.pow(newY - currentY, 2)
      );

      // Ensure minimum distance from current position
      if (distance > 200 || attempts >= maxAttempts) {
        break;
      }

      attempts++;
    } while (attempts < maxAttempts);

    setPosition({ x: newX, y: newY });
  }, []);

  return { position, moveButton };
}
