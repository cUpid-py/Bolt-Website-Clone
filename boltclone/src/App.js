import './App.css';
import Navbar from './components/navbar';
import Landingpage from "./components/landingpage"
import Driving from "./components/driving"

function App() {
  return (
    <div >
      <header>
        <Navbar/>
        <Landingpage/>
        <Driving/>
      
      </header>
    </div>
  );
}

export default App;
