import React from "react";
import { Component } from "react";
import { Spinner, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../netflix-logo.png";

// import React, { Component } from 'react'
// import { Formik, Form, Field , View } from 'formik';
// import * as Yup from 'yup';

//  const validationSchema = Yup.object().shape({
//    firstName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    lastName: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),
//    email: Yup.string().email('Invalid email').required('Required'),
//    birthYear: Yup.string()
//      .min(4, 'Too Short!')
//      .max(4, 'Too Long!')
//      .required('Required'),
//     postCode: Yup.string()
//      .min(5, 'Too Short!')
//      .max(5, 'Too Long!')
//      .required('Required'),
//      rememberMe: Yup.bool(),
//  });

//  export const Registration = () => (
//    <div>
{
  /* <h1>Register</h1>
     <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         birthYear: '',
         postCode: '',

       }}
       validationSchema={validationSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
           <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
           <Field name="lastName" />
           {errors.lastName && touched.lastName ? (
             <div>{errors.lastName}</div>
           ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="birthYear" />
           {errors.birthYear && touched.birthYear ? (
             <div>{errors.birthYear}</div>
           ) : null}
           <Field name="postCode" />
           {errors.postCode && touched.postCode ? (
             <div>{errors.postCode}</div>
           ) : null}
<Field name="rememberMe" />
           <button type="submit">Submit</button>


         </Form>
       )}
     </Formik> */
}
//    </div>
//  );
const rules = {
  surname: value => value.length > 3,
  name: value => value.length > 2,
  creditCard: value => value.length === 16 && !isNaN(value),
};

export class Registration extends Component {
  state = {
    loading: false,
    firstName: "",
    surname: "",
    dob: "",
    address: "",
    city: "",
    postcode: "",
    creditCard: "",
    error: "",
  };

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const values = Object.values(this.state);
    const keys = Object.keys(this.state);
    let error = "";

    values.forEach((value, index) => {
      const keyOfCurrentValue = keys[index];
      if (keyOfCurrentValue !== "error") {
        const rule = rules[keyOfCurrentValue];
        if (!(rule && rule(value))) {
          error += `${keyOfCurrentValue} is not satisfying conditions , `;
        }
      }
    });

    this.setState({ error });
    if (!this.state.error) {
      // submit form
    }
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({ loading: true }), 1000);
  };

  render() {
    return (
      <Container>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand my-1">
            <Link to="/">
              <img src={logo} alt="logo" width="125" />
            </Link>
          </a>
        </nav>
        <div>
          <h1>Let's get registered!</h1>
        </div>
        {!this.state.loading ? (
          <div className="d-block w-100 mb-5 mt-5">
            <h5 className="d-inline-block mb-0 mr-2" style={{ color: "white" }}>
              Loading...
            </h5>
            <Spinner animation="border" variant="danger" disabled />
          </div>
        ) : (
          <Row>
            <Col xs={8}>
              <Form onSubmit={this.handleSubmit}>
                {this.state.error.length > 0 && (
                  <Alert variant="danger">{this.state.error}</Alert>
                )}
                <Row>
                  <Col xs={12} className="mt-4 mb-2">
                    <h2>Personal information</h2>
                  </Col>
                  <Col xs={4}>
                    <Form.Group controlId="name">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        min="2"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group controlId="surname">
                      <Form.Label>Surname</Form.Label>
                      <Form.Control
                        type="text"
                        min="2"
                        value={this.state.surname}
                        onChange={this.handleChange}
                        placeholder="Surname"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group controlId="birthDate">
                      <Form.Label>Date of birth</Form.Label>
                      <Form.Control
                        value={this.state.dob}
                        onChange={this.submitData}
                        type="date"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.address}
                        onChange={this.handleChange}
                        placeholder="Building number, Street name"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={3}>
                    <Form.Group controlId="city" className="mr-5">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange}
                        placeholder="City"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={3}>
                    <Form.Group controlId="postcode">
                      <Form.Label>Post Code</Form.Label>
                      <Form.Control
                        type="text"
                        value={this.state.postcode}
                        onChange={this.handleChange}
                        placeholder="Postcode"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={10}>
                    <Form.Group controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="Enter email"
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        //   value={newUser.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit" className="mt-4">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default Registration;
