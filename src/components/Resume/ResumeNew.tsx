/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Resume page component
 */
import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button } from 'antd';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import Particle from '../Particle';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfFile = require('../../Assets/Prakhar_Richhariya_Resume.pdf');

const ResumeNew: React.FC = () => {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className='resume-section'>
				<Particle />
				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						type='primary'
						icon={<AiOutlineDownload />}
						href={pdfFile}
						target='_blank'
						style={{ maxWidth: '125px' }}
					>
						Download
					</Button>
				</Row>

				<Row className='resume'>
					<Document file={pdfFile} className='d-flex justify-content-center resume-document'>
						<Page pageNumber={1} scale={width > 786 ? 1.5 : 0.5} />
					</Document>
				</Row>

				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Button
						type='primary'
						icon={<AiOutlineDownload />}
						href={pdfFile}
						target='_blank'
						style={{ maxWidth: '125px' }}
					>
						Download
					</Button>
				</Row>
			</Container>
		</div>
	);
};

export default ResumeNew;
