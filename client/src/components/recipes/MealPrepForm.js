import React from 'react';

import {
  Container, Row, Col, Image,
} from 'react-bootstrap';

import MealPrepping7DayHealthyFoodMealPlan from '../pdfBooks/Meal Prepping/MealPrepping7DayHealthyFoodMealPlan.pdf';
import MealPrepping7DayHealthyFoodWeb from '../pictures/pdf/mealPrep/MealPrepping7DayHealthyFood.jpg';

function MealPrepForm() {
  return (
    <div className="container">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h3>
              Meal Prepping
              <br />
              7 Day Healthy
              <br />
              Food Meal Plan
            </h3>
            <a href={MealPrepping7DayHealthyFoodMealPlan}>
              <Image
                width={150}
                height={200}
                src={MealPrepping7DayHealthyFoodWeb}
                thumbnail
              />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MealPrepForm;
