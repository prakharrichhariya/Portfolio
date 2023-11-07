/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Experience Component
 */

import React from 'react';

import Particle from '../Particle';
import { Col, Container, Row } from 'react-bootstrap';
import { ConfigProvider, Timeline, Typography } from 'antd';

import ExperienceCard from './ExperienceCard';
import workExPng from '../../Assets/workEx.png';
import companyLogo from '../../Assets/314e_corporation_logo.jpeg';
import expressRCMLogo from '../../Assets/expressrcm_logo.jpeg';

const Experience: React.FC = () => {
	return (
		<section>
			<Container fluid className='about-section'>
				<Particle />
				<Container>
					<Row style={{ justifyContent: 'center', padding: '10px' }}>
						<Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className='about-img'>
							<img src={workExPng} alt='about' className='img-fluid' />
						</Col>
						<Col
							md={7}
							style={{
								justifyContent: 'center',
								paddingTop: '10px',
							}}
						>
							<h1 style={{ fontSize: '2.1em', paddingBottom: '30px' }}>Current Work Experience</h1>
							<ConfigProvider
								theme={{
									components: {
										Timeline: {
											tailWidth: 7,
											tailColor: 'rgba(222, 130, 235, 0.911)',
										},
									},
								}}
							>
								<Timeline
									className='work-ex-timeline'
									mode='left'
									items={[
										{
											label: (
												<div>
													<Typography.Text style={{ fontSize: 20, color: 'white' }}>
														July, 2021 - Present
													</Typography.Text>
												</div>
											),
											dot: <img className='work-ex-logo' src={companyLogo} />,
											children: (
												<ExperienceCard
													jobTitle='React Developer'
													companyName='314e Corporation'
													jobDescription={[
														'Developed a comprehensive platform leveraging ReactJS, AntD, Redux, TypeScript, and CSS to enhance EHR user workflows through training and microlearning support and successfully deployed the platform in over six hospitals, optimizing their EHR operations and user experience.',
														'Currently contributing to the creation of a cutting-edge front-end for an interface engine tailored for healthcare organizations.',
														'Enhanced code quality and development efficiency by meticulously crafting comprehensive unit test cases.',
														"Designed and integrated a diverse set of features, encompassing Chatbot, Billing and Subscription, Search Results, Recommendations, Insights Dashboard, Alert and To-Dos, User Management, Kanban Board, and Rich-Text Editor, to enhance the platform's functionality and user experience.",
													]}
												/>
											),
										},
										{
											label: (
												<div>
													<Typography.Text style={{ fontSize: 20, color: 'white' }}>
														June, 2021 - July, 2021
													</Typography.Text>
												</div>
											),
											dot: <img className='work-ex-logo' src={expressRCMLogo} />,
											children: (
												<ExperienceCard
													jobTitle='Software Engineering Intern'
													companyName='ExpressRCM Private Limited'
													jobDescription={[
														'Acquired a foundational understanding of the Software Development Life Cycle (SDLC) and Agile methodologies, while gaining exposure to a spectrum of industry-relevant technologies.',
														'Underwent training in web development, mastering essential technologies such as HTML, CSS, JavaScript, SQL, and ReactJS, to build a strong foundation in web application development.',
													]}
												/>
											),
										},
									]}
								/>
							</ConfigProvider>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Experience;
