import './App.css';
import Product from './ProductComponent/Product';
import Navigation from './NavigationComponent/Navigation';
import ProductDetails from './ProductComponent/ProductDetails';
import About from './AboutComponent/About';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([
    {
        name: 'Apple USB Type-C to USB Adapter',
        description: 'Compatible with Apple iPhone/iPad/Mac USB Type-C Male to USB Type-A Female  USB 3.0 Transfer Rates up to 5 Gb/s',
        price: '6000',
        category: 'Adaptor'
    }, {
        name: 'Apple (MLA02ZA/A) Magic Mouse 2',
        description: 'Type: Bluetooth, Gestures: Scroll, Click, Swipe, Dimensions: 4.47 x 2.25 x 0.85"',
        price: '7000',
        category: 'Mouse'
    }, {
        name: 'Apple USB-C Digital AV HDMI & USB Multiport Adapter',
        description: 'USB Multiport Adapter, HDMI, USB-C',
        price: '8000',
        category: 'Adaptor'
    }, {
        name: 'Apple Pencil',
        description: 'Its Only a Magic Wand Perfectly on point for anything you do 12 hours of battery life',
        price: '7000',
        category: 'Pencil'
    }
  ]); 

  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
                <h2>Welcome! This is home page.</h2>
          </Route>

          <Route exact path="/product">
                <Product productList={products}/>
          </Route>

          <Route exact path="/about">
                <About />
          </Route>

          <Route exact path="/product-details/:id">
                <ProductDetails productList={products}/>
          </Route>

          <Route exact path="/404">
              <h1>404! Not Found</h1>
          </Route>

          <Route path={'*'} render={() => <Redirect to={'/404'} />} />

      </Switch>
    </Router>
  );
}

export default App;
