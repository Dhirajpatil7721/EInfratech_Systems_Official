import React from 'react';
import Hero from '../components/Hero';
import { FaBuilding, FaLock, FaRocket, FaUsers, FaServer, FaClipboardCheck, FaHeadset } from "react-icons/fa";
import './Dashboard.css';
import { motion } from 'framer-motion';

const Dashboard = () => {
    return (
        <div>
            <Hero />
            <div className="dashboard-container">
                <div className="dashboard-card">
                    <FaBuilding className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Smart Workplace Solutions</h3>
                        <p>Enhance efficiency with automated facility operations and seamless data sharing.</p>
                    </div>
                </div>
                <div className="dashboard-card">
                    <FaLock className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Connected & Secure Systems</h3>
                        <p>Leverage integrated workplace management for real-time insights and better decision-making.</p>
                    </div>
                </div>
                <div className="dashboard-card">
                    <FaRocket className="dashboard-icon" />
                    <div className="dashboard-text">
                        <h3>Future-Ready Technology</h3>
                        <p>Ensure scalability, sustainability, and optimal performance across industries.</p>
                    </div>
                </div>
            </div>


            {/* Connected Workplace Section */}
            <div className="container my-5">
                <div className="row d-flex align-items-stretch">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6 d-flex align-items-center p-0"
                        style={{ minHeight: "100%" }} // Ensures it takes full height
                    >
                        <img
                            src="/images/cw.jpg"
                            alt="Connected Workplace"
                            className="img-fluid rounded shadow w-100 h-100"
                            style={{ objectFit: "cover", minHeight: "100%" }} // Ensures equal height
                        />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6 d-flex align-items-center p-0"
                        style={{ minHeight: "100%" }} // Ensures same height as image
                    >
                        <div className="content-container p-4 d-flex flex-column justify-content-center w-100 shadow rounded"
                            style={{ minHeight: "100%" }} // Forces full height
                        >
                            <h2 className="fw-bold text-info">Transforming Workplaces with Smart Connectivity</h2>
                            <p className="lead">
                                Unlock a new era of workplace efficiency with seamlessly integrated technology.
                                Our connected solutions ensure real-time data access, enhanced security, and
                                optimized workflows, creating an environment where innovation thrives.
                            </p>
                            <ul className="list-unstyled">
                                <li>✔ AI-driven automation for enhanced productivity</li>
                                <li>✔ End-to-end security with real-time monitoring</li>
                                <li>✔ Cloud-powered scalability for future-ready operations</li>
                                <li>✔ Seamless collaboration with intelligent connectivity</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* We've Got You Covered Section */}
            <div className="container my-5 p-4 rounded" style={{ backgroundColor: "rgba(211, 211, 211, 0.7)" }}>
                <div className="row align-items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6">   
                        <h2 className="fw-bold text-center display-4 text-primary">We've Got You Covered</h2>
                        <p className="lead text-center fs-4 ">We've worked with clients across industries to make their workplace experience better.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="col-md-6">
                        <div className="row text-center">
                            <div className="col-6 mb-3">
                                <FaUsers className="icon-large icon-animated" />
                                <p className="fs-3 " id="txtdash"><strong>1650+</strong> Clients Served</p>
                            </div>
                            <div className="col-6 mb-3">
                                <FaServer className="icon-xxl icon-animated" />
                                <p className="fs-3 " id="txtdash"><strong>15M+</strong> OT Assets Managed</p>
                            </div>
                            <div className="col-6">
                                <FaClipboardCheck className="icon-xl icon-animated" />
                                <p className="fs-3 " id="txtdash"><strong>30M+</strong> Work Orders per Month</p>
                            </div>
                            <div className="col-6">
                                <FaHeadset className="icon-xl icon-animated" />
                                <p className="fs-3 " id="txtdash"><strong>24x7</strong> Global Customer Care</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Additional Sections with Light Grey Background */}
            <div className="container my-5 py-5 bg-light rounded">
                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6">
                        <img src="/images/robust.png" alt="Facilities Maintenance" className="img-fluid rounded shadow" style={{ maxWidth: "55%", height: "auto" }} />
                    </div>
                    <div className="col-md-5">
                        <h2 className="fw-bold text-primary text-center" style={{ font: 'times' }}>Comprehensive Facilities Maintenance</h2>
                        <p className='text-center'>Ensure the longevity and optimal performance of your assets with our proactive facilities maintenance services.
                            We utilize advanced Integrated Workplace Management Systems (IWMS) to monitor and manage your facilities efficiently, minimizing downtime and reducing operational costs.
                            Our team is dedicated to maintaining a safe and productive environment for your organization.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6 order-md-2">
                        <img src="/public/images/robust.png" alt="Space Planning" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6 order-md-1 text-center">
                        <h2 className="fw-bold text-primary">Strategic Space Planning and Optimization</h2>
                        <p className='text-center'>
                            Maximize your workspace potential with our strategic space planning solutions.
                            By analyzing your current utilization and future needs, we design layouts that enhance collaboration and efficiency.
                            Our approach ensures that your real estate investments align with your organizational goals, providing a flexible and adaptive work environment.</p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6">
                        <img src="/images/image_2025_02_28T05_43_11_279Z.png" alt="OT Security" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6">
                        <h2 className="fw-bold text-primary text-center">Robust Operational Technology (OT) Security</h2>
                        <p className='text-center'>Protect your critical infrastructure with our comprehensive OT security services.
                            We implement advanced security measures, including next-generation firewalls and real-time monitoring, to safeguard your operational technology assets from cyber threats. Our solutions are designed to detect, prevent, and respond to potential vulnerabilities, ensuring the resilience of your industrial control systems.
                            FORTINET.COM</p>
                    </div>
                </div>

                <div className="row align-items-center mb-4 text-center">
                    <div className="col-md-6 order-md-2">
                        <img src="/public/images/image_2025_02_28T05_43_11_275Z.png" alt="Energy Management" className="img-fluid rounded shadow" style={{ maxWidth: "60%", height: "auto" }} />
                    </div>
                    <div className="col-md-6 order-md-1">
                        <h2 className="fw-bold text-primary text-center">Sustainable Energy Management Solutions</h2>
                        <p className='text-center'>Promote environmental responsibility with our sustainable energy management services.
                            We provide smart energy solutions that reduce consumption and operational costs, integrating eco-friendly practices into your daily operations. Our team assists in implementing renewable energy sources and optimizing energy usage, contributing to a greener and more sustainable future.</p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="/public/images/image_2025_02_28T05_43_11_280Z.png" alt="Field Service Management" className="img-fluid rounded shadow" style={{ maxWidth: "80%", height: "auto" }} />
                    </div>
                    <div className="col-md-5">
                        <h2 className="fw-bold text-primary text-center">Advanced Field Service Management</h2>
                        <p className='text-center'>Enhance your service delivery with our advanced field service management solutions.
                            We coordinate the deployment of field resources using cutting-edge technology, improving response times and customer satisfaction. O
                            ur system streamlines scheduling, dispatching, and real-time tracking, ensuring efficient and effective field operations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
