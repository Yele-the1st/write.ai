import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogGeneratorTool } from "./components";
import { AppRootLayout, Homepage, Tools, MyContent } from "./screens";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "tools",
        children: [
          { index: true, element: <Tools /> },
          { path: "bloggen", element: <BlogGeneratorTool /> },
        ],
      },
      { path: "content", children: [{ index: true, element: <MyContent /> }] },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
