import React from "react";
import { CustomCarousel } from "../../components/customCarousel/CustomCarousel";
import { Col, Container, Row } from "react-bootstrap";
import { JustInSection } from "../../components/pageSection/JustInSection";
import { BestRead } from "../../components/pageSection/BestRead";
import { RecommendationForYou } from "../../components/pageSection/RecommendationForYou";

export const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          {/* Hero Section */}
          <CustomCarousel />
          {/* Just In Section */}
          <JustInSection />
          {/* Best Read Section */}
          <BestRead />
          {/* Recommendation Section*/}
          <RecommendationForYou />
        </Col>
      </Row>
    </Container>
  );
};
