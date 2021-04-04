import React from 'react';

import PhotoAthleticsForm from './PhotoAthleticsForm';
import PhotoHockeyForm from './PhotoHockeyForm';
import PhotoNetballForm from './PhotoNetballForm';
import PhotoRugbyForm from './PhotoRugbyForm';
import PhotoTennisForm from './PhotoTennisForm';

function PhotographyForm() {
  return (
    <div className="container">
      <PhotoRugbyForm />
      <PhotoAthleticsForm />
      <PhotoHockeyForm />
      <PhotoNetballForm />
      <PhotoTennisForm />
    </div>
  );
}

export default PhotographyForm;
