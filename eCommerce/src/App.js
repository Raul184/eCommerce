import React from "react";
// Router
import { Switch , Route } from 'react-router-dom';
// Pg
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
// Comps.
import Header from './components/layout/Header';

export default function App() {
  return (
    <>
      <Header/> 
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/cart'><Cart /></Route>
        <Route exact path='/checkout'><Checkout/></Route>
        <Route exact path='/login'><Login/></Route>
        <Route exact path='/products'><Products/></Route>
        <Route exact path='/products/:id' children={<ProductDetails/>}>
        </Route>
        <Route path='*'><Error /></Route>
      </Switch>
    </>
  )
}
