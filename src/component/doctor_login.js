import React from 'react';
import { Container } from 'react-bootstrap';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Doctor_login extends React.Component {

	render() {

		return (
			<div>
				<Header />
				<section class="doctor_login">
					<Container>
						<div class="doctor_login_box">
							<h4>Login as doctor</h4>
							<p>Email Address</p>
							<input class="form-control" type="text" name="doctor_login" placeholder="Enter Your Email Address" />
							<p>Phone Number</p>
							<input class="form-control" type="text" name="doctor_login" placeholder="Enter Your Phone Number" />
							<p>Password</p>
							<input class="form-control" type="password" name="doctor_password" placeholder="Enter Your Password" />
							<button class="login_btn">Login</button>
							<hr />
							<a href="doctor_register" class="float-left navy_blue_font">New User? Register Now</a>
							<a href="forgot_password" class="float-right blue_font">Forgot Password?</a>
						</div>
					</Container>
				</section>

				<Footer />
			</div>
		)
	}
}



