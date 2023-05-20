// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Shop } from "./Pages/shop/Shop";
import { Cart } from "./Pages/cart/Cart";
import { Wishlist } from "./Pages/wishlist/Wishlist";
import { ShopContextProvider } from "./Context/shop-context";
import { Checkout } from "./Pages/chechout/Checkout";
// import {GuestCheckout} from "./Pages/chechout/GuestCheckout"
// import MapComponent from "./Components/location/MapComponent";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/guestCheckout" element={<GuestCheckout />} /> */}
            {/* <Route path="/loc" element={<MapComponent />} /> */}
            
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;