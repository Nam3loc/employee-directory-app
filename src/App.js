import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeList from './components/EmployeeList';


function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <Header />
        <SearchBar />
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
