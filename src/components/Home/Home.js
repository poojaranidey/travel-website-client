import React from 'react';
import { Accordion, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../Services/Services';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9121.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/taking-path-mountains_1098-12856.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '93vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src="https://image.freepik.com/free-photo/happy-hipster-company-friends-traveling-around-world_285396-3653.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1 className="heading text-uppercase ">Your Journeys begins</h1>
                            <p className="tag-p">A journey of a 1000 miles begins with a single step</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="text-center mt-5" id="clinic">
                <h1 classname="h1-tag">Welcome!</h1>
                <p className="p-tag">Travel track</p>
            </div>
            <Container>
                <div className="row align-items-center mb-5">
                    <div className="col-12 col-md-6">
                        <div>
                            <img className="w-100 " src="https://images.unsplash.com/photo-1502290111511-6c068a24a173?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="welcome-details m-3 p-5">
                            <h1>
                                A Simply Perfect Place To Get Lost</h1>
                            <p className="fw-bold ">Treat yourself with a journey to your inner self. Visit a mystique Tibet and start your spiritual adventure. We promise, you’ll enjoy every step you make.!</p>

                            <Link to="/contact"><button type="button" className="btn btn-warning fw-bold">See Details</button></Link>
                        </div>
                    </div>

                </div>
            </Container>
            <div>
                <Services></Services>
            </div>


            <div className="mb-5 pb-2 accordition-items">

                <section className="container mt-5 pb-3">
                    <h1 className="fw-bold text-center  mt-2">People Why Choose Our Agancy
                    </h1>
                    <div className="row align-items-center">

                        <div className="col-lg-6 ">
                            <Accordion >
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        We are building a bigger community of responsible travellers </Accordion.Header>
                                    <Accordion.Body>
                                        We are building a bigger community of responsible travellers by providing information on responsible travel throughout our website and online magazine, Days to Come.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        To make it easy for travellers to tour responsibly</Accordion.Header>
                                    <Accordion.Body>
                                        We are showcasing how operators incorporate sustainability into their tours, so you know exactly what impact your trip can have.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        To connect people to life-enriching travel experiences</Accordion.Header>
                                    <Accordion.Body>
                                        ourRadar has been built on the guiding belief that travel has the ability to not only enrich our lives but the lives of all living things around us. We believe that travel is a superpower
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>You Need to Know About Journeys Are Best Measured In New Friends </Accordion.Header>
                                    <Accordion.Body>
                                        We always have and always will strive to connect people to life-enriching travel experiences, and that means playing our part in protecting the planet.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                        </div>
                        <div className="col-lg-6">
                            <img src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/03/tour-2-img-2-550x550.jpg" className="w-100 p-5" alt=""></img>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;