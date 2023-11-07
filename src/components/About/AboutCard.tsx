/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description About Card for About page
 */
import { Typography } from 'antd';
import React from 'react';
import Card from 'react-bootstrap/Card';

const AboutCard: React.FC = () => {
	return (
		<Card className='quote-card-view'>
			<Card.Body>
				<blockquote className='blockquote mb-0'>
					<Typography.Paragraph style={{ textAlign: 'left', fontSize: '1.25rem', color: 'white' }}>
						Hi! I&apos;m <Typography.Text className='purple'>Prakhar Richhariya</Typography.Text>, a
						passionate and dedicated
						<Typography.Text className='purple'> Front-end Developer</Typography.Text>, currently working at{' '}
						<Typography.Text className='purple'>314e Corporation</Typography.Text>. In my current role,
						I&apos;m responsible to create clean and responsive user interfaces for two products, one is a
						cutting-edge training and micro-learning platform, and another one is an advanced interface
						engine for healthcare organizations.
						<br />
						My educational journey began at{' '}
						<Typography.Text className='purple'>Delhi Public School, Korba</Typography.Text>, and I earned
						my bachelor&apos;s degree from the prestigious{' '}
						<Typography.Text className='purple'>National Institute of Technology Raipur</Typography.Text>.
						<br />
						I have a strong passion for staying updated on the latest in technology and the business world.
						Beyond coding, I find inspiration in travel and the wisdom found in books, particularly those
						focused on personal growth and finance.
						<br />
						In the workplace, my ability to make quick, analytical decisions and provide innovative
						solutions is complemented by strong interpersonal and organizational skills, making me an
						effective collaborator within diverse teams.
						<br />
						I&apos;m always eager to learn and grow together, feel free to reach out to me using any of
						these platforms.
					</Typography.Paragraph>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default AboutCard;
