import React from "react";
import Home from "../User/dashboard";
// import NotFound from "../views/NotFound.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Invoice from "../User/invoice";
import Detail from "../User/detail";

import HomeAdmin from "../Admin/DesktopView/home";
import ProductAdmin from "../Admin/DesktopView/product";
import SalesAdmin from "../Admin/DesktopView/sales";
import SettingAdmin from "../Admin/DesktopView/setting";

import Admin from "../Admin/DesktopView/admin";

import { Container } from "@chakra-ui/react";

const linkRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Container size={"sm"} px={0}>
                <Home />
              </Container>
            }
          />
          <Route
            path="/invoice"
            element={
              <Container size={"sm"}>
                <Invoice />
              </Container>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Container size={"sm"}>
                <Detail />
              </Container>
            }
          />

          <Route element={<Admin />}>
            <Route path="/admin" element={<HomeAdmin />} />
            <Route path="/admin/product" element={<ProductAdmin />} />
            <Route path="/admin/sales" element={<SalesAdmin />} />
            <Route path="/admin/setting" element={<SettingAdmin />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default linkRoutes;
