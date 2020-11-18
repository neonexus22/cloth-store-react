import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/home.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
