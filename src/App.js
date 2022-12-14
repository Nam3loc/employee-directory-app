import './App.css';
import { Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';
import EmployeePage from './components/EmployeePage';


function App() {
	return (
		<div className="App">
			<div className="HomePage">
				<Header />
				<SearchBar />

				<Routes>
					<Route path='/' element={<EmployeeList />} />
					<Route path='/:id' element={<EmployeePage />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
