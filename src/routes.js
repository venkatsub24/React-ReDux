//TODO - Import all dependencies and add authRoutes

// import React from "react";
// import { Route, Switch, Redirect } from "react-router-dom";

// import Home from "./components/Home/Home";
// import ForgotPassword from "./components/Login/ForgotPassword";
// import Signin from "./components/Login/Signin";
// import Signup from "./components/Login/Signup";
// import NotFound from "./components/NotFound/NotFound";

// const checkAuth = () => {
//   // TODO from API
//   return true;
// };

// const AuthRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       checkAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/login" }} />
//       )
//     }
//   />
// );

// export default () => {
//   return (
//     <Switch>
//       <Route path="/" exact component={Home} />
//       <Route path="/login" exact component={Signin} />
//       <AuthRoute path="/signup" exact component={Signup} />
//       <Route path="/forgotpassword" exact component={ForgotPassword} />
//       {<Route path="*" component={NotFound} />}
//     </Switch>
//   );
// };
