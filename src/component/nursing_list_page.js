import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import atbirth from './images/atbirth.svg';
import child from './images/child.svg';
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

export default class Nursing_list_page extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center">
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
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={dermatology} alt="line image" />
                                        <p>Dermatology</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={ENT} alt="line image" />
                                        <p>ENT</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={dentistry} alt="line image" />
                                        <p>Dentistry</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={general_GP} alt="line image" />
                                        <p>General Physician - GP</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={medicine} alt="line image" />
                                        <p>Internal Medicine</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={Gastroenterology} alt="line image" />
                                        <p>Gastroenterology</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={Nutrition} alt="line image" />
                                        <p>Nutrition & Dietetics</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={doctor} alt="line image" />
                                        <p>Obstetrics & Gynaecology</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={nurse} alt="line image" />
                                        <p>Paediatrics</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={psychiatry} alt="line image" />
                                        <p>Psychiatry</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={drug} alt="line image" />
                                        <p>Psychology</p>
                                    </a>
                                </Col>
                                <Col xl={2} lg={3} md={4} sm={6}>
                                    <a href="doctor_consulatation_doctor_list.html" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                        <Image src={syrings} alt="line image" />
                                        <p>Pulmonology</p>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="family_doctor">
                    <Container>
                        <div className="section_title">
                            <h2 className="pb-0">Vaccination-child-vaccination<Image src={heartbeat} alt="heart beat icon" /></h2>
                        </div>
                        <Row>
                            <Col xl={8} lg={6} md={12}>
                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price">&#8377 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price">&#8377 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>

                                <div className="pain_mangement_main">
                                    <div className="pain_management baby_care_border">
                                        <p className="font_bold fs">BCG (BCG Vaccine) - Child Vaccination</p>
                                        <p>BCG Vaccine for Child: Endless waiting and multiple trips to a hospital / clinic can be exhausting and in many instances expensive. CallHealth provides BCG vaccination for Children within the comfort of your home at no additional cost. Our experienced nurses will ensure that these vaccinations are administered with utmost care. Reach out to us! <span className="blue_font">[more]</span></p>
                                        <p className="blue_price">&#8377 460.27</p>
                                        <div className="doctor_details mt_2">
                                            <button className="ml-0">book an assessment</button>
                                        </div>
                                    </div>
                                    <div className="pain_management_list">
                                        <Row>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={atbirth} alt="line image" />
                                                    <p>At birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={const_img} alt="line image" />
                                                    <p>Recommended at Birth</p>
                                                </a>
                                            </Col>
                                            <Col lg={4} md={4}>
                                                <a href="#" className="speciality_menu_links d-flex flex-wrap align-content-center">
                                                    <Image src={child} alt="line image" />
                                                    <p>Given intradermally</p>
                                                </a>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={6} md={12}>
                                <div className="pain_mangement_right">
                                    <div className="section_title">
                                        <h2>Popular with Pryde<Image src={heartbeat} alt="heart beat icon" /></h2>
                                    </div>

                                    <Row>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">NURSING CARE (BASIC NURSING) - 12 HOURS </p>
                                                <p><span className="blue_price" >&#8377 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">POST SURGICAL CARE(ADVANCED NURSING) - 12 HOURS</p>
                                                <p><span className="blue_price" >&#8377 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
                                            <div className="baby_care text-center">
                                                <Image src={serinze} />
                                                <p className="text_upper font_bold">MOTHER AND CHILD CARE(ADVANCED NURSING) - 12 HOURS</p>
                                                <p><span className="blue_price" >&#8377 1,200</span></p>
                                                <div className="doctor_details mt_2">
                                                    <button className="ml-0">Book an Assessment</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={12} md={6}>
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



