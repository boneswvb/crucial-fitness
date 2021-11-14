import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import "./interestingReads.css";

import InterestingReadDiabesityRP from "../pdfBooks/Blogs/InterestingReadDiabesityRP.pdf";
import InterestingReadDiabetesBook from "../pdfBooks/Blogs/InterestingReadDiabetesBook.pdf";
import InterestingReadEatWell from "../pdfBooks/Blogs/InterestingReadEatWell.pdf";
import InterestingReadTricksAndTipsForDrinkingMoreWater from "../pdfBooks/Blogs/InterestingReadTricksAndTipsForDrinkingMoreWater..pdf";

import InterestingReadDiabesityRPWeb from "../pictures/pdf/blogs/InterestingReadDiabesityRPWeb.jpg";
import InterestingReadDiabetesBookWeb from "../pictures/pdf/blogs/InterestingReadDiabetesBook.jpg";
import InterestingReadEatWellWeb from "../pictures/pdf/blogs/InterestingReadEatWell.jpg";
import InterestingReadWaterGlassWeb from "../pictures/pdf/blogs/InterestingReadWaterGlass.jpg";

function BlogsForm() {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h3>Diabesity RP</h3>
            <a href={InterestingReadDiabesityRP}>
              <Image
                width={150}
                height={200}
                src={InterestingReadDiabesityRPWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h3>Diabetes</h3>
            <a href={InterestingReadDiabetesBook}>
              <Image
                width={150}
                height={200}
                src={InterestingReadDiabetesBookWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h3>EatWell</h3>
            &nbsp;
            <a href={InterestingReadEatWell}>
              <Image
                width={150}
                height={200}
                src={InterestingReadEatWellWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h5>Tricks And Tips For Drinking More Water</h5>
            <a href={InterestingReadTricksAndTipsForDrinkingMoreWater}>
              <Image
                width={150}
                height={200}
                src={InterestingReadWaterGlassWeb}
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BlogsForm;
