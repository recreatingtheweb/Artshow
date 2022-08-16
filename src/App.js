import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>   
      <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
       {/* <Header/> 
      <Gallery/>    */}
      </div>
    </Router>
  );
}

export default App;
