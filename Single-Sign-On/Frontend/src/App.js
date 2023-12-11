import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterPage from './components/Footer/Footer';
import Intro from './components/Home/Introduction/Intro';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          {/* <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Navbar />} /> */}
        </Routes>
      </Router> 
      <Intro/>
    <FooterPage/>
    </div>
  );
}

export default App;
