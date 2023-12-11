import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import FooterPage from './components/Home/Footer';

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
    <FooterPage/>
    </div>
  );
}

export default App;
