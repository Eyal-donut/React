import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/Pages/Root"
import HomePage from "../src/Pages/HomePage"
import AboutPage from "./Pages/AboutPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      {path: "", element: <HomePage/>},
      {path: "about", element: <AboutPage/>},
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>
};
export default App;
