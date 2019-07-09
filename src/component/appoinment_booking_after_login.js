import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
// Images
import heartbeat from './images/dark_blue_heart_beat_icon.svg';
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

export default class Appoinment_booking_after_login extends React.Component {
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
                            <Col xl={4} lg={6}>
                                <div className="geolocation">
                                    <input type="text" className="form-control" placeholder="Search for Doctors by geolocation..." />
                                </div>
                            </Col>
                            <Col xl={4} lg={6} >
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
                            <Col xl={4} lg={6}>
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
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={dermatology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Dermatology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={ENT} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">ENT</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={dentistry} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Dentistry</p>
                                        </div>
                                    </a>
                                </Col>
                                <div className="col-lg-3 col-sm-6  border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={general_GP} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">General Physician - GP</p>
                                        </div>
                                    </a>
                                </div>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={medicine} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Internal Medicine</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={Gastroenterology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Gastroenterology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={Nutrition} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Nutrition & Dietetics</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={doctor} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Obstetrics & Gynaecology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={nurse} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Paediatrics</p>
                                        </div>
                                    </a>
                                </Col>

                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={psychiatry} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychiatry</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={drug} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6}>
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
                    </Container>
                </section>

                <section className="book_appointment">
                    <Container>
                        <div className="section_title p-0">
                            <h2 className="pb-2">Book Your Appointment<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>First Name</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your First Name" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Middle Name</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your Middle Name" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Last Name</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your Last Name" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Date of Birth</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-calendar-o" aria-hidden="true"></i></span>
                                    </div>
                                    <input type="date" className="form-control" id="datepicker" placeholder="Date of Birth" aria-label="" aria-describedby="basic-addon1" />
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Age</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your Age" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Contact Number</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your Contact Number" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Email Address</label>
                                <input className="form-control" type="text" name="" placeholder="Enter Your Email Address" />
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
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
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Upload Previous History/Report/Rescription</label>
                                <div className="upload_btn">
                                    <input type="file" id="upload_file" style={{ display: 'none' }} />
                                    <label htmlFor="upload_file">Upload File</label>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Department</label>
                                <select>
                                    <option defaultValue="Hospital">Hospital</option>
                                    <option defaultValue="Laboratory">Laboratory</option>
                                    <option defaultValue="Medical">Medical</option>
                                </select>
                            </Col>
                            <Col xl={4} lg={6} className="mt-2">
                                <label>Doctor</label>
                                <select>
                                    <option defaultValue="john Deo">Hospital</option>
                                    <option defaultValue="john Deo">Laboratory</option>
                                    <option defaultValue="john Deo">Medical</option>
                                </select>
                            </Col>
                        </Row>
                    </Container>
                  </section>
                <Footer />
             </div >
        )
    }
}