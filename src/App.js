import React, { useRef } from 'react';
import styled from 'styled-components';
import './App.scss'

import MyComponent from './components/MyComponent';
import OutsideContext from './components/OutsideContext';

const Container = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white; 
`;

export default function App() {
	const containerRef = useRef(null);


	return (
		<Container ref={containerRef}>
      <h2>Welcome to the Context Menu world</h2>
			<OutsideContext.Provider value={containerRef}>
				<MyComponent />
			</OutsideContext.Provider>
		</Container>
	);
}
