import './App.css';
//import components
import Footer from './components/Footer';
import Header from './components/Header';

//import router
import {Route, Routes} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  //link to backend 
  const URL = 'http://localhost:4000/';

  return (
    <div className="App">
     {/* import Header */}
    <Header />
    {/* add patchs to routes */}
    <Routes>
      <Route exact path='/' element={<Home/>} />
      {/* pass the URL as a prop to about and projects so they can make a call to our API */}
      <Route exact path='/projects' element={<Projects URL={URL}/>} />
      <Route exact path='/about' element={<About URL={URL}/>} />
    </Routes>
    {/* import footer */}
    <Footer />
    </div>
  );
}

export default App;
