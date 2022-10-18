import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-50 mx-auto mt-5'>
            <Form className='border border-primary rounded-2 p-3'>
            <h2 className='text-primary text-center'>Login Form</h2>
            <hr className="w-50 mx-auto"></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='pt-3 m-0'>If you have no account, please <Link to='/register'>Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;