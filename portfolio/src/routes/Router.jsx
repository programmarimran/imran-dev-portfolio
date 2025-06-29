import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/homepage/home/Home";
import ProjectDetails from "../pages/projectsPage/projectsDetails/ProjectDetails";
import Projects from "../pages/projectsPage/projects/Projects";

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
]);
export default router;
