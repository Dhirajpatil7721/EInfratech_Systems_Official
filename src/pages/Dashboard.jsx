import React from 'react';
import Hero from '../components/Hero';
import { FaBuilding, FaLock, FaRocket } from "react-icons/fa";
import './Dashboard.css';

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
            <div className="container-fluid position-relative p-0">
             
                <div
                    className="w-100 min-vh-100 d-flex align-items-center justify-content-center position-relative"
                    style={{
                        backgroundImage: "url('/images/homewho.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                   
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

              
                    <div className="text-white position-relative text-center p-4 w-75 w-md-65 w-lg-65" id="txt">
                        <h2 className="fw-bold">Who We Are</h2>
                        <p className="lead">We're a company built on a clear set of values. Our goal is to empower you to do your best work in the most efficient way possible. That shines through in everything we do, from innovation to delivery, we strive to deliver a solution that makes you proud of the work that you do.</p>
                    </div>
                </div>
            </div>

        </div>
    
    );
};

export default Dashboard;
