import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./routes/Error";
import Home from "./routes/Home";
import Resume from './routes/Resume';
import Root from "./routes/Root";
import Styles from "./routes/Styles";
import Policies from "./routes/Policies";

const router = createBrowserRouter([
	{
		path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/resume', element: <Resume /> },
      { path: '/styles', element: <Styles /> },
      { path: '/privacy-policy', element: <Policies /> },
    ]
	}
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
