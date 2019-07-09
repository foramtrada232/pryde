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
import about from './images/about.svg';
import edu from './images/edu.svg';
import medNo from './images/medNo.svg';
import doctor1 from './images/doctor-1.svg';
import ENT from './images/ENT.svg';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Emotional_wellbeing_detail extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <div className="col-lg-7">
                                <div className="page_title">
                                    <h1>Emotional Wellbeing<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex flex-wrap align-content-center" style={{ height: 100 }}>
                                    <ul>
                                        <li>Patient</li>
                                        <li>Emotional Wellbeing</li>
                                    </ul>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
                    <div className="container">
                        <label>Just ask, that’s all it takes</label>
                        <div className="input_with_icont">
                            <input type="text" className="form-control" placeholder="Search for Emotional Wellbeing - Psychiatry & Psychology..." />
                            <Image src={search} alt="searct_icon" />
                        </div>
                    </div>
                </section>

                <section className="specialities">
                    <div className="container">
                        <div className="section_title">
                            <h2>Specialities<Image src={heartbeat} alt="heart beat icon" /></h2>
                            <div className="specialities_toggle_btn">
                                <a href="javascript:void(0);"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="specialities_toggle_menu" style={{ display: 'none' }}>
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={dermatology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Dermatology</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={ENT} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">ENT</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={dentistry} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Dentistry</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6  border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={general_GP} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">General Physician - GP</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={medicine} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Internal Medicine</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={Gastroenterology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Gastroenterology</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={Nutrition} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Nutrition & Dietetics</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6  border-bottom">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={doctor} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Obstetrics & Gynaecology</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={nurse} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Paediatrics</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="col-lg-3 col-sm-6 border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={psychiatry} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychiatry</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6 border-right">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={drug} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Psychology</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-3 col-sm-6">
                                    <a href="doctor_consulatation_doctor_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={syrings} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Pulmonology</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="family_doctor">
                    <div className="container">
                        <div className="section_title">
                            <h2>Dermatology<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <div className="family_doctor_des">
                            <div className="row">
                                <Col lg={4}>
                                    <ul className="nav nav-tabs row">
                                        <Col xl={6} md={6} mb={3} className="nav-item active">
                                            <a className="tab_link active" data-toggle="tab" href="#about">
                                                <Image src={about} />
                                                <p>About</p>
                                            </a>
                                        </Col>
                                        <li className="col-xl-6 col-md-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#education">
                                                <Image src={edu} />
                                                <p>Education</p>
                                            </a>
                                        </li>
                                        <li className="col-xl-6 col-md-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#experiance">
                                                <Image src={doctor} />
                                                <p>Experiance</p>
                                            </a>
                                        </li>
                                        <li className="col-xl-6 col-md-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#medicalRegNo">
                                                <Image src={medNo} />
                                                <p>Medical Registration No.</p>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="doctor_image">
                                        <Image src={doctor1} />
                                    </div>
                                </Col>
                                <Col lg={4} md={6}>
                                    <div className="doctor_details">
                                        <div className="doctor_name">
                                            <h4><span className="doctor_blue">Dr.</span> Archana Andavarapu</h4>
                                            <p>Dr. Archana Andavarapu - Consult A Pulmonologist Online Anytime | CallHealth, India</p>
                                        </div>
                                        <div className="doctor_overview">
                                            <h6>Derminology</h6>
                                            <p>5 Years of Experience</p>
                                            <p>English, Hindi, Telugu, Tamil</p>
                                        </div>
                                        <div className="doctor_consult">
                                            <h6>Consultation fee:</h6>
                                            <p><strike>&#8377 500</strike><span className="blue_price">249</span></p>
                                            <span className="gray_save">you saved: &#8377 251</span>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="about" >
                                <h3>About</h3>
                                <p>Dr. Archana Andavarapu is an academy-oriented Dermatologist & Cosmetologist who has 5 years of experience in the fields of Clinical & Cosmetic Dermatology with expertise in advanced Cosmetology, Venereology & Leprosy. He has presented & published various papers in the respective fields and has won a Gold Medal Post-graduation - 2015). The services offered are Skin biopsy, Electrocautery (removal of warts, skin tags, corns etc.), Chemical peeling, PRP (Platelet rich plasma - for hair treatment, Chronic non-healing ulcers, Facial rejuvenation), Derma rollers, Vitiligo surgeries, Nail surgeries & many more.</p>
                            </div>
                            <div className="tab-pane" id="education">
                                <h3>Education</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="experiance" className="tab-pane">
                                <h3>Experiance</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                            <div id="medicalRegNo" className="tab-pane">
                                <h3>Medical Registration No.</h3>
                                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                        </div>
                        <div className="radio_form">
                            <div className="row">
                                <div className="form-check mt_2">
                                    <input className="form-check-input" type="radio" name="consult" id="video" value="option1" defaultChecked />
                                    <label className="form-check-label text-center" htmlFor="video">Video</label>
                                </div>
                                <div className="form-check mt_2 mr_2">
                                    <input className="form-check-input" type="radio" name="consult" id="audio" value="option1" defaultChecked />
                                    <label className="form-check-label text-center" htmlFor="audio">Audio</label>
                                </div>
                                <div className="doctor_details mt_2">
                                    <a href="appoinment_booking_v3-2"><button className="px_2">consult</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}



