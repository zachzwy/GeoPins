import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";

import App from "./pages/App";
import Splash from "./pages/Splash";
import Context from "./context";
import reducer from "./reducer";
import * as serviceWorker from "./serviceWorker";
import ProtectedRoute from "./ProtectedRoute";

const Root = () => {
  // useContext accepts a context object (the value returned from React.createContext)
  // and returns the current context value for that context.
  // The current context value is determined by the value prop
  // of the nearest <MyContext.Provider> above the calling component in the tree.

  // If there is no <MyContext.Provider> above the calling component,
  // looks like useContext(Context) will return the value passed in React.createContext
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log({ state });

  return (
    <Router>
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <ProtectedRoute exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
