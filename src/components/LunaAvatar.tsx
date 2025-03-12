
import React, { useEffect, useRef } from 'react';

const LunaAvatar: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const size = Math.min(400, window.innerWidth * 0.6);
      canvas.width = size;
      canvas.height = size;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Animation variables
    let animationFrame: number;
    
    // Draw the Luna avatar
    const drawLuna = (time: number) => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.45;
      
      // Subtle pulsing effect timing
      const pulseFactor = Math.sin(time * 0.001) * 0.05 + 0.95;
      
      // Draw glow
      const gradientGlow = ctx.createRadialGradient(
        centerX, centerY, radius * 0.8,
        centerX, centerY, radius * 1.5
      );
      gradientGlow.addColorStop(0, 'rgba(79, 180, 255, 0.3)');
      gradientGlow.addColorStop(1, 'rgba(79, 180, 255, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = gradientGlow;
      ctx.fill();
      
      // Draw main blue circle
      const gradient = ctx.createRadialGradient(
        centerX - radius * 0.2, centerY - radius * 0.2, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, '#7CCCFF');
      gradient.addColorStop(1, '#4FB4FF');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * pulseFactor, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Draw eyes
      const eyeRadius = radius * 0.12;
      const eyeOffsetX = radius * 0.22;
      
      // Left eye
      ctx.beginPath();
      ctx.ellipse(
        centerX - eyeOffsetX, 
        centerY - radius * 0.1, 
        eyeRadius * 0.5, 
        eyeRadius * 1.3, 
        0, 0, Math.PI * 2
      );
      ctx.fillStyle = 'white';
      ctx.fill();
      
      // Right eye
      ctx.beginPath();
      ctx.ellipse(
        centerX + eyeOffsetX, 
        centerY - radius * 0.1, 
        eyeRadius * 0.5, 
        eyeRadius * 1.3, 
        0, 0, Math.PI * 2
      );
      ctx.fillStyle = 'white';
      ctx.fill();
      
      // Continue animation
      animationFrame = requestAnimationFrame(drawLuna);
    };
    
    // Start animation
    animationFrame = requestAnimationFrame(drawLuna);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="relative flex items-center justify-center animate-float">
      <canvas 
        ref={canvasRef} 
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default LunaAvatar;
