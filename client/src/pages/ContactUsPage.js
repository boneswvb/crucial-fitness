import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import ContactUsForm from '../components/contactUs/ContactUsForm';

function ContactUsPage() {
  return (
    <div className="container">
      <Helmet>
        <meta
          name="keywords"
          content="service "
        />
        <meta name="description" content="aaa" />
        <title>Contact Us - Crucial Fitness & Nutrition</title>
      </Helmet>
      <Switch>
        <Route path="/contactuspage">
          <ContactUsForm />
        </Route>
      </Switch>
    </div>
  );
}

export default ContactUsPage;
