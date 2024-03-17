import logo from './logo.svg';
import './App.css';
import NewsGrid from './NewsGrid';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <NewsGrid/>
    </div>
  );
}

export default App;
