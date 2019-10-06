import React from 'react';
import { Route } from 'react-router-dom';

import ControlledForm from './form/ControlledForm';

const ReactPage = () => {
    return (
        <>
            <Route path="/react/form" component={ControlledForm} />
        </>
    );
}

export default ReactPage;