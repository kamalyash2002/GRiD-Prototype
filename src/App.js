import "./App.css";
import Banner from "./components/Banner";
import Brandst from "./components/Brandst";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar title="Flipkart" />
      <div className="main-div container-fluid">
        {/* <Banner /> */}
        <Details/>
        <Brandst />
       
      </div>
    </>
  );
}

export default App;
