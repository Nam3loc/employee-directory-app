import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import EmployeeListItem from './components/EmployeeListItem';
import dataArr from './data';

const data = dataArr.map((ele, idx) => {
  return (
    <EmployeeListItem key={idx} {...ele} />
  )
})

function App() {
  return (
    <div className="App">
      <div className="HomePage">
        <Header />
        <SearchBar />
        <section>{data}</section>
      </div>
    </div>
  );
}

export default App;
