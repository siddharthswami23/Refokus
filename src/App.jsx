import Nav from "./Components/Nav";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Works from "./Components/Works";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-zinc-900 text-white">
      <Nav />
      <Works />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  );
}

export default App;
