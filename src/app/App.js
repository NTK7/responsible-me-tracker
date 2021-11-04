import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Visualization from "../components/Visualizations/Visualization";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/visualization">
          <Visualization />
        </Route>
        <Route path="/">
          <Home />
          {/* <h1>The developer has taken the site down!</h1> */}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
