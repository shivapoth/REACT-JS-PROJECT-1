import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Navbar />} />
        </Routes>
      </Router>
      
      {/* <Navbar/> */}
    </div>
  );
}

export default App;
