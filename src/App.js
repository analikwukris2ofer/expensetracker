import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./components/pages/addexpense";
import Home from "./components/pages/home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* Anything you want to change with path you simply put it inside this switch statement */}
        <Route path="/" exact component={Home} />
        <Route path="/addexpense" component={AddExpense} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
