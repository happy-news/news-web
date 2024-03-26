import logo from './logo.svg';
import './App.css';
import NewsGrid from './NewsGridItem';
import Header from './Header';
import NewsBody from './NewsBody';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>

      <NewsBody/>
    </div>
  );
}

export default App;
