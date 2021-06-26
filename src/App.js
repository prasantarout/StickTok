import React from "react";
// import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

// Importing Theme Toggles Component
import ThemeToggler from "./components/ThemeToggler/";

// Importing General
import AuthRoute from "./routes/AuthRoute";
import CommonRoute from "./routes/CommonRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// Importing Auth Pages
import Signup from "./screens/auth/Signup";
import Login from "./screens/auth/Login";
import VerifyEmail from "./screens/auth/VerifyEmail";
import EmailVerified from "./screens/auth/EmailVerified";
import ForgotPassword from "./screens/auth/ForgotPassword";
import SelectCategories from "./screens/auth/SelectCategories";

// Importing Common Pages
import Home from "./screens/common/Home";
import TrendingPage from "./screens/common/Trending";
import ForYou from "./screens/common/ForYou";
import Followings from "./screens/common/Followings";
import Category from "./screens/common/Category";
import Upload_Video from "./screens/common/Upload_Video";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./Profile/Profile";
import Author from "./screens/common/Author";
import Course1 from "./screens/common/Course1";

// Theme and Brand Colors Configuration For Chakra UI
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({
  config,
  colors: {
    brand: {
      800: "#c40a2ccc",
      900: "#c40a2c",
    },
  },
});

export default function App() {
  const isAuthenticated = true;
  // const isAuthenticated =
  //   localStorage.getItem("isAuthenticated") === "true" ? true : false;
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      {/* <ThemeToggler /> */}
      <Router>
        {/* <Home/> */}
        <Switch>
          <AuthRoute
            exact={true}
            path="/select-intrested-categories"
            component={SelectCategories}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            exact={true}
            path="/forgot-password"
            component={ForgotPassword}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            exact={true}
            path="/email-verification/:verificationToken"
            component={EmailVerified}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            exact={true}
            path="/verify-email"
            component={VerifyEmail}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            exact={true}
            path="/login"
            component={Login}
            isAuthenticated={isAuthenticated}
          />
          <AuthRoute
            exact={true}
            path="/signup"
            component={Signup}
            isAuthenticated={isAuthenticated}
          />

          <ProtectedRoute
            exact={true}
            path="/trending"
            isAuthenticated={isAuthenticated}
            component={TrendingPage}
          />
          <ProtectedRoute
            exact={true}
            path="/followings"
            isAuthenticated={isAuthenticated}
            component={Followings}
          />
             <ProtectedRoute
            exact={true}
            path="/category"
            isAuthenticated={isAuthenticated}
            component={Category}
          />
          <ProtectedRoute
            exact={true}
            path="/for-you"
            isAuthenticated={isAuthenticated}
            component={ForYou}
          />
          <ProtectedRoute
            exact={true}
            path="/upload_video"
            isAuthenticated={isAuthenticated}
            component={Upload_Video}
          />
          <ProtectedRoute
            exact={true}
            path="/chat"
            isAuthenticated={isAuthenticated}
            component={Chat}
          />
          <ProtectedRoute
            exact={true}
            path="/profile"
            isAuthenticated={isAuthenticated}
            component={Profile}
          />


          <ProtectedRoute
            exact={true}
            path="/author"
            isAuthenticated={isAuthenticated}
            component={Author}
          />
           <ProtectedRoute
            exact={true}
            path="/course1"
            isAuthenticated={isAuthenticated}
            component={Course1}
          />

          <Route
            exact={TextTrackCueList}
            path="/"
            render={(props) => (
              <Redirect
                to={{
                  pathname: "/login",
                  state: {
                    from: props.location,
                  },
                }}
              />
            )}
          />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
