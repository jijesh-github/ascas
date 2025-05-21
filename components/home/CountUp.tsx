'use client';
import { useEffect, useRef, useState } from 'react';

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  delay?: number; // delay before restart
};

const CountUp = ({ end, duration = 2, suffix = '', delay = 5 }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const animate = () => {
    const startTime = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        // Restart after delay
        timeoutRef.current = setTimeout(() => {
          setCount(0);
          animate();
        }, delay * 1000);
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    animate();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [end, duration, delay]);

  return <span>{count.toLocaleString() + suffix}</span>;
};

export default CountUp;
