import React from "react";
import { motion } from "framer-motion";
import "./Customer.css";

const Customer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="customer-container"
    >
      <div className="content-section">
        <div className="content">
          <h2>Who We Are</h2>
          <p><strong>Innovating the Future of Workplace Management</strong></p>
          <p>
            At EInfratech Systems, we specialize in delivering intelligent, scalable, and secure workplace management solutions.
            Our mission is to streamline operations, enhance efficiency, and drive digital transformation across industries.
          </p>
          <ul>
            <li><strong>Seamless Integration</strong> – Unified platforms for optimized workflows.</li>
            <li><strong>Data-Driven Insights</strong> – Smart analytics for informed decision-making.</li>
            <li><strong>Advanced Technology</strong> – AI-powered solutions for modern enterprises.</li>
          </ul>
          <a href="#" className="read-more">Read More</a>
        </div>

        
        <div className="grid-images">
          {/* <motion.img src="/images/about-company-1.jpg" alt="Workplace 1" whileHover={{ scale: 1.1 }} />
          <motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} />
          <motion.img src="/images/about-company-3.jpg" alt="Workplace 3" whileHover={{ scale: 1.1 }} /> */}

          <div className="parent">
            <div className="div1"><motion.img src="/images/about-company-1.jpg" alt="Workplace 1" whileHover={{ scale: 1.1 }} /></div>
            <div className="div2"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
            <div className="div3"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
            <div className="div4"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
            <div className="div5"><motion.img src="/images/about-company-2.jpg" alt="Workplace 2" whileHover={{ scale: 1.1 }} /></div>
          </div>

        </div>
      </div>

      <div className="partners-section">
        <h3>Our Trusted Partners</h3>
        <motion.div
          className="partners-logos"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img src="images/client-1.png" alt="Partner 1" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-2.png" alt="Partner 2" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-3.png" alt="Partner 3" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-4.png" alt="Partner 4" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-5.png" alt="Partner 5" whileHover={{ scale: 1.1 }} />
          <motion.img src="images/client-6.png" alt="Partner 5" whileHover={{ scale: 1.1 }} />

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Customer;
