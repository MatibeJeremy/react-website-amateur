import './App.css';
import Header from './components/layout/Header';
import Owl from './components/layout/Owl';
import Footer from './components/layout/Footer';
import Landslider from './components/Landslider';
import Coolimage from "./components/Coolimage";

function App() {
  return (
    <div>
        <Header
         auth="true"
         user="Alloys"
        //  count = "1"
        />
        <Owl/>
        <Coolimage/>
        <Landslider
           badge="Sale"
           src=""

        />
        <Footer/>
    </div>
  );
}

export default App;
