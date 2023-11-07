/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Home2 page component
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Home2: React.FC = () => {
	return (
		<Row>
			<Col md={12} className='home-about-social'>
				<ul className='home-about-social-links'>
					<li className='social-icons'>
						<a
							href='https://github.com/prakharrichhariya'
							target='_blank'
							rel='noreferrer'
							className='icon-colour  home-social-icons'
						>
							<AiFillGithub />
						</a>
					</li>

					<li className='social-icons'>
						<a
							href='https://www.linkedin.com/in/prakharrichhariya/'
							target='_blank'
							rel='noreferrer'
							className='icon-colour  home-social-icons'
						>
							<FaLinkedinIn />
						</a>
					</li>
					<li className='social-icons'>
						<a
							href='mailto:prakharrichhariya@gmail.com'
							target='_blank'
							rel='noreferrer'
							className='icon-colour  home-social-icons'
						>
							<GoMail />
						</a>
					</li>
				</ul>
			</Col>
		</Row>
	);
};
export default Home2;
