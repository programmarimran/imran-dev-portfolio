import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/homepage/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <p>Error 404 not found</p>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path:"/about",
        element:<p>about page</p>
      },
      {
        path:"/contact",
        element:<p>constact  page</p>
      },
      {
        path:"/resume",
        element:<p>Resume CV</p>
      }
      
    ],
  },
]);
export default router;
