import { createBrowserRouter } from "react-router-dom";
import { SiteFrame } from "./components/SiteFrame";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteFrame />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

