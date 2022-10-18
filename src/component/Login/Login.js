import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';


const auth = getAuth(app);
const Login = () => {
    const [successError, setSuccessError] = useState(false);

    const handleLogin = (event) =>{
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        setSuccessError(true);
        form.reset();
    })
    .catch(error =>{
        console.error('error', error);
        setSuccessError(error.message);
    })
}

    return (
        <div className='w-50 mx-auto mt-5'>
            <Form onSubmit={handleLogin} className='border border-primary rounded-2 p-3'>
            <h2 className='text-primary text-center'>Login Form</h2>
            <hr className="w-50 mx-auto"></hr>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                {
                    successError ? 
                    <div className='alert alert-primary' role='alert'>
                        <p className='text-danger m-0 p-0'>{successError}</p>
                    </div> : ''
                }
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='pt-3 m-0'>If you have no account, please <Link to='/register'>Register</Link></p>
            </Form>
        </div>
    );
};

export default Login;