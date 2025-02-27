import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";


function Footer() {
  return (
    <footer id="footer" className="footer position-relative bg-light py-5">
      <style>
        {`
          .social-links a:hover {
            color: #388da8 !important;
            border-color: #388da8 !important;
          }
          
          .footer-links a:hover {
            color: #388da8 !important;
          }
          
          .credits a:hover {
            color: #388da8 !important;
          }
        `}
      </style>

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <a
              href="index.html"
              className="d-flex align-items-center text-decoration-none mb-3"
            >
              <span className="h3 mb-0" style={{ color: "#3D4348" }}>
                Einfratech
              </span>
            </a>
            <div className="pt-3">
              <p className="mb-1">Millennium Business Park</p>
              <p className="mb-1">
                IT Park, MIDC Industrial Area, Navi Mumbai, Maharashtra 400710
              </p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+91 892.904.2908</span>
              </p>
              <p>
  <strong>Email:</strong> <a href="mailto:contact@einfratechsys.com">contact@einfratechsys.com</a>
</p>
            </div>
            <div className="d-flex gap-3 mt-4 social-links">
              <a href="#" style={{ color: "#3D4348", border: "1px solid black", padding: "7px 11px", borderRadius: "20px" }}>
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" style={{ color: "#3D4348", border: "1px solid black", padding: "7px 11px", borderRadius: "20px" }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" style={{ color: "#3D4348", border: "1px solid black", padding: "7px 11px", borderRadius: "20px" }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" style={{ color: "#3D4348", border: "1px solid black", padding: "7px 11px", borderRadius: "20px" }}>
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3">
            <h4 className="mb-3" style={{ color: "#3D4348" }}>
              Useful Links
            </h4>
            <ul className="list-unstyled footer-links">
              <li>
                <Link to="/dashboard" className="text-decoration-none d-block mb-2" style={{ color: "#3D4348" }}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="text-decoration-none d-block mb-2" style={{ color: "#3D4348" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-decoration-none d-block mb-2" style={{ color: "#3D4348" }}>
                  Features
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-decoration-none d-block mb-2" style={{ color: "#3D4348" }}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-decoration-none d-block mb-2" style={{ color: "#3D4348" }}>
                  FAQ'S
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3">
            <h4 className="mb-3" style={{ color: "#3D4348" }}>
              Our Services
            </h4>
            <ul className="list-unstyled footer-links">
              <li>
                <a
                  href="#"
                  className="text-decoration-none d-block mb-2"
                  style={{ color: "#3D4348" }}
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none d-block mb-2"
                  style={{ color: "#3D4348" }}
                >
                  IT Consulting
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none d-block mb-2"
                  style={{ color: "#3D4348" }}
                >
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none d-block mb-2"
                  style={{ color: "#3D4348" }}
                >
                  Cybersecurity
                </a>
              </li>
              <li>
                <a
                  href="privacy-policy.html"
                  target="_blank"
                  className="text-decoration-none d-block mb-2"
                  style={{ color: "#3D4348" }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12">
            <h4 className="mb-3" style={{ color: "#3D4348" }}>
              Subscribe to Our Newsletter
            </h4>
            <p>
              Stay updated with the latest tech trends, insights, and
              EInfratech s innovations.
            </p>
            <form
              action="forms/newsletter.php"
              method="post"
              className="d-flex gap-2"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-control"
                required
                style={{
                  borderColor: "#388da8"
                }}
              />
              <input
                type="submit"
                value="Subscribe"
                className="btn"
                style={{
                  backgroundColor: "#388DA8",
                  height: "50px",
                  border: "none",
                  borderRadius: "13px",
                  textAlign: "center",
                  fontSize: "1rem"
                }}
              />
            </form>
            <div className="d-none loading">Loading</div>
            <div className="d-none error-message"></div>
            <div
              className="d-none sent-message mt-2"
              style={{ color: "#3D4348" }}
            >
              Your subscription request has been sent. Thank you!
            </div>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-top">
          <p className="mb-1" style={{ color: "#3D4348" }}>
            © <span>Copyright</span>
            <strong className="px-1">EInfratech Systems</strong>
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by{" "}
            <a href="https://einfratechsys.com/" style={{ color: "#3D4348" }}>
              EInfratech Systems
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;