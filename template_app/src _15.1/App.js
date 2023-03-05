import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import Root from "./pages/Root";
import Product from "./pages/Product";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/" ,
    element: <Root />,
    errorElement: <ErrorPage/>, 
    children: [
      { path: "", element: <HomePage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productID", element: <Product/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
