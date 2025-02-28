import React from 'react';
import './Contactus.css'; // Make sure to create this CSS file

const Contactus = () => {
    return (
        <div>
            <section id="contact" className="contact section mt-5">
                {/* Section Title */}
                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact Us </h2>
                    <p>
                     "Let s connect! Get in touch for Support or Collaboration."
                    </p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div
                                className="info-item d-flex flex-column justify-content-center align-items-center"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <i className="bi bi-geo-alt"></i>
                                <h3>Address</h3>
                                <p>
                                    IT Park, MBP Rd, Millenium Business Park, MIDC Industrial Area,
                                    Sector 1, Kopar Khairane, Navi Mumbai, Maharashtra 400710
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div
                                className="info-item d-flex flex-column justify-content-center align-items-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <i className="bi bi-telephone"></i>
                                <h3>Call Us</h3>
                                <p>+91 892.904.2908</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div
                                className="info-item d-flex flex-column justify-content-center align-items-center"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <i className="bi bi-envelope"></i>
                                <h3>Email Us</h3>
                                <p>einfratech@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4 mt-1">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.813893652865!2d73.0269571!3d19.1180869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b906f5dfedc3%3A0x8e9d57d06e6e00fa!2sMillennium%20Business%20Park%2C%20Mahape%2C%20Navi%20Mumbai%2C%20Maharashtra%20400710%2C%20India!5e0!3m2!1sen!2sin!4v1708691234567"
                                frameBorder="0"
                                style={{ border: 0, width: '100%', height: '490px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>

                        <div className="col-lg-6">
                            <form
                                action="forms/contact.php"
                                method="post"
                                className="php-email-form"
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your Email"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>

                                    <div className="col-md-12">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="6"
                                            placeholder="Message"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">
                                            Your message has been sent. Thank you!
                                        </div>
                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contactus;