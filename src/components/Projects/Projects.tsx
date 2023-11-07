/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Projects component page
 */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import smapp from '../../Assets/Projects/smapp.png';
import travelapp from '../../Assets/Projects/travelapp.png';

const Projects: React.FC = () => {
	return (
		<Container fluid className='project-section'>
			<Particle />
			<Container
				style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<h1 style={{ fontSize: '2.1em', color: 'white' }}>My Projects</h1>
				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={6} className='project-card'>
						<ProjectCard
							imgPath={smapp}
							title='Social Media App'
							description='Created a state-of-the-art social media application, which not only boasts an elegant and mobile-native user interface but also includes a comprehensive range of modern social media features. Users can effortlessly move between a Home Page, Explore feed, Saved posts, and have the capability to both create and search for posts.'
							techStack={['ReactJS', 'React Query', 'Tailwind CSS']}
						/>
					</Col>

					<Col md={6} className='project-card'>
						<ProjectCard
							imgPath={travelapp}
							title='Travel App'
							description='Crafted an advanced travel application, rich in features, powered by the latest Next.js 13, and adorned with an elevated user interface design using Tailwind CSS. This all-encompassing travel app strictly follows mobile-first best practices, guaranteeing a smooth and effortless user experience.'
							techStack={['Next.js', 'Tailwind CSS']}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Projects;
