/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Main App Component
 */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { DatePicker } from 'antd';

import Preloader from './components/Preloader';
import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setInitialLoad(false);
		}, 1200);

		return () => clearTimeout(timer);
	}, []);
	return (
		<BrowserRouter>
			<Preloader load={initialLoad} />
			<NavBar />
			<ScrollToTop />
			<Routes>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
			<div className='App'>
				<header className='App-header'>
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<DatePicker className='test-datepicker' />
					<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
						Learn React
					</a>
				</header>
			</div>
		</BrowserRouter>
	);
};

export default App;
