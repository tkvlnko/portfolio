import Navbar from "./containers/navbar/Navbar";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";
import Tools from "./containers/tools/Tools"

import './index.css';

function App() {
    return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tools />
    </>
  );
}

export default App;
