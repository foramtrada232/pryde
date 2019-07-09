import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
// Import Componentss
import Header from './header';
import Footer from './footer';

export default class Doctor_register extends React.Component {

	render() {

		return (
			<div>
				<Header />
				<section className="registration_form">
					<Container>
						<div className="register_box">
							<h4>Register as Doctor</h4>
							<Row>
								<Col lg={6} md={6} className="mt-2">
									<label>First Name</label>
									<input className="form-control" type="text" name="" placeholder="Enter Your First Name" />
								</Col>
								<Col lg={6} md={6} className="mt-2">
									<label>Middle Name</label>
									<input className="form-control" type="text" name="" placeholder="Enter Your Middle Name" />
								</Col>
								<Col lg={6} md={6} className="mt-3">
									<label>Last Name</label>
									<input className="form-control" type="text" name="" placeholder="Enter Your Last Name" />
								</Col>
								<Col lg={6} md={6} className="mt-3">
									<label>Email Address</label>
									<input className="form-control" type="email" name="" placeholder="Enter Your Email Address" />
								</Col>
								<Col lg={6} md={6} className="mt-4">
									<label>Contact Number</label>
									<input className="form-control" type="text" name="" placeholder="Enter Your Contact Number" />
								</Col>
								<Col lg={6} md={6} className="mt-4">
									<label>MCI No.</label>
									<input className="form-control" type="text" name="" placeholder="Enter Your MCI No." />
								</Col>
								<Col lg={6} md={6} className="mt-3">
									<label>Department</label>
									<input className="form-control" type="email" name="" placeholder="Enter Your Department" />
								</Col>
								<Col lg={6} md={6} className="mt-3">
									<label>Password</label>
									<input className="form-control" type="password" name="" placeholder="Enter Your Password" />
								</Col>
								<Col lg={6} md={6} className="mt-4">
									<label>Re-enter Password</label>
									<input className="form-control" type="password" name="" placeholder="Re-enter Password" />
								</Col>
								<Col lg={12} md={12} className="mt-4">
									{/* <div className="custom-control custom-checkbox">
							<input type="checkbox" className="custom-control-input" id="customCheck1">
							<label className="custom-control-label" for="customCheck1">Accept <a className="blue_font" href="">Terms and Conditions </a> And <a className="blue_font" href="">Privacy Policy</a> </label>
						</div>  */}
									<div className="form-check">
										<input type="checkbox" className="form-check-input" value="" id="i_agree" style={{ display: 'none' }} />
										<label className="form-check-label" htmlFor="i_agree">Accept <a href="#" className="blue_font">Terms & Conditions</a>And  <a href="#" className="blue_font">Privacy Policy</a></label>
									</div>
								</Col>
								<Col lg={12} md={12} className="mt-3">
									<a href="validate_OTP" className="w-100"><button>Register</button></a>
								</Col>
							</Row>
						</div>
					</Container>
				</section>
				<Footer />
			</div>
		)
	}
}



