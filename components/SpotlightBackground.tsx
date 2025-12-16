import React, { useEffect, useRef, useState } from 'react';

const SpotlightBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;

        const div = containerRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-full -z-10 bg-background overflow-hidden">
            {/* Base Grid */}
            <div className="absolute inset-0 bg-grid stroke-white/5 opacity-20"></div>

            {/* Radial Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

            {/* Mouse Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(234, 88, 12, 0.15), transparent 40%)`, // Orange spotlight
                }}
            />

            {/* Decorative colored blobs for ambient light */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>
    );
};

export default SpotlightBackground;
