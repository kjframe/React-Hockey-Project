import './App.css';
import TeamsList from './features/campsites/TeamsList.js';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <TeamsList />
    </div>
  );
}

export default App;