import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Root from "./routes/Root";

const router = createBrowserRouter([
	{
		path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />},
    ]
	}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
