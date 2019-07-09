import React from 'react';
import { Image, Button, Nav, Navbar, NavDropdown, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import Logo from './images/prydeLogo.svg';
import search from './images/search.svg';


export default class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="header">

                    <div className="header_content">
                        <div className="logo">
                            <a href="index.html" >
                                <Image
                                    src={Logo}
                                    alt="logo_image"
                                />
                            </a>
                        </div>
                        <div className="header_menu">
                            <Navbar collapseOnSelect expand="xl">
                                <Navbar.Toggle aria-controls="#responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="navbar-nav justify-content-end">
                                        <Nav.Item>
                                            <Nav.Link href="#">Home</Nav.Link>
                                        </Nav.Item>
                                        <NavDropdown id="navbardrop_patient" className="mydropdown" title="Patient">
                                            <Row className="m-0">
                                                <Col xl={6} className="p-0">
                                                    <NavDropdown.Item href="doctor_consulatation.html">Doctor Consultation</NavDropdown.Item>
                                                    <NavDropdown.Item href="searchClinic.html">Search Clinic</NavDropdown.Item>
                                                    <NavDropdown.Item href="my_appointment.html">My Appointment</NavDropdown.Item>
                                                    <NavDropdown.Item href="family_doctor.html">Family Doctor</NavDropdown.Item>
                                                    <NavDropdown.Item href="lab_booking_radiology.html">Radiologist - Lab Booking</NavDropdown.Item>
                                                    <NavDropdown.Item href="lab_booking_pathology.html">Pathologist - Lab Booking</NavDropdown.Item>
                                                    <NavDropdown.Item href="physiotherapy.html">Physiotherapy</NavDropdown.Item>
                                                    <NavDropdown.Item href="nursing.html">Nursing</NavDropdown.Item>
                                                    <NavDropdown.Item href="emotional_wellbeing.html">Emotional Wellbeing</NavDropdown.Item>
                                                </Col>
                                                <Col xl={6} className="p-0">
                                                    <NavDropdown.Item href="secondOpinion.html">Second Opinion</NavDropdown.Item>
                                                    <NavDropdown.Item href="follow_Up_Consultation.html">Follow Up Consultation</NavDropdown.Item>
                                                    <NavDropdown.Item href="medicine_supply.html">Medicine Supply</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">Medical Equipment Supply</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">New Born Baby & Mother Care at Home</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">Smart Ambulance</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">AI Based Patient Summary & Suggestions</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">Online Payment Mechanism</NavDropdown.Item>
                                                    <NavDropdown.Item href="#">eHR at Patient</NavDropdown.Item>
                                                </Col>
                                            </Row>
                                        </NavDropdown>
                                        <NavDropdown id="navbardrop_doctor" title="Doctor">
                                            <NavDropdown.Item href="#">OPD Scheduler</NavDropdown.Item>
                                            <NavDropdown.Item href="#">IPD Scheduler</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Doctor Calendar</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Doctor Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Online Consultation</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Share Prescription</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Syncing with Patient Calendar</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Patient Conversation from OPD to IPD</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown id="navbardrop_individual_OPD" title="Individual OPD">
                                            <NavDropdown.Item href="#">Vitals for Walk-in , Online & Offfline Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Scan Prescription/Report for Non-registered Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Booking Slot / Doctor's Appointment</NavDropdown.Item>
                                            <NavDropdown.Item href="patient_register.html">Patient Registration</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown id="product_and_services" title="Product & Services">
                                            <NavDropdown.Item href="#">Smart Discovery</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Smart OPD</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Smart IPD</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Smart Remote Patient</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Smart Ambulance</NavDropdown.Item>
                                            <NavDropdown.Item href="#">Smart Health Care</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Item>

                                            <Nav.Link href="#">About Us</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>

                                            <Nav.Link href="#">Contact Us</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <Navbar className="login_register">
                                <Nav>
                                    <NavDropdown id="navbardrop_register" title="Register For Free">
                                        <NavDropdown.Item href="doctor_register.html">Register as Doctor</NavDropdown.Item>
                                        <NavDropdown.Item href="patient_register.html">Register as Patient</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown id="navbardrop_login" title="Login">
                                        <NavDropdown.Item href="doctor_login.html">Login as Doctor</NavDropdown.Item>
                                        <NavDropdown.Item href="patient_login.html">Login as Patient</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar>
                        </div>
                    </div>
                    <div className="right_side_search">
                        <div className="side_search_content text-white">
                            <a className="search_control_btn" href="#">
                                <Image
                                    src={search}
                                    alt="icon search" />
                            </a>
                            <div className="scroll_for_mobile">
                                <h6>Search Anything:</h6>
                                <p>We provide the most full medical services, so every person could have the opportunity</p>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Search anything here..."
                                        aria-label="search anything"
                                    />
                                </InputGroup>
                                <Button className="side_search_btn">Search</Button>
                                <h6>Opening Hours:</h6>
                                <p>These are our normal opening hours. When we are closed can be found here.</p>
                                <div className="working_days_and_time">
                                    <span className="float-left">Monday - Saturday</span>
                                    <span className="float-right">8.30 – 17.00</span>
                                </div>
                                <hr />
                                <div className="working_days_and_time">
                                    <span className="float-left">Sunday</span>
                                    <span className="float-right">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}