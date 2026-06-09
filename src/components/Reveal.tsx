import { useEffect, useRef, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  variant?: 'slide-up' | 'fade';
}

export function Reveal({ children, delay = 0, variant = 'slide-up' }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const visibleClass =
    variant === 'fade'
      ? isVisible ? 'opacity-100' : 'opacity-0'
      : isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visibleClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
