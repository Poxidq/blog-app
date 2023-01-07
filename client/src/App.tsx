import React from "react";
import {
  createBrowserRouter as createRouter,
  RouterProvider,
} from "react-router-dom";
import styled from "styled-components";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Layout from "./components/Layout";

import Global from "./styles/global";
import { variables } from "./styles/variables";

const AppBlock = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${variables.black};
  min-height: 100vh;
`

const Container = styled.div`
  width: 90%;
`

const router = createRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/post/:id",
        element: <Single />
      },
      {
        path: "/write",
        element: <Write />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  },
]);

function App() {
  return (
    <AppBlock>
      <Container>
        <Global />
        <RouterProvider router={router} />
      </Container>
    </AppBlock>
  );
}



export default App;
