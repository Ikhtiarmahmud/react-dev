// import './App.css';
// import Product from './ProductComponent/Product';
import Navigation from './NavigationComponent/Navigation';
// import ProductDetails from './ProductComponent/ProductDetails';
// import ProductCreate from './ProductComponent/CreateProduct';
// import ProductEdit from './ProductComponent/EditProduct';
// import About from './AboutComponent/About';
// import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
          <Route exact path="/">
                <h2>Welcome! This is home page.</h2>
          </Route>

          {/* <Route exact path="/product">
                <Product />
          </Route>

          <Route exact path="/about">
                <About />
          </Route>

          <Route exact path="/product-details/:id">
                <ProductDetails />
          </Route>

          <Route exact path="/create-product">
                <ProductCreate />
          </Route>

          <Route exact path="/edit-product/:id">
                <ProductEdit />
          </Route> */}

          <Route exact path="/404">
              <h1>404! Not Found</h1>
          </Route>

          <Route path={'*'} render={() => <Redirect to={'/404'} />} />

      </Switch>
    </Router>
  );
}

export default App;
