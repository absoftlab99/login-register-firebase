import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <Form className="w-50 mx-auto border border-primary rounded mt-5 p-3 px-4">
                <h2 className="text-primary text-center m-0">Registration Form</h2>
                <hr className="w-50 mx-auto"></hr>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Accept our Terms & Conditions" />
                </Form.Group>

                <Button variant="primary" type="submit">
                Register
                </Button>

                <p className='pt-3 m-0'>Already have an account <Link to='/login'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;
