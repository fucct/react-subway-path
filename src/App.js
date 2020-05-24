import React from "react";

import Home from "./pages/Home";
import Layout from "./components/Layout";

import "./assets/service/css/app.css";
import { Route } from 'react-router-dom';
import Search from './pages/Search';

const App = () => (
  <Layout>
    <Route path="/" component={Home} exact={true}/>
    <Route path="/search" component={Search} exact={true}/>
    {/*<Search/>*/}
  </Layout>
);

export default App;
