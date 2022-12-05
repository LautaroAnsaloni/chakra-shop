import './App.css';
import Navbar from './components/Navbar/Navbar';
import Axios from './services/Axios/Axios';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Axios />
    </div>
  );
}

export default App;
