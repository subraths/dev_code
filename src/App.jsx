import { Component } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import SingleProduct from "./SingleProduct";
import Signin from "./auth/signin";
import AuthRequired from "./auth/authRequired";

class App extends Component {
  router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<AuthRequired />}>
          <Route path=":id" element={<SingleProduct />} />
        </Route>
        <Route path="signin" element={<Signin />} />
      </Route>
    )
  );
  render() {
    return <RouterProvider router={this.router} />;
  }
}

export default App;
