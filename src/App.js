import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Crew from './Components/Crew/Crew';
import Technology from './Components/Technology/Technology';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/*" element={<Destination />} />
        <Route path="/crew/*" element={<Crew />} />
        <Route path="/technology/*" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
