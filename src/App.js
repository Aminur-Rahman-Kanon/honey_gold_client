import './App.css';
import Topbar from './components/topbar/topbar';
import Sidedrawer from './components/sidedrawer/sidedrawer';

function App() {
  return (
    <div className="App">
      <Sidedrawer />
      <Topbar />
    </div>
  );
}

export default App;
