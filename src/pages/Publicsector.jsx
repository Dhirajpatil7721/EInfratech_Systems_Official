import React from "react";

function Publicsector() {
    return(
        <>
        <div>
  {/* Page Title */}
  <div className="page-title">
    <div className="container text-center">
      <h1 data-aos="fade-down">Connected Workplace for Public Sector</h1>
      <p data-aos="fade-up">
        Drive digital transformation across government agencies &amp;
        institutions.
      </p>
      <a href="shedule" className="btn btn-primary mt-3 btn-animate">Schedule a Demo</a>
      
      {/* <button className="btn btn-primary mt-3 btn-animate" onClick={() => navigate("/Contact")}>Schedule a Demo</button> */}

    </div>
  </div>
  {/* Main Content */}
  <section className="service-details py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="service-section mb-5" data-aos="fade-up">
            <h3><i className="bi bi-globe" /> Connect Your Teams</h3>
            <img src="https://imageio.forbes.com/specials-images/imageserve/5daa08776763cb0006091765/Group-of-businesspeople-high-fiving-while-sitting-in-a-meeting-/960x0.jpg?format=jpg&width=960" alt="Government Meeting" className="img-fluid mb-4" />
            <p>
              Consolidate systems across various departments for operational
              efficiency.
            </p>
            <ul>
              <li>
                <i className="bi bi-tools" /> Maintenance &amp; Asset Management
              </li>
              <li>
                <i className="bi bi-building" /> Physical Space Allocation
              </li>
              <li><i className="bi bi-diagram-3" /> Construction Projects</li>
              <li>
                <i className="bi bi-clipboard-check" /> Real Estate Planning
              </li>
            </ul>
          </div>
          <div className="service-section mb-5" data-aos="fade-up">
            <h3>
              <i className="bi bi-bar-chart" /> Achieve Operational Efficiency
            </h3>
            {/* <img src="https://source.unsplash.com/800x400/?data,analytics" alt="Data Analytics" className="img-fluid mb-4" /> */}
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww" alt="Data Analytics" className="img-fluid mb-4" />
            <p>
              Bring together all aspects of enterprise service management into
              one platform.
            </p>
            <ul>
              <li>
                <i className="bi bi-link" />
                <strong>Ensure Complete Connectivity:</strong> Connect teams,
                processes &amp; assets.
              </li>
              <li>
                <i className="bi bi-person-check" />
                <strong>Enable Agencies &amp; Mission Partners:</strong> Improve
                workflow &amp; productivity.
              </li>
              <li>
                <i className="bi bi-graph-up-arrow" />
                <strong>Access Data Anytime:</strong> Custom dashboards &amp;
                real-time insights.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Explore Public Sector Solutions */}
  <section className="explore-solutions py-5">
    <div className="container text-center">
      <h2 data-aos="fade-up">Explore Public Sector Solutions</h2>
      <p data-aos="fade-up" className="mb-4">
        Comprehensive solutions for public sector operations.
      </p>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4" data-aos="fade-up">
          <div className="card hover-effect">
            <img src="https://www.camcode.com/wp-content/uploads/2018/06/shutterstock_2399344103-1135x675.webp" alt="Facilities Maintenance" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Facilities Maintenance</h5>
              <p>Ensure smooth operation of public infrastructure.</p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="card hover-effect">
            <img src="https://www.slideteam.net/media/catalog/product/cache/1280x720/r/e/real_estate_strategic_plan_powerpoint_ppt_template_bundles_slide01.jpg" alt="Real Estate Planning" className="card-img-top" />
            <div className="card-body text-center">
              <h5>Space &amp; Real Estate Planning</h5>
              <p>Optimize space usage and future resource planning.</p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-md-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="card hover-effect">
            <img src="https://media.licdn.com/dms/image/v2/D5612AQE1bO17sMHB3w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1725426181808?e=2147483647&v=beta&t=ss6pQCTLzh-PKLFFjz_n4zlqoBH0VymRgunjzeDKn1A" alt="OT Security" className="card-img-top" />
            <div className="card-body text-center">
              <h5>OT Security</h5>
              <p>Enhance cybersecurity for public sector infrastructure.</p>
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

export default Publicsector;