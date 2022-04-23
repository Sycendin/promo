import React, { Fragment, useState } from "react";
import Home from "./components/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Intro from "./components/Intro/Intro";
import AppNav from "./components/AppLinks/AppNav/AppNav";
import TwitterTimeline from "./components/TwitterTimeline/TwitterTimeline";
import CardList from "./components/CardDisplay/CardList";
function App() {
  const [timer, setTimer] = useState(false);

  const change = () => {
    setTimer(true);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route
            path="/promo/"
            element={
              localStorage.getItem("visted") || timer ? (
                <Home />
              ) : (
                <Intro change={change} />
              )
            }
          />
          <Route
            path="/promo/news"
            element={
              <Fragment>
                <AppNav />{" "}
                <TwitterTimeline cOptions={{ height: "100vh", width: "50%" }} />
              </Fragment>
            }
          />
          <Route
            path="/promo/roster"
            element={
              <Fragment>
                <AppNav /> <CardList />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
