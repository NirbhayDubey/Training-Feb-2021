import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Default from "./pages/Default";
import Products from "./pages/Products";
import SingleProductPage from "./pages/SingleProductPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={AboutPage} />
        <Route path="/contact" exact component={ContactPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" exact component={SingleProductPage} />
        <Route path="/cart" exact component={CartPage} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}
export default App;
