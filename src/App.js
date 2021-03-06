import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import LoginPage from "./components/LoginPage";
import FloatingButton from "./components/FloatingButton"
import Popup from "./components/Popup";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path="/helpdesk">
            <Popup/>
          </Route>
        <Route path="/profile">
          <LoginPage/>
          <FloatingButton/>
        </Route>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
          <Home />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
