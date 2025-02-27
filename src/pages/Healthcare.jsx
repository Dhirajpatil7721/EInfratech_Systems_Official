import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HealthCare.css';

function HelthCare() {
  useEffect(() => {
    const loadCSS = (href, integrity, crossOrigin) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      if (integrity) link.integrity = integrity;
      if (crossOrigin) link.crossOrigin = crossOrigin;
      document.head.appendChild(link);
      return link;
    };

    const loadScript = (src, integrity, crossOrigin) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      if (integrity) script.integrity = integrity;
      if (crossOrigin) script.crossOrigin = crossOrigin;
      document.head.appendChild(script);
      return script;
    };

    const googleFontsPreconnect1 = loadCSS('https://fonts.googleapis.com', '', '');
    const googleFontsPreconnect2 = loadCSS('https://fonts.gstatic.com', '', 'anonymous');
    const googleFonts = loadCSS(
      'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap'
    );

    const bootstrapCSS = loadCSS(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
      'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH',
      'anonymous'
    );

    const bootstrapIconsCSS = loadCSS(
      'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css'
    );

    const aosCSS = loadCSS('https://unpkg.com/aos@2.3.1/dist/aos.css');

    const bootstrapJS = loadScript(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      'sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz',
      'anonymous'
    );

    const aosJS = loadScript('https://unpkg.com/aos@2.3.1/dist/aos.js');
    aosJS.onload = () => {
      window.AOS.init({
        duration: 800,
        once: true,
      });
    };

    return () => {
      document.head.removeChild(googleFontsPreconnect1);
      document.head.removeChild(googleFontsPreconnect2);
      document.head.removeChild(googleFonts);
      document.head.removeChild(bootstrapCSS);
      document.head.removeChild(bootstrapIconsCSS);
      document.head.removeChild(aosCSS);
      document.head.removeChild(bootstrapJS);
      document.head.removeChild(aosJS);
    };
  }, []);

  return (
    <div className="service-details-page">
      {/* Page Title */}
      <section className="page-title text-center">
        <div className="container ">
          <h1 data-aos="fade-down">Connected Workplace for Healthcare</h1>
          <p data-aos="fade-up" className="lead">
            Unite support teams and optimize operations for better patient care.
          </p>
          <a
            href="/shedule"
            className="btn btn-primary mt-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Schedule a Demo
          </a>
        </div>
      </section>

      {/* Service Details */}
      <section className="service-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-section" data-aos="fade-up">
                <h3 className="h4 mb-4">
                  <i className="bi bi-hospital me-2"></i> Unite Support Teams
                </h3>
                <div className="row justify-content-between align-items-center border w-[90vw] rounded-2xl ">
                  <div className="col-lg-5 image-container">
                    <img
                      src="https://img.freepik.com/free-photo/medical-banner-with-doctor-patient_23-2149611238.jpg?semt=ais_hybrid"
                      alt="Healthcare Support"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-lg-5 text-container">
                    <p>
                      Collaboration across support teams means focusing on what matters –{' '}
                      <strong>patient care</strong>.
                    </p>
                    <ul className="info-list list-unstyled">
                      <li>
                        <i className="bi bi-tools me-2"></i> Clinical Equipment & Facilities Management
                      </li>
                      <li>
                        <i className="bi bi-building me-2"></i> Real Estate & Space Planning
                      </li>
                      <li>
                        <i className="bi bi-diagram-3 me-2"></i> Capital Planning & Projects
                      </li>
                      <li>
                        <i className="bi bi-shield-lock me-2"></i> OT Cybersecurity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Healthcare Solutions */}
      <section className="explore-solutions py-5">
        <div className="container text-center">
          <h2 className="h3 mb-3" data-aos="fade-up">
            Explore Healthcare Solutions
          </h2>
          <p className="mb-5" data-aos="fade-up">
            Discover our specialized solutions for healthcare IT management.
          </p>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                  alt="HTM Management"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">HTM Asset Management</h5>
                  <p className="card-text">Efficiently track and manage hospital assets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100">
                <img
                  src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=600"
                  alt="Facilities Maintenance"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Facilities Maintenance</h5>
                  <p className="card-text">Automate maintenance schedules for efficiency.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100">
                <img
                  src="https://cyolo.io/img/asset/YXNzZXRzL2hlYWx0aGNhcmUtb3JnYW5pemF0aW9ucy1uZWVkLXRvLXByaW9yaXRpemUtb3Qtc2VjdXJpdHkuanBn/healthcare-organizations-need-to-prioritize-ot-security.jpg?fm=webp&fit=crop&w=1600&s=048c7d2c0af0e46cfac920634468691e"
                  alt="OT Security"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">OT Security</h5>
                  <p className="card-text">Protect hospital OT systems from cyber threats.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelthCare;