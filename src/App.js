import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Sponsors from './Components/Sponsors'
import Home from "./Pages/Home"
import OurTeam from "./Pages/OurTeam"
import Details from "./Pages/Details";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Training from "./Pages/Training";
import {AnimatePresence} from "framer-motion"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OurTeam">
          <OurTeam />
        </Route>
        <Route exact path="/Details">
          <Details />
        </Route>
        <Route exact path="/Gallery">
          <Gallery />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Training">
          <Training />
        </Route>
        
      </Switch>
      </AnimatePresence>
      <Sponsors />
        <Footer />
    </Router>
  
      
    </>
  );
}

export default App;
