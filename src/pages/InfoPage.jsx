import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGrid from '../components/BackgroundGrid';
import { FaAward, FaHandshake, FaGem, FaChartLine } from 'react-icons/fa';
import '../components/BackgroundGrid.css';
import './InfoPage.css';

const InfoPage = () => {
    return (
        <div className="info-page-container">
            <BackgroundGrid />
            <Navbar />

            <main className="info-content">
                {/* Hero / Intro */}
                <div className="info-hero">
                    <h1 className="info-title">
                        Legacy of <br />
                        Excellence & Trust
                    </h1>
                    <p className="info-subtitle">
                        For over two decades, SbrEstates has defined the standard for ultra-luxury living.
                        We don't just sell properties; we curate lifestyles for the world's most discerning individuals.
                    </p>
                </div>

                {/* Trust & History Section */}
                <section className="trust-section">
                    <div className="trust-content">
                        <span className="year-badge">20+ Years of Mastery</span>
                        <h2 className="section-title">Built on Unshakeable Trust</h2>
                        <p className="trust-text">
                            Since our inception, trustworthiness has been the cornerstone of our identity.
                            We have navigated the complexities of the real estate market with integrity,
                            ensuring that every transaction is transparent and every client is treated like family.
                            Our reputation is not just built on what we sell, but on how we serve.
                        </p>
                        <p className="trust-text">
                            With thousands of successful handovers and a portfolio worth billions,
                            SbrEstates remains the most trusted name in premium real estate.
                            We honor your trust with unwavering dedication to perfection.
                        </p>
                    </div>


                </section>

                {/* Features Grid */}
                <section className="features-grid">
                    <div className="feature-item">
                        <FaGem className="feature-icon" />
                        <h3 className="feature-title">Premium Quality</h3>
                        <p className="feature-desc">
                            We meticulously select only the finest properties that meet our rigorous standards
                            for architecture, design, and location.
                        </p>
                    </div>
                    <div className="feature-item">
                        <FaHandshake className="feature-icon" />
                        <h3 className="feature-title">Client-Centric</h3>
                        <p className="feature-desc">
                            Your vision is our command. Our bespoke service model ensures that your
                            aspirations are met with personalized precision.
                        </p>
                    </div>
                    <div className="feature-item">
                        <FaAward className="feature-icon" />
                        <h3 className="feature-title">Award Winning</h3>
                        <p className="feature-desc">
                            Recognized globally for our excellence in service, innovation, and
                            integrity in the luxury real estate sector.
                        </p>
                    </div>
                </section>


                </section>
            </main>

            <Footer />
        </div >
    );
};

export default InfoPage;
