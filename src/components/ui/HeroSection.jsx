import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";




const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Track and visualize NFT trading activity on Ethereum 
                
              </h2>
              <p>
                We provide you with analytics to get a clear visual overview on NFT activity.
                Select your custom filters and observe retrieved data through the NFT wall.
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="track__btn d-flex align-items-center gap-2">
                    <i class="ri-line-chart-fill"></i>{" "}
                    <Link to="/wall">Track Activity</Link>
                </button>
                
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
                <img src={""} alt="" className="w-75"/>
              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
