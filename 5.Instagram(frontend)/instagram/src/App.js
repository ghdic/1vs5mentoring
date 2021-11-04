import logo from './logo.svg';
import './App.css';
import LoginPage from "./components/login/LoginPage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
    </Router>
  );
}

export default App;
