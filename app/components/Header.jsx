
'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const flags = [
  '/flags/usa.jpg',
  '/flags/uk.jpg',
  '/flags/australia.jpg',
  '/flags/eu.jpg',
  '/flags/nz.jpg',
  '/flags/canada.jpg',
  '/flags/japan.jpg',
  '/flags/south-korea.jpg',
];

export default function ScrollMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [scrollDir, setScrollDir] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollDir(currentY > lastScrollY ? 1 : -1);
      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let offset = 0;

    const animate = () => {
      if (!paused) {
        offset -= scrollDir * 0.5;

        // Infinite scroll reset
        if (Math.abs(offset) >= marquee.scrollWidth / 2) {
          offset = 0;
        }

        marquee.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [scrollDir, paused]);

  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div
        className="bg-white shadow-lg rounded-xl px-6 py-4 w-full max-w-7xl overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={marqueeRef}
          className="flex items-center w-max gap-6 transition-transform duration-300"
        >
          {/* Duplicate flags for looping */}
          {[...flags, ...flags].map((src, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Flag ${index}`}
                width={100}
                height={70}
                className="object-contain w-20 sm:w-24 md:w-28 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
