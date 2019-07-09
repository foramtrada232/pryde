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

export default class Doctor_consulatation extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center" >
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
                            <h2 className="mb-0">Specialities<Image src={heartbeat} alt="heart beat icon" /></h2>
                            {/* <div className="specialities_toggle_btn">
					<a href="javascript:void(0);"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
				</div>  */}
                        </div>
                        <div className="specialities_toggle_menu">
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
                                <Col lg={3} sm={6} className=" border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={general_GP} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">General Physician - GP</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={medicine} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Internal Medicine</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={Gastroenterology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Gastroenterology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={Nutrition} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Nutrition & Dietetics</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className=" border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={doctor} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Obstetrics & Gynaecology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={nurse} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Paediatrics</p>
                                        </div>
                                    </a>
                                </Col>

                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={psychiatry} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychiatry</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} className="border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
                                            <Image src={drug} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} >
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image mt-0">
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

                <section className="see_how_it_work">
                    <Container>
                        <div className="section_title">
                            <h2 className="text-black pb-0">See how it works<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                            aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                            sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
			pariatur?</p>
                    </Container>
                </section>

                <Footer />
            </div>
        )
    }
}



