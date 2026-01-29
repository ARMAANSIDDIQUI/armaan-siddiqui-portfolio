import React, { useEffect, useRef } from 'react';

const MeteorBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const STAR_COUNT = 30; // Fewer, higher quality meteors
        const LAYERS = [
            { speed: 0.2, scale: 0.5, color: 'rgba(56, 189, 248, 0.2)' }, // Background (faint, slow)
            { speed: 0.5, scale: 0.8, color: 'rgba(0, 119, 255, 0.4)' }, // Midground
            { speed: 1.2, scale: 1.0, color: 'rgba(224, 242, 254, 0.9)' }  // Foreground (bright, fast)
        ];

        let meteors = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initMeteors();
        };

        class Meteor {
            constructor() {
                this.reset(true);
            }

            reset(initial = false) {
                // Random layer
                const layerIdx = Math.floor(Math.random() * LAYERS.length);
                this.layer = LAYERS[layerIdx];

                // Spawn position (top or left side)
                if (initial) {
                    this.x = Math.random() * canvas.width;
                    this.y = Math.random() * canvas.height;
                } else {
                    // Spawn well above/left to drift in
                    const spread = Math.random();
                    if (spread > 0.5) {
                        this.x = Math.random() * canvas.width * 1.5 - canvas.width * 0.2;
                        this.y = -100;
                    } else {
                        this.x = canvas.width + 100;
                        this.y = Math.random() * canvas.height;
                    }
                }

                this.len = Math.random() * 200 + 100; // Tail length
                this.width = Math.random() * 0.5 + 0.1; // Thickness relative to scale not really used yet
                this.speed = (Math.random() * 2 + 1) * this.layer.speed;
                this.angle = Math.PI / 4; // 45 degrees
            }

            update() {
                this.x -= this.speed; // Move left
                this.y += this.speed; // Move down

                // Reset if out of bounds
                if (this.y > canvas.height + 100 || this.x < -200) {
                    this.reset();
                }
            }

            draw(ctx) {
                ctx.beginPath();
                // Tail fade out
                const gradient = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y - this.len);
                gradient.addColorStop(0, this.layer.color);
                gradient.addColorStop(1, 'transparent');

                ctx.strokeStyle = gradient;
                ctx.lineWidth = this.layer.scale * 1.5;
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.len, this.y - this.len);
                ctx.stroke();

                // Head glow
                ctx.beginPath();
                ctx.fillStyle = this.layer.color;
                ctx.arc(this.x, this.y, this.layer.scale, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initMeteors = () => {
            meteors = [];
            for (let i = 0; i < STAR_COUNT; i++) {
                meteors.push(new Meteor());
            }
        };

        const render = () => {
            // Clear with trail effect for smoothness? No, clean clear for crisp lines.
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            meteors.forEach(meteor => {
                meteor.update();
                meteor.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="meteor-bg-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                background: 'var(--bg-dark)' // Deep navy base
            }}
        />
    );
};

export default MeteorBackground;
