import React from 'react';
import { Container } from 'react-bootstrap';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Forgot_password extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <section class="doctor_login">
                    <Container>
                        <div class="doctor_login_box">
                            <h4>Forgot Password</h4>
                            <p>Email Address</p>
                            <input class="form-control" type="text" name="doctor_login" placeholder="Enter Your Email Address" />
                            <p>Phone Number</p>
                            <input class="form-control" type="text" name="doctor_login" placeholder="Enter Your Phone Number" />
                            <a class="w-100" href="validate_OTP"><button class="login_btn">OK</button></a>
                        </div>
                    </Container>
                </section>

                <Footer />
            </div>
        )
    }
}



