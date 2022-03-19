import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import profile from "./components/profile"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            singh
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/profile">
            <profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
