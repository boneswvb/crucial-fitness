import React from 'react';

import BlogsForm from './BlogsForm';
import EBooksForm from './EBooksForm';
import WeightLossForm from './WeightLossForm';

function InterestingReadsForm() {
  return (
    <div className="container-fluid">
      <BlogsForm />
      <EBooksForm />
      <WeightLossForm />
    </div>
  );
}

export default InterestingReadsForm;
