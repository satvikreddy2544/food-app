import React, { lazy, Suspense, useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./Components/navBar";
import RestCard from "./Components/RestCard";
import Body from "./Components/body";
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import RestoMenu from "./Components/RestoMenu";
import Login from "./Components/Login";
import Shimmer from "./Components/Shimmer";
import Item from "./Components/Item";
import OrderPage from "./Components/OrderPage";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./Components/Cart";
// import Instamart from './Components/Instamart';

const Instamart = lazy(() => import("./Components/Instamart"));

const Index = () => {
  const [user, setUser] = useState({
    name: "sai",
    password: "1234",
  });

  {
    return (
      <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    );
  }
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resto/:id",
        element: <RestoMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/item/:id/:id2",
        element: <Item />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);

reportWebVitals();
export default Index;
