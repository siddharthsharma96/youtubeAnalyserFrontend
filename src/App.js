import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Common/Layout";
import Home from "./pages/Home";
import Result from "./pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/results",
        element: <Result hitApi={"api"} />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
