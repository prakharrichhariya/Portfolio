/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Preloader for app opening
 */
import React from 'react';

interface IProps {
	load: boolean;
}

const Preloader: React.FC<IProps> = ({ load }) => {
	return <div id={load ? 'preloader' : 'preloader-none'} />;
};

export default Preloader;
