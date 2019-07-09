import React from 'react';
import { Col, Container, Row, FormControl, InputGroup } from 'react-bootstrap';

export default class Search_special extends React.Component {
    render() {

        return (
            <div>
                <div className="all_page_search_section">
                    <Container>
                        <label>See a Specialist from home within minutes.</label>
                        <Row>
                            <Col xl={4} lg={6}>
                                <div className="geolocation">
                                    <InputGroup className="mb-3">
                                        <FormControl
                                            placeholder="Search for Doctors by geolocation..."
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>
                                    {/* <input type="text" className="form-control" placeholder="Search for Doctors by geolocation..." /> */}
                                </div>
                            </Col>
                            <Col xl={4} lg={6}>
                                <div className="search_symptom">
                                    <select className="js-example-basic-single" name="state">
                                        <option value="" selected disabled>Search for Doctors by symptoms...</option>
                                        <option value="AB">Abdominal pain</option>
                                        <option value="BL">Blood in stool</option>
                                        <option value="CH">Chest pain</option>
                                        <option value="CON">Constipation</option>
                                        <option value="COU">Cough</option>
                                    </select>
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
                                <div className="col-lg-10 col-md-12">
                                    <Row>
                                        <div className="col-lg col-md-12">
                                            <p>City</p>
                                            <select>
                                                <option value="Ahmedabad">Ahmedabad</option>
                                                <option value="Rajkot">Rajkot</option>
                                                <option value="Jamnagar">Jamnagar</option>
                                                <option value="Morbi">Morbi</option>
                                            </select>
                                        </div>
                                        <div className="col-lg col-md-12">
                                            <p>Area</p>
                                            <select>
                                                <option value="">Shivranjani</option>
                                                <option value="">Nehrunagar</option>
                                                <option value="">Kalupur</option>
                                                <option value="">Chandlodiya</option>
                                            </select>
                                        </div>
                                        <div className="col-lg col-md-12">
                                            <p>Location</p>
                                            <input type="text" name="" className="form-group" placeholder="X-ray Clinic, B-110, Doctor House," />
                                        </div>
                                        <div className="col-lg col-md-12">
                                            <p>Pin Code</p>
                                            <input type="text" name="" className="form-group" placeholder="333222" />
                                        </div>
                                    </Row>
                                </div>
                                <div className="col-lg-2 col-md-12">
                                    <a href="appoinment_booking_v3-3.html" className="w-100"><button className="btn search_btn">Search</button></a>
                                </div>
                            </Row>
                        </div>
                        <div className="hospital_menu" style={{ display: 'none' }}>
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <p>City</p>
                                    <select>
                                        <option value="Ahmedabad">Ahmedabad</option>
                                        <option value="Rajkot">Rajkot</option>
                                        <option value="Jamnagar">Jamnagar</option>
                                        <option value="Morbi">Morbi</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <p>Area</p>
                                    <select>
                                        <option value="">Shivranjani</option>
                                        <option value="">Nehrunagar</option>
                                        <option value="">Kalupur</option>
                                        <option value="">Chandlodiya</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <p>Location</p>
                                    <input type="text" name="" className="form-group" placeholder="X-ray Clinic, B-110, Doctor House," />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <p>Pin Code</p>
                                    <input type="text" name="" className="form-group" placeholder="333222" />
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <p>Hospital Associated With Pryde</p>
                                    <select>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                        <option value="">Indovasc Hospital</option>
                                    </select>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                    <a href="appoinment_booking_v3-3.html" className="w-100"><button className="btn search_btn">Search</button></a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}