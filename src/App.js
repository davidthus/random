import './App.css';
import Header from './components/Header';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-b from-indigo-500 to-slate-900 p-2">
      <Header />
      <SongList />
    </div>
  );
}

export default App;
