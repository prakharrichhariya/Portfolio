/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description About Page component
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Particle from '../Particle';
import Aboutcard from './AboutCard';
import Home2 from '../Home/Home2';

const About: React.FC = () => {
	return (
		<Container fluid className='about-section'>
			<Particle />
			<Container>
				<Row style={{ justifyContent: 'center', padding: '10px' }}>
					<Col
						md={7}
						style={{
							justifyContent: 'center',
							paddingTop: '30px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<h1 style={{ fontSize: '2.1em' }}>About Me</h1>
						<Aboutcard />
						<Home2 />
					</Col>
					<Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className='about-img'>
						<img src={'./about.png'} alt='about' className='img-fluid' />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default About;
