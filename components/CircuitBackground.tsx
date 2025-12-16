import React, { useEffect, useRef } from 'react';

const CircuitBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Circuit Lines State
        const lines: { x: number; y: number; length: number; speed: number; vertical: boolean; color: string }[] = [];
        const maxLines = 50;

        const resetLine = (line: any) => {
            line.vertical = Math.random() > 0.5;
            if (line.vertical) {
                line.x = Math.floor(Math.random() * width / 20) * 20; // Snap to grid
                line.y = -Math.random() * height;
                line.length = 50 + Math.random() * 150;
                line.speed = 2 + Math.random() * 4;
            } else {
                line.x = -Math.random() * width;
                line.y = Math.floor(Math.random() * height / 20) * 20;
                line.length = 50 + Math.random() * 150;
                line.speed = 2 + Math.random() * 4;
            }
            line.color = Math.random() > 0.8 ? 'rgba(249, 115, 22, 0.4)' : 'rgba(220, 38, 38, 0.4)'; // Orange or Red with opacity
        };

        // Init Lines
        for (let i = 0; i < maxLines; i++) {
            const line = { x: 0, y: 0, length: 0, speed: 0, vertical: false, color: '' };
            resetLine(line);
            // Randomize start pos to be onscreen
            if (line.vertical) line.y = Math.random() * height;
            else line.x = Math.random() * width;
            lines.push(line);
        }

        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(255, 100, 0, 0.05)'; // Fainter Orange grid
            ctx.lineWidth = 1;
            ctx.beginPath();
            for (let x = 0; x <= width; x += 40) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y <= height; y += 40) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();
        };

        const animate = () => {
            ctx.fillStyle = '#050201'; // Very Dark Orange/Black Background
            ctx.fillRect(0, 0, width, height);

            drawGrid();

            // Draw Lines
            lines.forEach(line => {
                ctx.beginPath();
                ctx.strokeStyle = line.color;
                ctx.lineWidth = 2;
                ctx.shadowBlur = 10;
                ctx.shadowColor = line.color;

                if (line.vertical) {
                    ctx.moveTo(line.x, line.y);
                    ctx.lineTo(line.x, line.y + line.length);
                    line.y += line.speed;
                    if (line.y > height) resetLine(line);
                } else {
                    ctx.moveTo(line.x, line.y);
                    ctx.lineTo(line.x + line.length, line.y);
                    line.x += line.speed;
                    if (line.x > width) resetLine(line);
                }
                ctx.stroke();
                ctx.shadowBlur = 0; // Reset shadow for next frame performance
            });

            requestAnimationFrame(animate);
        };

        const animId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 z-0 bg-slate-950 pointer-events-none" />;
};

export default CircuitBackground;
