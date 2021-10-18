import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Give } from "./Give";
import { Sermons } from "./Sermons";
import { About } from "./About";
import { Events } from "./Events";
import { EventComponent } from "./components/EventComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllwaysScrollToTop from "./components/AllwaysScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <AllwaysScrollToTop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Sermons" component={Sermons} />
        <Route exact path="/Give" component={Give} />
        <Route exact path="/Events" component={Events} />
        <Route path="/Events/:slug" component={EventComponent} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
