import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import dermatology from './images/dermatology.svg';
import dentistry from './images/dentistry.svg';
import general_GP from './images/general_GP.svg';
import medicine from './images/medicine.svg';
import Gastroenterology from './images/Gastroenterology.svg';
import Nutrition from './images/nd.svg';
import doctor from './images/doctor.svg';
import nurse from './images/nurse.svg';
import psychiatry from './images/psychiatry.svg';
import drug from './images/drug.svg';
import syrings from './images/syrings.svg';
import ENT from './images/ENT.svg';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Appoinment_booking_based_on_hospital extends React.Component {

	render() {

		return (
			<div>
				<Header />
				<section className="page_breadcrumb">
					<Container>
						<Row>
							<Col lg={7}>
								<div className="page_title">
									<h1>Doctor Consultation<Image src={heartbeat} alt="heart beat icon" /></h1>
								</div>
							</Col>
							<Col lg={5}>
								<div className="d-flex flex-wrap align-content-center">
									<ul>
										<li>Patient</li>
										<li>Doctor Consultation</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="all_page_search_section">
					<Container>
						<label>See a Specialist from home within minutes.</label>
						<Row>
							<Col xl={4} lg={6} mb={3}>
								<div className="geolocation">
									<input type="text" className="form-control" placeholder="Search for Doctors by geolocation..." />
								</div>
							</Col>
							<Col xl={4} lg={6} mb={3}>
								<div>
									<div className="search_symptom">
										<select className="js-example-basic-single" name="state">
											<option defaultValue="" selected disabled>Search for Doctors by symptoms...</option>
											<option defaultValue="AB">Abdominal pain</option>
											<option defaultValue="BL">Blood in stool</option>
											<option defaultValue="CH">Chest pain</option>
											<option defaultValue="CON">Constipation</option>
											<option defaultValue="COU">Cough</option>
										</select>
									</div>
								</div>
							</Col>
							<Col xl={4} lg={6} mb={3}>
								<div className="hospitals">
									<input type="text" className="form-control" placeholder="Search for Doctors by hospitals..." />
								</div>
							</Col>
						</Row>
						<div className="geolocation_menu" style={{ display: 'none' }}>
							<Row>
								<Col lg={10} md={12}>
									<Row>
										<Col lg md={12}>
											<p>City</p>
											<select>
												<option defaultValue="Ahmedabad">Ahmedabad</option>
												<option defaultValue="Rajkot">Rajkot</option>
												<option defaultValue="Jamnagar">Jamnagar</option>
												<option defaultValue="Morbi">Morbi</option>
											</select>
										</Col>
										<Col lg md={12}>
											<p>Area</p>
											<select>
												<option defaultValue="">Shivranjani</option>
												<option defaultValue="">Nehrunagar</option>
												<option defaultValue="">Kalupur</option>
												<option defaultValue="">Chandlodiya</option>
											</select>
										</Col>
										<Col lg md={12}>
											<p>Location</p>
											<input type="text" name="" className="form-group" placeholder="X-ray Clinic, B-110, Doctor House," />
										</Col>
										<Col lg md={12}>
											<p>Pin Code</p>
											<input type="text" name="" className="form-group" placeholder="333222" />
										</Col>
									</Row>
								</Col>
								<Col lg={2} md={12}>
									<a href="appoinment_booking_v3-3" className="w-100"><button className="btn search_btn">Search</button></a>
								</Col>
							</Row>
						</div>
						<div className="hospital_menu" style={{ display: 'none' }}>
							<Row>
								<Col xl={3} lg={4} md={6} sm={12}>
									<p>City</p>
									<select>
										<option defaultValue="Ahmedabad">Ahmedabad</option>
										<option defaultValue="Rajkot">Rajkot</option>
										<option defaultValue="Jamnagar">Jamnagar</option>
										<option defaultValue="Morbi">Morbi</option>
									</select>
								</Col>
								<Col xl={3} lg={4} md={6} sm={12}>
									<p>Area</p>
									<select>
										<option defaultValue="">Shivranjani</option>
										<option defaultValue="">Nehrunagar</option>
										<option defaultValue="">Kalupur</option>
										<option defaultValue="">Chandlodiya</option>
									</select>
								</Col>
								<Col xl={3} lg={4} md={6} sm={12}>
									<p>Location</p>
									<input type="text" name="" className="form-group" placeholder="X-ray Clinic, B-110, Doctor House," />
								</Col>
								<Col xl={3} lg={4} md={6} sm={12}>
									<p>Pin Code</p>
									<input type="text" name="" className="form-group" placeholder="333222" />
								</Col>
								<Col xl={3} lg={4} md={6} sm={12}>
									<p>Hospital Associated With Pryde</p>
									<select>
										<option defaultValue="">Indovasc Hospital</option>
										<option defaultValue="">Indovasc Hospital</option>
										<option defaultValue="">Indovasc Hospital</option>
										<option defaultValue="">Indovasc Hospital</option>
									</select>
								</Col>
								<Col xl={3} lg={4} md={6} sm={12}>
									<a href="appoinment_booking_v3-3" className="w-100"><button className="btn search_btn">Search</button></a>
								</Col>
							</Row>
						</div>
					</Container>
				</section>
				<section className="specialities">
					<Container>
						<div className="section_title">
							<h2>Specialities<Image src={heartbeat} alt="heart beat icon" /></h2>
							<div className="specialities_toggle_btn">
								<a href="javascript:void(0);"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
							</div>
						</div>
						<div className="specialities_toggle_menu" style={{ display: 'none' }}>
							<Row>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={dermatology} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Dermatology</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={ENT} alt="line image" />
											<hr />
											<p className="text-dark font_bold">ENT</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={dentistry} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Dentistry</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className="  border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={general_GP} alt="line image" />
											<hr />
											<p className="text-dark font_bold">General Physician - GP</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={medicine} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Internal Medicine</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={Gastroenterology} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Gastroenterology</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={Nutrition} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Nutrition & Dietetics</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className="  border-bottom">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={doctor} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Obstetrics & Gynaecology</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={nurse} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Paediatrics</p>
										</div>
									</a>
								</Col>

								<Col lg={3} sm={6} className=" border-right">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={psychiatry} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Psychiatry</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} className=" border-right">
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={drug} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Psychology</p>
										</div>
									</a>
								</Col>
								<Col lg={3} sm={6} >
									<a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
										<div className="feature_detail_card_blue blue_image">
											<Image src={syrings} alt="line image" />
											<hr />
											<p className="text-dark font_bold">Pulmonology</p>
										</div>
									</a>
								</Col>
							</Row>
						</div>
						{/* </div> */}
					</Container>
				</section>

				<section className="book_ur_appoinment">
					<Container>
						<div className="section_title">
							<h2>Book Your Appointment<Image src={heartbeat} alt="heart beat icon" /></h2>
						</div>
						<Row>
							<Col md={4} mt={3}>
								<p>Hospital onboard with Pryde</p>
								<select className="form-group">
									<option defaultValue="">Hospital</option>
									<option defaultValue="">Nehrunagar</option>
									<option defaultValue="">Kalupur</option>
									<option defaultValue="">Chandlodiya</option>
								</select>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="book_appointment">
					<Container>
						<Row>
							<Col xl={4} lg={6} className="mt-1">
								<label>First Name</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your First Name" />
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Middle Name</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your Middle Name" />
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Last Name</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your Last Name" />
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Date of Birth</label>
								<div className="input-group mb-3">
									<div className="input-group-prepend">
										<span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
									</div>
									<input type="date" className="form-control" placeholder="Date Of Birth" aria-label="" aria-describedby="basic-addon1" />
								</div>
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Age</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your Age" />
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Contact Number</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your Contact Number" />
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Email Address</label>
								<input className="form-control" type="text" name="" placeholder="Enter Your Email Address" />
							</Col>
							<Col xl={4} lg={6} mb={2} className="mt-1">
								<label>Gender</label>
								<div className="btn-group btn-group-toggle" data-toggle="buttons">
									<label className="btn btn-light active">
										<input type="radio" name="options" id="option1" autoComplete="off" defaultChecked /> Male
					</label>
									<label className="btn btn-light">
										<input type="radio" name="options" id="option2" autoComplete="off" /> Female
					</label>
									<label className="btn btn-light">
										<input type="radio" name="options" id="option3" autoComplete="off" /> Other
					</label>
								</div>
							</Col>
							<Col xl={4} lg={6} className="mt-1">
								<label>Upload Previous History/Report/Rescription</label>
								<div className="upload_btn">
									<input type="file" id="upload_file" style={{ display: 'none' }} />
									<label htmlFor="upload_file">Upload File</label>
								</div>
							</Col>
						</Row>
					</Container>
				</section>

				<section className="appointment_calendar_1 border-top border-bottom">
					<Container>
						<h5 className="pick_date">Pick a Date</h5>
						<div id='calendar'>
						</div>
						<h5 className="pick_date pick_date_margin_top">Pick a Time</h5>
						<Container>
							<div className="row select_date_appoinment">
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="first" defaultValue="first" defaultChecked />
									<label className="form-check-label text-center" htmlFor="first">10AM - 11AM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="second" defaultValue="second" />
									<label className="form-check-label text-center" htmlFor="second">11AM - 12PM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="third" defaultValue="third" />
									<label className="form-check-label text-center" htmlFor="third">12PM - 01PM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="four" defaultValue="four" />
									<label className="form-check-label text-center" htmlFor="four">02PM - 03PM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="five" defaultValue="five" />
									<label className="form-check-label text-center" htmlFor="five">02PM - 03PM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="six" defaultValue="six" />
									<label className="form-check-label text-center" htmlFor="six">03PM - 04PM</label>
								</div>
								<div className="form-check">
									<input className="form-check-input" type="radio" name="time" id="seven" defaultValue="seven" />
									<label className="form-check-label text-center" htmlFor="seven">04PM - 05PM</label>
								</div>
								<div className="form-check ">
									<input className="form-check-input" type="radio" name="time" id="eight" defaultValue="eight" />
									<label className="form-check-label text-center" htmlFor="eight">05PM - 06PM</label>
								</div>
								<div className="form-check ">
									<input className="form-check-input" type="radio" name="time" id="nine" defaultValue="nine" />
									<label className="form-check-label text-center" htmlFor="nine">06PM - 07PM</label>
								</div>
								<div className="form-check ">
									<input className="form-check-input" type="radio" name="time" id="ten" defaultValue="ten" />
									<label className="form-check-label text-center" htmlFor="ten">07PM - 08PM</label>
								</div>
								<div className="form-check ">
									<input className="form-check-input" type="radio" name="time" id="eleven" defaultValue="eleven" />
									<label className="form-check-label text-center" htmlFor="eleven">08PM - 09PM</label>
								</div>
							</div>
						</Container>
					</Container>
				</section>

				<section className="tc_apply">
					<Container>
						<div className="form-check">
							<input type="checkbox" className="form-check-input" defaultValue="" id="i_agree" style={{ display: 'none' }} />
							<label className="form-check-label" htmlFor="i_agree">I agree all the <a href="#" className="blue_font">Terms & Conditions</a></label>
						</div>
						<div className="doctor_details mt-3">
							<button type="button">submit</button>
						</div>
					</Container>
				</section>
				<Footer />
			</div>
		)
	}
}



