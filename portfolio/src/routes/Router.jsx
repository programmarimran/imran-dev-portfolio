import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/homepage/home/Home";
import ProjectDetails from "../pages/projectsDetails/ProjectDetails";
import Projects from "../pages/projectsPage/projects/Projects";
import ErrorPage from "../pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path:"/projects",
       Component:Projects
      },
      {
        path:"/details/:id",
        Component:ProjectDetails
      },
      {
        path:"/resume",
        element:<p>Resume CV</p>
      }
      
    ],
  },
  {
    path:"*",
    element:<ErrorPage></ErrorPage>
  }
]);
export default router;
