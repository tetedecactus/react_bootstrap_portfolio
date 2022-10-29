import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/App.scss';
import Home from './components/Home';
import NotFoundPage from './components/404';

function App() {
  return (
	<Router>
		<div className="App">
			<Routes>
				<Route exact path='/' element={<Home />} />
       			<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	</Router>
  );
}

export default App;
