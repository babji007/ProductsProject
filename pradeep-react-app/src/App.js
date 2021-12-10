// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
import Header from './App/src/components/Header';
// import Counter from './App/src/components/Counter';
import Sys from './App/src/components/Sys'
import Container from './App/src/components/Container';

function App() {
  return (

    <Router>
    <div>
    <Header/>
    
    <Switch>
          <Route exact path="/products" component={Sys} />
        <Route exact path='/products/:productId' component={Container.ProductDetail} />
        <Route exact path='/addtocart' component={Container.Cart} />
    </Switch>


    </div>
    </Router>
  );
}

export default App;
