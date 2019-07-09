import React from 'react';
import { Image, Col, Row, Container } from 'react-bootstrap';
//Images
import heartbeat from './images/light_blue_heart_beat_icon.svg';
import search from './images/search.svg';
import dermatology from './images/dermatology.svg';
import ENT from './images/ENT.svg';
// Import Components
import Header from './header';
import Footer from './footer';

export default class Emotional_wellbeing extends React.Component {

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
                                <div className="d-flex flex-wrap align-content-center">
                                    <ul>
                                        <li>Patient</li>
                                        <li>Emotional Wellbeing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="all_page_search_section">
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
                            {/* <div className="specialities_toggle_btn">
                        <a href="javascript:void(0);"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                    </div>  */}
                        </div>
                        <div className="specialities_toggle_menu">
                            <div className="row">
                                <Col lg={3} sm={6} className="border-right">
                                    <a href="emotional_wellbeing_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={dermatology} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">Dermatology</p>
                                        </div>
                                    </a>
                                </Col>
                                <Col lg={3} sm={6} >
                                    <a href="emotional_wellbeing_list" className="d-flex flex-wrap align-content-center">
                                        <div className="feature_detail_card_blue blue_image">
                                            <Image src={ENT} alt="line image" />
                                            <hr />
                                            <p className="text-dark font_bold">ENT</p>
                                        </div>
                                    </a>
                                </Col>
                            </div>
                        </div>
                    </Container>
                </section>

                <section className="see_how_it_work">
                    <Container>
                        <div className="section_title">
                            <h2 className="text-black">See how it works<Image src={heartbeat} alt="heart beat icon" /></h2>
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


