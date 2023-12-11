import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import FooterPage from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Navbar />} />
        </Routes>
      </Router> 
    <FooterPage/>
    </div>
  );
}

export default App;
