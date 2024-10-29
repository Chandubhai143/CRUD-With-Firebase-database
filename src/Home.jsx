
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div>
    
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">MyWebsite</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="text-center text-white py-5" style={{ background: "linear-gradient(135deg, #00c6ff, #0072ff)" }}>
        <div className="container">
          <h1 className="display-4 fw-bold">Welcome to MyWebsite</h1>
          <p className="lead">Providing the best services for all your needs</p>
          <a href="#" className="btn btn-lg btn-light mt-3">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Features</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-4 feature-card shadow">
              <h5 className="card-title">Fast Performance</h5>
              <p className="card-text">Our platform is optimized for speed to ensure fast and smooth experiences.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-4 feature-card shadow">
              <h5 className="card-title">Secure Platform</h5>
              <p className="card-text">We prioritize security to keep your data safe and protected at all times.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 p-4 feature-card shadow">
              <h5 className="card-title">User Friendly</h5>
              <p className="card-text">An intuitive and easy-to-use interface designed with you in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white py-3" style={{ backgroundColor: "#333" }}>
        <div className="container">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
          <div>
            <a href="#" className="text-white text-decoration-none me-2">Privacy Policy</a> |
            <a href="#" className="text-white text-decoration-none ms-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

