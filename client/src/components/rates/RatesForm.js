import React from 'react';

import RateCoachingGeneralFitnessForm from './RateCoachingGeneralFitnessForm';
import RateCoachingGroupForm from './RateCoachingGroupForm';
import RateCoachingIndividuelForm from './RateCoachingIndividuelForm';
import RateCoachingSportSpecificForm from './RateCoachingSportSpecificForm';
import RatePhotographyForm from './RatePhotographyForm';
import RateRehabilitationForm from './RateRehabilitationForm';
import RateWeightLossForm from './RateWeightLossForm';

function RatesForm() {
  return (
    <div>
      <RateCoachingGeneralFitnessForm />
      <br />
      <RateCoachingGroupForm />
      <br />
      <RateCoachingIndividuelForm />
      <br />
      <RateRehabilitationForm />
      <br />
      <RateCoachingSportSpecificForm />
      <br />
      <RatePhotographyForm />
      <br />
      <RateWeightLossForm />
    </div>
  );
}

export default RatesForm;
