import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About;'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
           
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/about" component={About}></Route>
             
        </BrowserRouter>
    </div>
  );
}

export default App;