/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Typewriter Effect for Home Page
 */
import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterEffect: React.FC = () => {
	return (
		<Typewriter
			options={{
				strings: ['React Developer', 'Front-end Engineer'],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
};

export default TypewriterEffect;
