import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Education.css';

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
      <section className="page-title1 text-center">
        <div className="container ">
          <h1 data-aos="fade-down">Connected Workplace for Education</h1>
          <p data-aos="fade-up" className="lead">
            Keep Your Campus Running Smoothly.
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
      <section className="service-details py-6" style={{ paddingleft: "20px", paddingRight:"20px"}} >
        {/* <div className="container">
          <div className="row"> */}
        <div className="col-lg-8" style={{ width: "98%"}}>
          <div className="service-section" data-aos="fade-up">
            <h3 className="h4 mb-4">
              <i className="bi bi-mortarboard"></i> Education Support Team Structure
            </h3>
            <div className="row justify-content-between align-items-center border w-[90vw] rounded-2xl ">
              <div className="col-lg-5 image-container">
                <img
                  src="./images/education1.jpg"
                  alt="education1"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-7 text-container">
                <p id="eduMaintxt">
                  Collaboration across support teams means focusing on what matters –{' '}
                  <strong>Support Team</strong>.
                </p>
                <ul className="info-list list-unstyled">
                  <li>
                    <i id="eduMaintxt" className="bi bi-gear me-2"></i> Education Operations & Maintenance
                  </li>
                 <li>
                  <i id="eduBuildtxt" className="bi bi-bank me-2"></i> Educational Infrastructure & Campus Planning
                 </li>

                  <li>
                  <i id="eduSpaceTxt" className="bi bi-diagram-3 me-2"></i> Space Management
                  </li>

                  <li>
                 <i id="eduSustainTxt" className="bi bi-tree me-2"></i> Sustainability Initiatives
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* </div>
        </div> */}
      </section>

      {/* Explore Educational Solutions */}
      <section className="explore-solutions py-5">
        <div className="container text-center">
          <h2 id="eduMaintxt" className="h3 mb-3" data-aos="fade-up">
            Explore Education Solutions
          </h2>
          <p id="eduMaintxt" className="mb-5" data-aos="fade-up">
            Discover our specialized solutions for Campus Services, and More
          </p>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card h-100">
                <img
                  src="./images/education2.jpg"
                  alt="education2"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 id="eduMaintxt" className="card-title">Extend Building and Asset Life </h5>
                  <p id="eduMaintxt" className="card-text">Efficiently track and manage educational assets.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100">
                <img
                  src="./images/education3.jpg"
                  alt="education3"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 id="eduMaintxt" className="card-title">Make Empowered Space Decisions</h5>
                  <p id="eduMaintxt" className="card-text">Automate maintenance schedules for efficiency.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100">
                <img
                  src="./images/education4.jpg"
                  alt="education4"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 id="eduMaintxt" className="card-title">Proactively Plan For Capital Projects</h5>
                  <p id="eduMaintxt" className="card-text">Protect systems from cyber threats.</p>
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