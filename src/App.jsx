import Navbar from "./containers/navbar/Navbar";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";
// import { toggleControl } from "./utils/navbar";

import './index.css';

function App() {
  // toggleControl();
    return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
