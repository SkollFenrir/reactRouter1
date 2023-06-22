import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componets/Navbar';
import Home from './views/Home';
import Contacto from './views/Contacto';
import NotFound from './views/NotFound';

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/contacto'
						element={<Contacto />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
