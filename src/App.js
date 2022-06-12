import "./App.css";
import Header from "./components/Header";
import SongList from "./components/SongList";

function App() {
  return (
    <div className="App overflow-y-auto overscroll-contain p-2">
      <div className="-z-40 fixed inset-0 h-screen w-screen bg-gradient-to-b from-indigo-500 to-slate-900 bg-repeat-y"></div>
      <Header />
      <SongList />
    </div>
  );
}

export default App;
