import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from './components/pages/contact/Contact';
import Blog from './components/pages/blog/Blog';
import BlogSingle from './components/pages/blog/BlogSingle';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import TecajnaLista from './components/pages/TecajnaLista';
import Countries from './components/pages/Countries';
import SingleCountry from './components/pages/SingleCountry';
import Shop from './components/pages/shop/Shop';

import ProductSingle from './components/pages/shop/ProductSingle';
import CartPage from './components/pages/shop/CartPage';
import CheckoutPage from './components/pages/shop/CheckoutPage';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  
  return (
  <Router>
    <div className="App">
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogSingle />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tecajnalista" element={<TecajnaLista />} />
      <Route path="/countries" element={<Countries />} />
      <Route path="/singlecountry/:name" element={<SingleCountry />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop:id" element={<ProductSingle />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" elemnt={<CheckoutPage />} />

    </Routes>
    <Footer />
    </div>
  </Router>

  );
}

export default App;