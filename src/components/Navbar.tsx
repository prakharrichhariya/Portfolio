/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Navigation bar for app
 */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const [navColor, setNavColor] = useState(false);

	function scrollHandler() {
		if (window.scrollY >= 20) {
			setNavColor(true);
		} else {
			setNavColor(false);
		}
	}

	window.addEventListener('scroll', scrollHandler);

	return (
		<Navbar expanded={expanded} fixed='top' expand='md' className={navColor ? 'sticky' : 'navbar'}>
			<Container>
				<Navbar.Brand href='/' className='d-flex'>
					<img src='./logo192.png' className='img-fluid logo' alt='brand' />
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls='responsive-navbar-nav'
					onClick={() => {
						setExpanded(expanded ? false : true);
					}}
				>
					<span />
					<span />
					<span />
				</Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto' defaultActiveKey='#home'>
						<Nav.Item>
							<Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>
								<AiOutlineHome style={{ marginBottom: '2px' }} /> Home
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to='/about' onClick={() => setExpanded(false)}>
								<AiOutlineUser style={{ marginBottom: '2px' }} /> About
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to='/project' onClick={() => setExpanded(false)}>
								<AiOutlineFundProjectionScreen style={{ marginBottom: '2px' }} /> Projects
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link as={Link} to='/resume' onClick={() => setExpanded(false)}>
								<CgFileDocument style={{ marginBottom: '2px' }} /> Resume
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
