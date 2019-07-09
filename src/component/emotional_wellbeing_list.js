import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
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
import doctor1 from './images/doctor-1.svg';
import doctor2 from './images/doctor-2.png';
import doctor3 from './images/doctor-3.png';
import ENT from './images/ENT.svg';
import line1 from './images/1.svg';
import line2 from './images/2.svg';
import line3 from './images/3.svg';
import line4 from './images/4.svg';
import line5 from './images/5.svg';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Emotional_wellbeing_list extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Emotional Wellbeing<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center" >
                                    <ul>
                                        <li>Patient</li>
                                        <li>Emotional Wellbeing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section pb-5">
                    <Container>
                        <label>Just ask, that’s all it takes</label>
                        <div className="input_with_icont">
                            <input type="text" className="form-control" placeholder="Search for Emotional Wellbeing - Psychiatry & Psychology..." />
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </Container>
                </section>

                <section className="specialities">
                    <Container>
                        <div className="section_title">
                            <h2>Specialities<Image src={heartbeat} alt="heart beat icon" /></h2>
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
                                <Col lg={3} sm={6} className="border-bottom">
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

                <section className="dermatology py-5">
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor1} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: &#8377 251</span>
                                        </div>
                                        <a href="emotional_wellbeing_detail"><button className="px-5 py-3 mt-3 ml-0" type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line4} alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line5} alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <hr />
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor2} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: &#8377 251</span>
                                        </div>
                                        <a href="emotional_wellbeing_detail"><button className="px-5 py-3 mt-3 ml-0" type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line4} alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line5} alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <hr />
                    <Container>
                        <div className="dermatology_doctor_detail">
                            <Row>
                                <Col lg={4}>
                                    <div className="doctor_image">
                                        <Image src={doctor3} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Doctor Overview</h6>
                                            <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist and Cosmetologist who has 5 years of experience in the fields of Clinical and Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology and Leprosy. He has presented and published various papers in the...</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: &#8377 251</span>
                                        </div>
                                        <a href="emotional_wellbeing_detail"><button className="px-5 py-3 mt-3 ml-0" type="button">Consult</button></a>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line1} alt="line image" />
                                        <p>Qualification:</p>
                                        <p>MBBS,MD (DVL)</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line2} alt="line image" />
                                        <p>Speciality:</p>
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line3} alt="line image" />
                                        <p>Years of Experience:</p>
                                        <p>5</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line4} alt="line image" />
                                        <p>Available days:</p>
                                        <p>Mon - Sat</p>
                                    </a>
                                </Col>
                                <Col xl lg={3} md={4} sm={6}>
                                    <a href="#" className="dermatology_info d-flex flex-wrap align-content-center">
                                        <Image src={line5} alt="line image" />
                                        <p>Available timings: </p>
                                        <p>	08:00 AM to 03:00 PM</p>
                                    </a>
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



