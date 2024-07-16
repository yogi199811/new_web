import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./Global.js";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import {
  Layout,
  Home,
  Contact,
  About,
  SingleProduct,
  Products,
  Cart,
  Error,
} from "./components/index.js";
import { ThemeProvider } from "styled-components";
import { store } from "./store/store.js";

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29,29,29,0.8)",
    white: "#fff",
    black: "#212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/singleProduct/:id" element={<SingleProduct />} />

      <Route path="*" element={<Error />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

    
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>

    </Provider>

    {/* <App /> */}
  </React.StrictMode>
);
