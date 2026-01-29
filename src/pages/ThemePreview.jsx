import React from 'react';
import MeteorBackground from '../components/MeteorBackground';
import GlassCard from '../components/ui/GlassCard';

const ThemePreview = () => {
    return (
        <div style={{ padding: '40px', minHeight: '100vh', position: 'relative' }}>
            <MeteorBackground />

            <div style={{ position: 'relative', zIndex: 10, maxWidth: '1000px', margin: '0 auto' }}>
                <h1 className="text-gradient" style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px' }}>
                    Theme Preview
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '40px' }}>
                    A showcase of the new futuristic, glassmorphic UI system.
                </p>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', color: 'var(--primary)' }}>Glass Cards</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        <GlassCard className="glass-card" style={{ padding: '30px' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Card Variant A</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Standard glass card with subtle gradient border and hover effects.
                            </p>
                        </GlassCard>

                        <GlassCard className="glass-card" style={{ padding: '30px' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', marginBottom: '15px' }}></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Card Variant B</h3>
                            <p style={{ color: 'var(--text-muted)' }}>
                                Showcasing accent colors and depth.
                            </p>
                        </GlassCard>
                    </div>
                </section>

                <section style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', color: 'var(--secondary)' }}>Typography & Buttons</h2>
                    <GlassCard className="glass-card" style={{ padding: '40px' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Heading 1</h1>
                        <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Heading 2</h2>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>Heading 3</h3>
                        <p style={{ lineHeight: '1.7', marginBottom: '20px', color: 'var(--text-muted)' }}>
                            Body text showing the readability against the glass background. The font is Inter, clean and modern.
                        </p>

                        <div style={{ display: 'flex', gap: '15px' }}>
                            <button className="vote-btn agree">Primary Action</button>
                            <button className="vote-btn disagree">Secondary Action</button>
                        </div>
                    </GlassCard>
                </section>
            </div>
        </div>
    );
};

export default ThemePreview;
