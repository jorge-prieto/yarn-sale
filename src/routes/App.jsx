import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AppContext } from "../context/AppContext";
import { useInitialState } from "../hooks/useInitialState";

import { Header } from "../components/header/Header";
import { Layout } from "../containers/layout/Layout";
import { Home } from "../pages/Home";
import { Login } from "../pages/login/Login";
import { PasswordRecovery } from "../pages/password-recovery/PasswordRecovery";
import { SendEmail } from "../pages/send-email/SendEmail";
import { NewPassword } from "../pages/new-password/NewPassword";
import { MyAccount } from "../pages/my-account/MyAccount";
import { CreateAccount } from "../pages/create-account/CreateAccount";
import { Checkout } from "../pages/checkout/Checkout";
import { Orders } from "../pages/orders/Orders";
import { NotFound } from "../pages/NotFound";

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/password-recovery"
              component={PasswordRecovery}
            />
            <Route exact path="/send-email" component={SendEmail} />
            <Route exact path="/new-password" component={NewPassword} />
            <Route exact path="/my-account" component={MyAccount} />
            <Route exact path="/sign-up" component={CreateAccount} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/orders" component={Orders} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
