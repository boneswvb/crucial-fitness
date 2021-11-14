import React from "react";

import { Container, Row, Col, Image } from "react-bootstrap";

import EvanBrandStressSolutionsEBook from "../pdfBooks/EBooks/EvanBrandStressSolutionsEBook.pdf";
import GutBrainHealingRecipesEBook from "../pdfBooks/EBooks/GutBrainHealingRecipesEBook.pdf";
import BWellReceipyBookEBook from "../pdfBooks/EBooks/BWellReceipyBookEBook.pdf";
import MenopauseEBook from "../pdfBooks/EBooks/MenopauseEBook.pdf";
import TopupplementsForEnergyEnhancementEBook from "../pdfBooks/EBooks/TopupplementsForEnergyEnhancementEBook.pdf";
import UltimateGuideToDetoxingEBook from "../pdfBooks/EBooks/UltimateGuideToDetoxingEBook.pdf";

import EvanBrandStressSolutionsEBookWeb from "../pictures/pdf/ebooks/EvanBrandStressSolutionsEBook.jpg";
import GutBrainHealingRecipesEBookWeb from "../pictures/pdf/ebooks/GutBrainHealingRecipesEBook.jpg";
import EatToLiveEBookWeb from "../pictures/pdf/ebooks/EatToLiveEBook.jpg";
import MenopauseEBookWeb from "../pictures/pdf/ebooks/MenopauseEBook.jpg";
import TopupplementsForEnergyEnhanWeb from "../pictures/pdf/ebooks/TopupplementsForEnergyEnhan.jpg";
import TheUltimateGuideToDetoxingWeb from "../pictures/pdf/ebooks/TheUltimateGuideToDetoxing.jpg";

function EBooksForm() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h3>Evan Brand - Stress Solutions</h3>
            <a href={EvanBrandStressSolutionsEBook}>
              <Image
                width={150}
                height={200}
                src={EvanBrandStressSolutionsEBookWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h3>Gut And Brain Healing Recipes</h3>
            <a href={GutBrainHealingRecipesEBook}>
              <Image
                width={150}
                height={200}
                src={GutBrainHealingRecipesEBookWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <br />
            <h3>Eat To Live</h3>
            <a href={BWellReceipyBookEBook}>
              <Image
                width={150}
                height={200}
                src={EatToLiveEBookWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <br />
            <h3>Menopause</h3>
            <a href={MenopauseEBook}>
              <Image
                width={150}
                height={200}
                src={MenopauseEBookWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <h3>Top-up supplements For Energy Enhancement</h3>
            <a href={TopupplementsForEnergyEnhancementEBook}>
              <Image
                width={150}
                height={200}
                src={TopupplementsForEnergyEnhanWeb}
                thumbnail
              />
            </a>
          </Col>
          <Col xs={12} md={3}>
            <br />
            <br />
            <h3>Ultimate Guide To Detoxing</h3>
            <br />
            <a href={UltimateGuideToDetoxingEBook}>
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

export default EBooksForm;
