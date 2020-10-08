import React, { Fragment } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
function App() {
  return (
    <Router>
      <Header />
      <div className="container  mt-5">
        <Switch>
            <Route exact path="/" component={Productos} ></Route>
            <Route exact path="/productos/nuevo" component={NuevoProducto} ></Route>
            <Route exact path="/productos/editar/:id" component={EditarProducto} ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
