import React from "react";
import Search from "./component/search";
import { Provider } from "react-redux";
import Movie from "./component/movie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";
import "./bootswatch/bootstrap.min.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <Switch>
          <Route exact path='/' component={Search}/>
          {/* both /roster and /roster/:number begin with /roster */}
          <Route path='/movie/:id' component={Movie}/>
        </Switch>
          
        </Router>
      </Provider>
    );
  }
}

export default App;
