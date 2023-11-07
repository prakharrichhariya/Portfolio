/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Footer component of the app
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Footer: React.FC = () => {
	const date = new Date();
	const year = date.getFullYear();
	return (
		<Container fluid className='footer'>
			<Row>
				<Col md='4' className='footer-copywright'>
					<h3>Copyright © {year} | Prakhar Richhariya</h3>
				</Col>
				<Col md='4' className='footer-copywright'>
					<div />
				</Col>
				<Col md='4' className='footer-body'>
					<ul className='footer-icons'>
						<li className='social-icons'>
							<a
								href='https://github.com/prakharrichhariya'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<AiFillGithub />
							</a>
						</li>

						<li className='social-icons'>
							<a
								href='https://www.linkedin.com/in/prakharrichhariya/'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className='social-icons'>
							<a
								href='mailto:prakharrichhariya@gmail.com'
								style={{ color: 'white' }}
								target='_blank'
								rel='noopener noreferrer'
							>
								<GoMail />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
