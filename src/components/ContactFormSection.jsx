import React, { useState } from 'react';
import './ContactFormSection.css';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interestedIn: 'Buying',
        occupation: 'Salaried',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${config.API_URL}/api/leads`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you for your interest! We will contact you shortly.');
                setFormData({ name: '', email: '', phone: '', occupation: 'Businessman', interestedIn: 'General Inquiry' });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Server error. Please try again.');
        }
    };

    return (
        <section className="contact-form-section">
            <div className="container contact-container">
                <div className="contact-content">
                    <h2 className="contact-title">Apply for Membership</h2>
                    <p className="contact-subtitle">
                        Join an exclusive community of visionaries.
                        Begin your journey to exceptional living.
                    </p>

                    <form className="contact-form glass-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="occupation">Occupation</label>
                            <div className="select-wrapper">
                                <select
                                    id="occupation"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChange}
                                >
                                    <option value="Businessman">Businessman</option>
                                    <option value="Freelancer">Freelancer</option>
                                    <option value="Working Professional">Working Professional</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="interestedIn">Interested In</label>
                            <div className="select-wrapper">
                                <select
                                    id="interestedIn"
                                    name="interestedIn"
                                    value={formData.interestedIn}
                                    onChange={handleChange}
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Ethereal Heights">Ethereal Heights</option>
                                    <option value="Azure Paradise">Azure Paradise</option>
                                    <option value="Urban Sanctuary">Urban Sanctuary</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn">
                            Get Access
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;
