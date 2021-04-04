import React from 'react';

import Figure from 'react-bootstrap/Figure';

import IMG1 from '../pictures/Smoothies/1402472489425.jpg';
import IMG2 from '../pictures/Smoothies/1402472506363.jpg';
import IMG3 from '../pictures/Smoothies/IMG_25952646232458.jpeg';
import IMG4 from '../pictures/Smoothies/IMG_25969002780466.jpeg';
import IMG5 from '../pictures/Smoothies/IMG_51625079800314.jpeg';
import IMG6 from '../pictures/Smoothies/IMG_51666736418292.jpeg';

function SmoothiesForm() {
  return (
    <div className="container">
      <h1>Smoothies</h1>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG6}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG2}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG3}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG4}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG5}
          thumbnail
        />
      </Figure>
      <Figure>
        <Figure.Image
          width={300}
          height={300}
          alt="Smoothie Recipes"
          src={IMG1}
          thumbnail
        />
      </Figure>
    </div>
  );
}

export default SmoothiesForm;
