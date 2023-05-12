import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Case from "./routes/Case";
import Error from "./routes/Error";
import Home from "./routes/Home";
import Policies from "./routes/Policies";
import Resume from './routes/Resume';
import Root from "./routes/Root";
import Styles from "./routes/Styles";

const router = createBrowserRouter([
	{
		path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/resume', element: <Resume /> },
      { path: '/portfolio/:case', element: <Case /> },
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
