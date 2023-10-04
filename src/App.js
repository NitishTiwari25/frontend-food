import Home from './screens/Home';
import Login from './screens/login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup';
import { CartProvider } from "./components/Contextreducer";
import MyOrder from './screens/MyOrders';


function App() {
  return (
    <CartProvider>
      {/* in this we wrap the whole code in cardprovider to pass 
   the dispatch value in any part of the application */}
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/createuser" element={<Signup />} />
            <Route exact path="/myOrder" element={<MyOrder />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>


  );
}

export default App;
