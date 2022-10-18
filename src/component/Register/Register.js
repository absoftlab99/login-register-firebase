import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { sendEmailVerification, createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
const Register = () => {
    
    const [passwordError, setPasswordError] = useState('');
    const [successError, setSuccessError] = useState(false);

    const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;
    const city = form.city.value;
    const zip = form.zip.value;

    console.log(email, password);

    if(!/(?=.*[A-Z])/.test(password)){
        setPasswordError('Please use at least 1 upercase character');
        return;
    }
    if(!/(?=.*[!@#$&*])/.test(password)){
        setPasswordError('Please use at least 1 special character');
        return;
    }
    if(password.length < 6){
        setPasswordError('Password should be six characters');
        return;
    }
    setPasswordError('');

    createUserWithEmailAndPassword(auth, email, password, address, city, zip)
    .then(result =>{
        const user = result.user;
        console.log(user);
        setSuccessError(true);
        form.reset();
        emailVerify();
    })
    .catch(error =>{
        console.error('error', error);
        setPasswordError(error.message);
    })
}
    const emailVerify = () =>{
        sendEmailVerification(auth.currentUser)
        .then(() => {
            alert('check your mail inbox or spam for verify your email')
        });
    }
    return (
        <div>
            <Form onSubmit={handleRegister} className="w-50 mx-auto border border-primary rounded mt-5 p-3 px-4">
                <h2 className="text-primary text-center m-0">Registration Form</h2>
                <hr className="w-50 mx-auto"></hr>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control name='address' placeholder="ex- 1234 Main St" required/>
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control name='city' placeholder='ex- Dinajpur' required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control name='zip' placeholder='ex- 5280' required/>
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Accept our Terms & Conditions" required/>
                </Form.Group>
                {
                    passwordError ? 
                    <div className='alert alert-danger' role='alert'>
                        <p className='text-danger m-0 p-0'>{passwordError}</p>
                    </div> : ''
                }
                {
                    successError && 
                    <div className="alert alert-success" role="alert">
                        User Successfully Created
                    </div>
                }
                <Button variant="primary" type="submit">
                Register
                </Button>

                <p className='pt-3 m-0'>Already have an account <Link to='/login'>Login</Link></p>
            </Form>
        </div>
    );
};

export default Register;
