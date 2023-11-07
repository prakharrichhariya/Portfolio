/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Component for Home Page
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Particle from '../Particle';
import TypewriterEffect from './TypewriterEffect';
import { Typography } from 'antd';

const Home: React.FC = () => {
	return (
		<section>
			<Container fluid className='home-section' id='home'>
				<Particle />
				<Container className='home-content'>
					<Row>
						<Col md={7} className='home-header'>
							<h1 style={{ paddingBottom: 15 }} className='heading'>
								Hi There!{' '}
							</h1>

							<h1 className='heading-name'>
								I&apos;m
								<strong className='main-name'> Prakhar Richhariya</strong>
							</h1>
							<div style={{ paddingLeft: 45 }}>
								<Typography.Text style={{ color: 'white', fontSize: 25 }}>
									I am a skilled Front-end Developer who&apos;s passionate about crafting engaging and
									responsive user interfaces. With a knack for creating seamless digital experiences,
									I&apos;m committed to delivering top-notch web applications that captivate and
									delight users.
								</Typography.Text>
							</div>

							<div style={{ padding: '50px 50px 50px 45px', textAlign: 'left' }}>
								<TypewriterEffect />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img
								src={'home-main.svg'}
								alt='home-pic'
								className='img-fluid'
								style={{ maxHeight: '450px' }}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Home;
