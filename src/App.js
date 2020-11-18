import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/home.component";

const HatsPage = (props) => {
  console.log(props);
  return <div>hats page</div>;
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/hats" component={HatsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
