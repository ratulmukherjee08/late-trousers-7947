import React from "react";

import { Routes, Route } from "react-router-dom";
import Blog from "../Pages/Blog";
import ScheduleAppointment from "../Pages/ScheduleAppointment";
import ContactUs from "../Pages/ContactUs";
import CreateAnAccount from "../Pages/CreateAnAccount";
import SignIn from "../Pages/SignIn";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Blog />}></Route>
      <Route path="/scheduleAppointment" element={<ScheduleAppointment />}></Route>
      <Route path="/contactUs" element={<ContactUs />}></Route>
      <Route path="/createAnAccount" element={<CreateAnAccount />}></Route>
      <Route path="/signIn" element={<SignIn />}></Route>
    </Routes>
  );
};
export default AllRoutes;
