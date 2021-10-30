import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"

import useFirebase from '../../hooks/useFirebase';


const Header = () => {
    const { user, logOut } = useFirebase();

    // Header section 
    return (
        <div>
            <Navbar sticky="top" bg="dark" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Wanderers tour</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav >

                            <Nav.Link as={Link} to="/home">Home</Nav.Link>

                            <Nav.Link className="navlink" as={Link} to="/services">Services</Nav.Link>
                            {user?.email ? (
                                <>
                                    <NavLink className="nav-link" to="/addservice">
                                        Add a service
                                    </NavLink>
                                    <NavLink className="nav-link" to="/myorder">
                                        My-Orders
                                    </NavLink>
                                    <NavLink className="nav-link" to="/manageservice">
                                        Manage Services
                                    </NavLink>
                                    <NavLink className="nav-link" to="/profile">
                                        <small>
                                            Log in as:{" "}
                                            <span className="text-warning fw-bold">
                                                {user.displayName}
                                            </span>
                                        </small>
                                    </NavLink>
                                    <NavLink className="nav-link" to="/profile">
                                        <img src={user.photoURL} alt="" className="profile-img " />
                                    </NavLink>
                                    <Button className="btn btn-warning fw-bold" onClick={logOut}>Log Out</Button>
                                </>
                            ) : (
                                <NavLink className="nav-link" to="/login">
                                    <Button>Login</Button>
                                </NavLink>
                            )}

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;