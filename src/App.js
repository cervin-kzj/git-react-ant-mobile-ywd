import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom"
import AsyncComponent from "./util/AsyncComponent"
const LoginComponent = AsyncComponent(() => import("./pages/login"));
const RegisterComponent = AsyncComponent(() => import("./pages/register"));
const IndexComponent = AsyncComponent(() => import("./pages/index"));
const MineComponent = AsyncComponent(() => import("./pages/mine"));
const CategoryComponent = AsyncComponent(() => import("./pages/category"));
const DetailComponent = AsyncComponent(() => import("./pages/detail"));
const CartComponent = AsyncComponent(() => import("./pages/cart"));
function App() {
  return (
    <div className="wrap">
      <Switch>
        <Route path="/login" exact component={LoginComponent}></Route>
        <Route path="/register" exact component={RegisterComponent}></Route>
        <Route path="/index" exact component={IndexComponent}></Route>
        <Route path="/mine" exact component={MineComponent}></Route>
        <Route path="/category" exact component={CategoryComponent}></Route>
        <Route path="/detail" exact component={DetailComponent}></Route>
        <Route path="/cart" exact component={CartComponent}></Route>
        <Redirect to="/index"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
