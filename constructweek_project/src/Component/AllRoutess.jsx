import React from "react";

import { Routes, Route } from "react-router-dom";
import Tires from "../Pages2/Tires";
import AutoRepair from "../Pages2/AutoRepair";
import AutoMaintenance from "../Pages2/AutoMaintenance";
import Coupons from "../Pages2/Coupons";
import FindaStore from "../Pages/FindaStore";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/tires" element={<Tires />}></Route>
      <Route path="/AutoRepair" element={<AutoRepair />}></Route>
      <Route path="/AutoMaintenance" element={<AutoMaintenance />}></Route>
      <Route path="/Coupons" element={<Coupons />}></Route>
      <Route path="/FindaStore" element={<FindaStore />}></Route>
    </Routes>
  );
};
export default AllRoutes;
