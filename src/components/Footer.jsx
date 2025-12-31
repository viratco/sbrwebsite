import { FaEnvelope, FaPhone, FaChevronRight } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer_bg.png';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className="footer-content">
                {/* Column 1: Brand */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src={logo} alt="SbrEstates" />
                        <span className="logo-text">SbrEstates</span>
                    </div>
                    <p className="footer-desc">
                        When choosing a rental home with us, rest assured that every property is carefully vetted for quality and comfort.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon"><FaEnvelope /></div>
                            <div className="contact-text">
                                <p>example@yoursite.com</p>
                                <p>services@yoursite.com</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><FaPhone /></div>
                            <div className="contact-text">
                                <p>+88 55344 - 251122</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Company */}
                <div className="footer-col links-col">
                    <h3>Company</h3>
                    <ul className="footer-links">
                        <li><a href="#"><FaChevronRight /> Careers</a></li>
                        <li><a href="#"><FaChevronRight /> Pricing Plans</a></li>
                        <li><a href="#"><FaChevronRight /> Marketing</a></li>
                        <li><a href="#"><FaChevronRight /> Design services</a></li>
                        <li><a href="#"><FaChevronRight /> Faqs</a></li>
                    </ul>
                </div>

                {/* Column 3: Other Links */}
                <div className="footer-col links-col">
                    <h3>Other Links</h3>
                    <ul className="footer-links">
                        <li><a href="#"><FaChevronRight /> Blog</a></li>
                        <li><a href="#"><FaChevronRight /> About</a></li>
                        <li><a href="#"><FaChevronRight /> Our Consultants</a></li>
                        <li><a href="#"><FaChevronRight /> Real Estate</a></li>
                        <li><a href="#"><FaChevronRight /> Contact Us</a></li>
                    </ul>
                </div>

                {/* Column 4: Our Services */}
                <div className="footer-col links-col">
                    <h3>Our Services</h3>
                    <ul className="footer-links">
                        <li><a href="#"><FaChevronRight /> Apartment for Rent</a></li>
                        <li><a href="#"><FaChevronRight /> Apartment Low to Hide</a></li>
                        <li><a href="#"><FaChevronRight /> Offices for Buy</a></li>
                        <li><a href="#"><FaChevronRight /> Office for Rent</a></li>
                        <li><a href="#"><FaChevronRight /> Faqs</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="copyright">
                    Copyright: © 2025 by SbrEstates. All Rights Reserved.
                </div>
                <div className="bottom-links">
                    <a href="#">Listing</a>
                    <a href="#">Real Estate</a>
                    <a href="#">Our Consultants</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
