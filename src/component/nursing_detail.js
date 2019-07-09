import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import about from './images/about.svg';
import search from './images/search.svg';
import why from './images/why.svg';
import do_img from './images/do.svg';
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
import const_img from './images/const.svg';
import serinze from './images/serinze.svg';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Nursing_detail extends React.Component {

    render() {

        return (
            <div>
                <Header />
                <section className="page_breadcrumb">
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="page_title">
                                    <h1>Nursing<Image src={heartbeat} alt="heart beat icon" /></h1>
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="d-flex flex-wrap align-content-center" >
                                    <ul>
                                        <li>Patient</li>
                                        <li>Nursing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
                    <Container>
                        <label>Care & Support for your lobed ones.</label>
                        <div className="input_with_icont">
                            <input type="text" className="form-control" placeholder="Search for Nursing Services and more…" />
                            <Image src={search} alt="searct_icon" />
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
                                <Col lg={3} sm={6} className="border-bottom">
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
                                <Col lg={3} sm={6}>
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
                <section className="family_doctor">
                    <Container>
                        <div className="section_title">
                            <h2>BCG (BCG Vaccine) - Child Vaccination<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <div className="family_doctor_des">
                            <Row>
                                <Col xl={4} lg={6}>
                                    <ul className="nav nav-tabs row details">
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item active">
                                            <a className="tab_link" data-toggle="tab" href="#about">
                                                <Image src={about} />
                                                <p>What is this</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#education">
                                                <Image src={why} />
                                                <p>Why is it done</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#medicalRegNo">
                                                <Image src={do_img} />
                                                <p>Do's & Don'ts</p>
                                            </a>
                                        </li>
                                        <li className="col-md-6 col-sm-6 mb-3 nav-item">
                                            <a className="tab_link" data-toggle="tab" href="#Contra">
                                                <Image src={const_img} />
                                                <p>Contraindications</p>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xl={8} lg={6}>
                                    <div className="tab-content details">
                                        <div className="tab-pane active" id="about" >
                                            <span className="font_bold fs">BCG Vaccine for Child:</span>
                                            <span>Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us!</span>
                                            <p className="blue_price">&#8377 460.27</p>
                                            <div className="doctor_details mt_2">
                                                <button className="mt-5">Book an Assessment</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="education">
                                            <h3>Why is it done</h3>
                                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                        <div id="medicalRegNo" className="tab-pane">
                                            <h3>Do's & Don'ts</h3>
                                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        </div>
                                        <div id="Contra" className="tab-pane">
                                            <h3>Contraindications</h3>
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                    </Container>
                </section>
                <section className="details_des_section">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} className="border-right">
                                <p className="font_bold">Number of Doses :</p>
                                <ul>
                                    <li>At birth</li>
                                </ul>
                            </Col>
                            <Col lg={6} md={6}>
                                <p className="font_bold">Recommended For :</p>
                                <ul>
                                    <li>Recommended at Birth.</li>
                                    <li>Given intradermally.</li>
                                    <li>Sudden weight loss.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* only class use here for background img  */}
                <section className="specialities py-5">
                    <Container>
                        <div className="section_title">
                            <h2>Popular with Pride<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">NURSING CARE (BASIC NURSING) - 12 HOURS </p>
                                    <p><span className="blue_price" >&#8377 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="mt-4 ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">POST SURGICAL CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" >&#8377 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">MOTHER AND CHILD CARE(ADVANCED NURSING) - 12 HOURS</p>
                                    <p><span className="blue_price" >&#8377 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={3} lg={4} md={6}>
                                <div className="baby_care text-center">
                                    <Image src={serinze} />
                                    <p className="text_upper font_bold">PALLIATIVE CARE / END OF LIFE CARE (ADVANCED NURSING) - 24 HOURS</p>
                                    <p><span className="blue_price" >&#8377 1,200</span></p>
                                    <div className="doctor_details mt_2">
                                        <button className="ml-0">Book an Assessment</button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <Footer />
            </div >
        )
    }
}



