import { BrowserRouter, Route } from 'react-router-dom'
import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Home from "./componenets/Home";
import Navbar from "./componenets/Navbar";
import Portfolio from "./componenets/Portfolio";
import Skills from "./componenets/Skills";
import "./scss/style.css"

function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Navbar/>
 
    <Route exact path="/MyPortfolio" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/skills" component={Skills}></Route>
    <Route path="/contact" component={Contact}></Route>
    <Route path="/portfolio" component={Portfolio}></Route>
  

  </BrowserRouter>

    </div>
  );
}

export default App;
