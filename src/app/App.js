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
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
