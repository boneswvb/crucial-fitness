import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import fiveDayFatLossAcceleratorv3WieghtLoss from "../pdfBooks/WeightLoss/5DayFatLossAcceleratorv3WieghtLoss.pdf";
import BalancingBenefitsOfThisTwoIngredientMorningTonicWieghtLoss from "../pdfBooks/WeightLoss/19BalancingBenefitsOfThisTwoIngredientMorningTonicWieghtLoss.pdf";
import TheRedTeaDetoxFreeWieghtLoss from "../pdfBooks/WeightLoss/TheRedTeaDetoxFreeWieghtLoss.pdf";
import TheUltimateGuideToDetoxingWieghtLoss from "../pdfBooks/WeightLoss/TheUltimateGuideToDetoxingWieghtLoss.pdf";

import FiveDayFattLossAcceleratorWeb from "../pictures/pdf/weightLoss/FiveDayFattLossAccelerator.jpg";
import NineteenBalancingBenefitsOfWeb from "../pictures/pdf/weightLoss/NineteenBalancingBenefitsOf.jpg";
import TheRedTeaDetoxWeb from "../pictures/pdf/weightLoss/TheRedTeaDetox.jpg";
import TheUltimateGuideToDetoxingWeb from "../pictures/pdf/weightLoss/TheUltimateGuideToDetoxing.jpg";

function WeightLossForm() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <br />
            <br />
            <h3>5 Day Fat Loss Accelerator</h3>
            <br />
            <a href={fiveDayFatLossAcceleratorv3WieghtLoss}>
              <Image
                // width={150}
                // height={200}
                src={FiveDayFattLossAcceleratorWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h3>19 Balancing Benefits Of This Two Ingredient Morning Tonic</h3>
            <a
              href={BalancingBenefitsOfThisTwoIngredientMorningTonicWieghtLoss}
            >
              <Image
                // width={150}
                // height={200}
                src={NineteenBalancingBenefitsOfWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <br />
            <br />
            <h3>
              The Red Tea
              <br />
              Detox
            </h3>
            <br />
            <a href={TheRedTeaDetoxFreeWieghtLoss}>
              <Image
                width={150}
                height={200}
                src={TheRedTeaDetoxWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <br />
            <br />
            <h3>The Ultimate Guide To Detoxing</h3>
            <br />
            <a href={TheUltimateGuideToDetoxingWieghtLoss}>
              <Image
                width={150}
                height={200}
                src={TheUltimateGuideToDetoxingWeb}
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeightLossForm;
