import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Progress from "./components/top/Progress/Progress";
import Header from "./components/top/Header/Header";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./pages/questions/PageTransition";
import Name from "./pages/questions/Name/Name";
import Gender from "./pages/questions/Gender/Gender";
import Birthday from "./pages/questions/Birthday/Birthday";
import Email from "./pages/questions/Email/Email";
import Time from "./pages/questions/Time/Time";
import Place from "./pages/questions/Place/Place";

function App() {
  const footerRoutes = ["/name", "/gender", "/birthday", "/time", "/place", "/email"];
  const navigate = useNavigate();
  const location = useLocation();
  const shouldDisplayHeader = footerRoutes.includes(location.pathname);
  const navRoutes = ["/", "/about"];
  const shouldDisplayNavbar = navRoutes.includes(location.pathname);

  return (
    <div>
      {shouldDisplayHeader && <Header />}
      {shouldDisplayHeader && <Progress />}
      {shouldDisplayNavbar && <Navbar />}
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/name"
            element={
              <PageTransition>
                <Name />
              </PageTransition>
            }
          />
          <Route
            path="/gender"
            element={
              <PageTransition>
                <Gender />
              </PageTransition>
            }
          />
          <Route
            path="/birthday"
            element={
              <PageTransition>
                <Birthday />
              </PageTransition>
            }
          />
          <Route
            path="/time"
            element={
              <PageTransition>
                <Time />
              </PageTransition>
            }
          />
          <Route
            path="/place"
            element={
              <PageTransition>
                <Place />
              </PageTransition>
            }
          />
          <Route
            path="/email"
            element={
              <PageTransition>
                <Email />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
