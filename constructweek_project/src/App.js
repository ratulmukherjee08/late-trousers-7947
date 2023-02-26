
import './App.css';
import AllRoutes from './Component/AllRoutes';
import SubNavbar from './Component/SubNavbar';
import UpperNav from './Component/UpperNav';
import Nav from "./Component/Nav";
import Home from "./Component/Home"
function App() {
  return (
   <div>
    <UpperNav />
    <AllRoutes />
    <SubNavbar />
   <Nav/>
   <Home/>
   </div>
  );
}

export default App;
