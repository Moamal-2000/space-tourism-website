import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import Crew from './Components/Crew/Crew';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination/*" element={<Destination />} />
        <Route path="/crew/*" element={<Crew />} />
      </Routes>
    </div>
  );
}

export default App;
