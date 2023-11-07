/**
 * @author Prakhar Richhariya <prakhar.richhariya@314ecorp.com>
 * @description Main App Component
 */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import Preloader from './components/Preloader';
import NavBar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import './App.css';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/ResumeNew';
import Experience from './components/Experience/Experience';
import { ConfigProvider } from 'antd';

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
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#c770f0',
					},
				}}
			>
				<div className='App' id={initialLoad ? 'no-scroll' : 'scroll'}>
					<NavBar />
					<ScrollToTop />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/project' element={<Projects />} />
						<Route path='/about' element={<About />} />
						<Route path='/experience' element={<Experience />} />
						<Route path='/resume' element={<Resume />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
					<Footer />
				</div>
			</ConfigProvider>
		</BrowserRouter>
	);
};

export default App;
