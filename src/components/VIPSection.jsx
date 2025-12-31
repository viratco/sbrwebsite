
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './VIPSection.css';

const AnimatedCounter = ({ end, duration = 2.5 }) => {
    const countRef = useRef(null);
    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const counter = { val: 0 };
                    gsap.to(counter, {
                        val: end,
                        duration: duration,
                        ease: "power3.out", // Very smooth easing
                        onUpdate: () => {
                            if (countRef.current) {
                                countRef.current.textContent = Math.floor(counter.val);
                            }
                        }
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={countRef}>0</span>;
};

const VIPSection = () => {
    return (
        <section className="vip-section">
            <div className="vip-container">
                <div className="vip-content">
                    <h2 className="vip-title">
                        Fine The Most VIP Project<br />
                        Residence Near You Now!
                    </h2>

                    <div className="vip-stats-row">
                        <div className="vip-stat">
                            <span className="stat-number">
                                <AnimatedCounter end={90} />%
                            </span>
                            <span className="stat-desc">Resources 3+ years experienced.</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="vip-stat">
                            <span className="stat-number">
                                <AnimatedCounter end={85} />%
                            </span>
                            <span className="stat-desc">Customer loyalty percentage rate.</span>
                        </div>
                    </div>

                    <div className="vip-buttons">
                        <button className="btn-primary">
                            Add Property <span className="btn-icon">+</span>
                        </button>
                        <button className="btn-outlined">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path d="M11 7L1 13L1 1L11 7Z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Play Video
                        </button>
                    </div>
                </div>

                <div className="vip-visual">
                    <div className="map-container">
                        <img
                            src="/src/assets/black_aesthetic_map.png"
                            alt="Location Map"
                            className="map-image"
                        />

                        {/* SVG Path Overlay */}
                        <svg className="map-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <path
                                d="M80 30 L65 45 L50 40 L40 65 L20 60"
                                stroke="#ff6b35"
                                strokeWidth="1.5"
                                fill="none"
                                filter="url(#glow)"
                                className="path-main"
                            />

                            <g transform="translate(80, 30)">
                                <circle cx="0" cy="0" r="4" fill="#ff6b35" opacity="0.4" />
                                <circle cx="0" cy="0" r="2" fill="#ff6b35" />
                            </g>
                            <g transform="translate(50, 40)">
                                <circle cx="0" cy="0" r="2" fill="#ff6b35" />
                            </g>
                            <g transform="translate(20, 60)">
                                <circle cx="0" cy="0" r="6" fill="#ff6b35" />
                                <path d="M-3 0 L0 3 L3 0 L0 -3 Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VIPSection;
