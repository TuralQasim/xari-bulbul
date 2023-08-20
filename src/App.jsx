import "./App.css";
import "./responsive.css";
import { lazy, Suspense, useEffect, useState } from "react";
const Home = lazy(() => import("./pages/Home"));
const Details = lazy(() => import("./pages/Details"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Catalog = lazy(() => import("./pages/Catalog"));
const Delivery = lazy(() => import("./pages/Delivery"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Organizations = lazy(() => import("./pages/Organizations"));
const Refund = lazy(() => import("./pages/Refund"));
const Guarantee = lazy(() => import("./pages/Guarantee"));
const Help = lazy(() => import("./pages/Help"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Pay = lazy(() => import("./pages/Pay"));
const Favorites = lazy(() => import("./pages/Favorites"));
const Basket = lazy(() => import("./pages/Basket"));
const Order = lazy(() => import("./pages/Order"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogItem = lazy(() => import("./pages/BlogItem"));
const Login = lazy(() => import("./pages/Login"));
const Registration = lazy(() => import("./pages/Registration"));
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./components/Loading";
import axios from "axios";
function App({ dispatch, language, load }) {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/delivery",
      element: <Delivery />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/blog-item",
      element: <BlogItem />,
    },
    {
      path: "/blog",
      element: <Blog />,
    },
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/basket",
      element: <Basket />,
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/pay",
      element: <Pay />,
    },
    {
      path: "/notfound",
      element: <NotFound />,
    },
    {
      path: "/help",
      element: <Help />,
    },
    {
      path: "/guarantee",
      element: <Guarantee />,
    },
    {
      path: "/refund",
      element: <Refund />,
    },
    {
      path: "/organizations",
      element: <Organizations />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/details/:id",
      element: <Details />,
    },
    {
      path: "/reviews",
      element: <Reviews />,
    },
    {
      path: "/catalog",
      element: <Catalog />,
    },
  ];
  function disableScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  }
  function enableScroll() {
    window.onscroll = null;
  }
  if (load) {
    disableScroll();
  } else {
    enableScroll();
  }
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data;

        dispatch({
          type: "PRODUCTS",
          payload: data.products[language],
        });
      });
  }, [language]);
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data.reviews;
        dispatch({
          type: "REVIEWS",
          payload: data,
        });
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data.categories;

        dispatch({
          type: "CATEGORIES",
          payload: data[language],
        });
      });
  }, [language]);
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data.images;
        dispatch({
          type: "IMAGES",
          payload: data,
        });
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data.users;
        dispatch({
          type: "USERS",
          payload: data,
        });
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://turalqasim.github.io/flowers-shop-database/db.json`)
      .then((res) => {
        let data = res.data.dinWords;
        dispatch({
          type: "DINAMIC_WORDS",
          payload: data,
        });
      });
    dispatch({
      type: "LOAD",
      payload: !load,
    });
  }, []);
  return (
    <>
      <Header />
      <Routes>
        {routes.map((t) => (
          <Route
            path={t.path}
            key={t.path}
            element={
              <Suspense fallback={<Loading />}>
                {load ? <Loading /> : t.element}
              </Suspense>
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

const t = (a) => a;
export default connect(t)(App);
