import logo from './logo.svg';
import './App.css';
import CardsContainer from './componetns/CardsContainer/CardsContainer';
import AddButtons from './componetns/AddButtons/AddButtons';
import Last10 from './componetns/Last10/Last10';
import Navbar from './componetns/Navigation/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardsContainer/>
      <AddButtons/>
      <Last10/>
    </div>
  );
}

export default App;
