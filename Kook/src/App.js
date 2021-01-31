import React from "react";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Application from "./pages/App";
import Forgot from "./pages/Forgot";
import "./App.css";
import useAuth from "./hooks/useAuth";
import UserContext from "./contexts/UserContext";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

function App() {
  const [user, setUser] = useAuth();

  const AuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user !== null ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
  const NoAuthRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user === null ? <Component {...props} /> : <Redirect to="/app" />
      }
    />
  );
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <NoAuthRoute path="/login" component={Login} />
          <NoAuthRoute path="/register" component={Signup} />
          <NoAuthRoute path="/forgot" component={Forgot} />
          <NoAuthRoute path="/about" component={About} />
          <AuthRoute path="/app" component={Application} />
          <NoAuthRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
