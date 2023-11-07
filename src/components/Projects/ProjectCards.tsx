/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Cards for project component
 */
import { Tag } from 'antd';
import React from 'react';
import Card from 'react-bootstrap/Card';

interface IProps {
	title: string;
	description: string;
	imgPath: any;
	techStack: string[];
}

const ProjectCards: React.FC<IProps> = (props) => {
	return (
		<Card key={props.title} className='project-card-view project-bootstrap-card'>
			<Card.Img variant='top' src={props.imgPath} alt='card-img' />
			<Card.Body className='flex-col-align-center'>
				<Card.Title style={{ color: '#c770f0' }}>{props.title}</Card.Title>
				<Card.Text style={{ textAlign: 'justify' }}>{props.description}</Card.Text>
				<Card.Text style={{ justifyContent: 'center' }}>
					{props.techStack.map((item) => (
						<Tag color='#c770f0' key={item}>
							{item}
						</Tag>
					))}
				</Card.Text>
			</Card.Body>
		</Card>
	);
};
export default ProjectCards;
