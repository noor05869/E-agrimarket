/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Rtl from "./pages/Rtl";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Form from "./pages/form";
import CropsDistribution from "./pages/CropsDistribution";
import Form3 from "./pages/Form3";
import axios from 'axios'

function App() {

// axios.defaults.baseURL = 'https://aofbackend.nextventures.com.pk/api/v1/'

// axios.defaults.headers =
// {
//   'x-auth-token': localStorage.getItem('token'),
//   'Content-Type': 'application/json'
// }

  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/sign-in" exact component={SignIn} />
        {/* <Main> */}
          <Route exact path="/" component={Form} />
          <Route exact path="/tables" component={Form} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/rtl" component={Rtl} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/form" component={Form} />
          <Route exact path="/CropsDistribution" component={CropsDistribution} />
          <Route exact path="/form3" component={Form3} />




          {/* <Redirect from="*" to="/dashboard" /> */}
        {/* </Main> */}
      </Switch>
    </div>
  );
}

export default App;
