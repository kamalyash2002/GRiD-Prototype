import './App.css';
import Banner from './components/Banner';
import Brandst from './components/Brandst';
import Navbar from './components/Navbar'
function App() {
  return (
   <>
    <Navbar title = "Flipkart" />

    <div className='main-div'>


    <Banner/>
    <Brandst/>


    </div>
   
   </>
     
  );
}

export default App;
 