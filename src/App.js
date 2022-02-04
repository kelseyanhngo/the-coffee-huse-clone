import "aos/dist/aos.css";
import { Route } from "react-router";
import { Switch } from "react-router-dom";
import "./App.scss";
import ConfirmOrder from "./Componenets/ComfirmOrder";
import Header from "./Componenets/Header";
import MobileLooks from "./Componenets/MobileLooks";
// import LoginForm from './Componenets/LoginForm/index';
import Promotion from './Componenets/Promotion/index';
import Searching from "./Componenets/Searching";
import Shops from "./Componenets/Shops";
import SignUp from "./Componenets/SignUp";
import Slideshow from './Componenets/Sliders/index';
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Products from "./Pages/Products";
import SugesstionItems from "./Pages/SuggestionItems";

function App() {
  return (
   
      <div className="App">
         <header className="App-header">
          <Header/>
         
          <Switch>
            <Route path="/" component={Home} exact />

            {/* slides={SliderData} */}
            <Route path="/slider"  component={Slideshow} exact />

            <Route path="/suggestion" component={SugesstionItems} exact />

            <Route path="/products" component={Products} exact />

            <Route path="/news" component={News} exact />
            <Route path="/mobile" component={MobileLooks} exact />
            <Route path="/searching" component={Searching} exact />
            <Route path="/shops" component={Shops} exact />
            <Route path="/confirmOrder" component={ConfirmOrder} exact />

            <Route path="/footer" component={Footer} exact />
            <Route path="/promotion" component={Promotion} exact />
            <Route path="/signUp" component={SignUp} exact />

          </Switch>
          <Footer />
          </header>
      </div>
   
  );
}

export default App;
