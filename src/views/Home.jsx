import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
	return (
		<>
			<Container className='text-center'>
				<h1 className='pt-5'>
					Bienvenido a <span className='fw-bold'>Happy Cake</span>
				</h1>
				<br />
				<h6> El lugar de los pasteles felices </h6>
				<br />
				<h1>🎂</h1>
			</Container>
		</>
	);
};

export default Home;
