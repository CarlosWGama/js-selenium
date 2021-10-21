import { LoginPage } from './pages/login/index';
import { Route, BrowserRouter as Router, Redirect, Switch, Link } from 'react-router-dom';
import ProductsPage from './pages/products/index';
import { CartProvider } from './providers/cart.context';

function App() {
  return (
    <Router>
      <Switch>
        {/* LOGIN */}
        <Route exact path="/" component={LoginPage} />
        {/* HOME */}
        <Route path="/home">
          <CartProvider>
            <ProductsPage/>
          </CartProvider>
        </Route>
        {/* NÃO EXISTE */}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
