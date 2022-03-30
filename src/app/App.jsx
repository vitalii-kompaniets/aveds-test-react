import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactsPage from "./components/contactsPage";
import Header from "./components/header";
import Home from "./components/home";
import LoginForm from "./components/login";
import ProfilePage from "./components/profilePage";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/contacts" component={ContactsPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
};

export default App;
