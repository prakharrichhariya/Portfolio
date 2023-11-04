/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Component for scrolling to top
 */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

export default ScrollToTop;
