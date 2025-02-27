import React from "react";

function LifeScience() {
    return (
        <>
          <div>
 
  {/* Page Title */}
  <div className="page-title">
    <div className="container text-center">
      <h1 data-aos="fade-down">Connected Workplace for Life Sciences</h1>
      <p data-aos="fade-up">
        Optimize lab &amp; facility management with cutting-edge solutions.
      </p>
      <a href="shedule" className="btn btn-primary mt-3 btn-animate">Schedule a Demo</a>
    </div>
  </div>
  {/* Main Content */}
  <section className="service-details py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="service-section mb-5" data-aos="fade-up">
            <h3>
              <i className="bi bi-heart-pulse" /> Keep Your Operations Running
              Smoothly
            </h3>
            {/* Full-Width Image Section */}
            <section className="full-width-image">
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600" alt="Lab Operations" className="img-fluid" />
            </section>
            {/* Attractive Card Layout */}
            <section className="attractive-cards py-5">
              <div className="container">
                <div className="row justify-content-center">
                  {/* Card */}
                  <div className="col-md-10">
                    <div className="info-card">
                      <div className="info-card-body">
                        <p>
                          Bringing life-saving therapies to market is complex.
                          Your software should simplify—not
                          complicate—facility and lab management.
                        </p>
                        <ul className="info-list">
                          <li>
                            <i className="bi bi-cpu" />
                            <strong>GxP &amp; Non-GxP Asset Management</strong>
                          </li>
                          <li>
                            <i className="bi bi-building" />
                            <strong>Real Estate &amp; Space Planning</strong>
                          </li>
                          <li>
                            <i className="bi bi-diagram-3" />
                            <strong>Capital Planning &amp; Projects</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="service-section mb-5" data-aos="fade-up">
            <h3><i className="bi bi-sliders" /> Simplify Your Workplace</h3>
            {/* <img src="https://images.unsplash.com/photo-1581091226825-1e7f81a20ea7?w=600" alt="Workplace" className="img-fluid mb-4" /> */}
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D" alt="Workplace" className="img-fluid mb-4" />

          
            <p>
              Manage all facility and lab operations seamlessly with a
              **single platform**.
            </p>
            <ul>
              <li>
                <i className="bi bi-people" />
                <strong>Break Down Silos:</strong> Foster cross-team
                collaboration.
              </li>
              <li>
                <i className="bi bi-gear-wide" />
                <strong>Optimize Operations:</strong> Automate workflows &amp;
                data integration.
              </li>
              <li>
                <i className="bi bi-check-circle" />
                <strong>Be Always Audit-Ready:</strong> Maintain regulatory
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore Life Sciences Solutions (Now Below the Main Content) */}
  <section className="explore-solutions py-5">
    <div className="container text-center">
      <h2 data-aos="fade-up">Explore Life Sciences Solutions</h2>
      <p data-aos="fade-up" className="mb-4">
        Manage your facilities, assets, and compliance effortlessly.
      </p>
      <div className="row">
        {/* Card 1: GxP Asset Management */}
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card hover-effect">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" alt="GxP" className="card-img-top" />
            <div className="card-body text-center">
              <h5>GxP Asset Management</h5>
              <p>Ensure compliance and streamline asset tracking.</p>
            </div>
          </div>
        </div>
        {/* Card 2: Calibration Integration */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="card hover-effect">
            <img src="https://as2.ftcdn.net/v2/jpg/03/22/52/23/1000_F_322522389_VOcO0YZGFNzyR5po7L1hte6Cpqlnc1Nx.jpg" alt="Calibration" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Calibration Integration</h5>
              <p>Automate calibration workflows &amp; ensure accuracy.</p>
            </div>
          </div>
        </div>
        {/* Card 3: Real Estate & Space Planning */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="card hover-effect">
            <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=400" alt="Real Estate Planning" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Real Estate &amp; Space Planning</h5>
              <p>Optimize lab &amp; facility space utilization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  
</div>

        </>
    )
}

export default LifeScience;