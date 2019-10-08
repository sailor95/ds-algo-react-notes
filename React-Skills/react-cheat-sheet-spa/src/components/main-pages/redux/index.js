import React from 'react';
import { Route } from 'react-router-dom';

import ReduxForm from './form/ReduxForm';

const ReduxPage = () => {
  return (
    <>
      <Route path="/redux/redux-form" component={ReduxForm} />
    </>
  );
}

export default ReduxPage;