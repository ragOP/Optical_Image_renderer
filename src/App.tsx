import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Food from './pages/Food';
import Late from './pages/Late';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Toast from './pages/Toast';
import SFmedi from './pages/SFmedi';
import Mediold from './pages/sfmed_old';
import Unlock from './pages/unlock';
import Bg from './pages/sfmed_bg';
function App() {
 console.log('s');
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/* c */}

          <Route  path="/"  element = {<S />} />
          <Route  path="/sfmedi"  element = {<SFmedi />} />
          <Route  path="/sfmedi-oldq"  element = {< Mediold/>} />
          <Route  path="/sfmedi-unlock"  element = {< Unlock/>} />
          <Route  path="/sfmedi-bg"  element = {< Bg/>} />

       
          {/* <Route path = "/engmed1" element = {<Third_EN />} /> */}
             {/* <Route path = "/engmed1" element = {<S />} /> */}
   
      
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          {/* <Route path = "/a" element = {<S />} /> */}

          <Route path = "/view" element = {<Visits />} />
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
