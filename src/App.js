import React from 'react';
import {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Default from './pages/Default';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SingleProductPage from './pages/SingleProductPage';
import {Route, Switch} from 'react-router-dom';
import {ProductProvider} from './context';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import SideCart from './components/SideCart';

class App extends Component {
  render() {
    return <>
            {/*navbar, sidebar, cart, footer*/}
              <Navbar />
              <Sidebar />
              <SideCart />
             
              <Switch>
                <Route exact path = "/" component = {HomePage} />
                <Route exact path = "/about" component = {AboutPage} />
                <Route exact path = "/cart" component = {CartPage} />
                <Route exact path = "/contact" component = {ContactPage} />
                <Route exact path = "/products" component = {ProductsPage} />
                <Route exact path = "/products/:id" component = {SingleProductPage} />
                <Route component = {Default} />
              </Switch>

               <Footer />
          </>
  }
}

export default App;
