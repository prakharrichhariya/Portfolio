/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Experience Card component
 */

import { Card, List, Typography } from 'antd';
import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

interface IProps {
	jobTitle: string;
	companyName: string;
	jobDescription: string[];
}

const ExperienceCard: React.FC<IProps> = (props) => {
	const { jobTitle, jobDescription, companyName } = props;
	return (
		<Card bordered={false} className='project-card-view work-ex-cards' hoverable>
			<div>
				<Typography.Text strong style={{ fontSize: 20, color: 'white' }}>
					{jobTitle}
				</Typography.Text>
			</div>
			<div>
				<Typography.Text style={{ color: '#c770f0', fontSize: 16 }} type='secondary'>
					{companyName}
				</Typography.Text>
			</div>
			<List
				dataSource={jobDescription}
				renderItem={(item) => {
					return (
						<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: 10 }}>
							<div>
								<FaDotCircle color='#c770f0' size={10} />
							</div>
							<div>
								<Typography.Text style={{ color: 'white' }}>{item}</Typography.Text>
							</div>
						</div>
					);
				}}
			/>
		</Card>
	);
};

export default ExperienceCard;
