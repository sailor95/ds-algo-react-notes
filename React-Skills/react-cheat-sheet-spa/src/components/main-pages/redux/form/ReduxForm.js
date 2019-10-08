import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import BaseForm from './BaseForm';
import FormContainer from './FormContainer';

class ReduxForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Redux Form</h1>
          </Col>
          <Col sm={12}>
            <h3>Base Form</h3>
          </Col>
          <Col sm={6}>
            <BaseForm disabled={true} />
          </Col>
          <Col sm={12}>
            <h3>Form Container</h3>
          </Col>
          <Col sm={6}>
            <FormContainer formId="redux-form" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReduxForm;