import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./Contact";
import { Give } from "./Give";
import { Sermons } from "./Sermons";
import { About } from "./About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Sermons" component={Sermons} />
        <Route exact path="/Give" component={Give} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
