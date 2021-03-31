import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import BurgerMenu from "./components/Styled/BurgerMenu";
import PageRoutes from "./routes/PageRoutes";

const AppWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: #ffffff;
  @media${(props) => props.theme.media.tablet} {
    flex-wrap: wrap;
  }
`;

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 42px 44px 0 42px;
  box-sizing: border-box;
  flex-wrap: wrap;
  @media${(props) => props.theme.media.tablet} {
    padding: 15px 15px 0 15px;
  }
`;

const App = () => {
  const [isActive, setActive] = useState(false);

  const handleMenu = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <AppWrapper>
      <BurgerMenu isActive={isActive} onMenuClick={handleMenu} />
      <NavBar isActive={isActive} onMenuClick={handleMenu} />
      <MainWrapper>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/main" />} />
          <Route path="/main" component={Dashboard} />
          <Route
            path="/people"
            component={() => <PageRoutes title={"People"} />}
          />

          <Route
            path="/operations"
            component={() => <PageRoutes title={"Operations"} />}
          />
          <Route
            path="/schedule-planning"
            component={() => <PageRoutes title={"SchedulePlanning"} />}
          />
          <Route
            path="/administration"
            component={() => <PageRoutes title={"Administration"} />}
          />
          <Route
            path="/action-tracking"
            component={() => <PageRoutes title={"ActionTracking"} />}
          />
          <Route
            render={() => (
              <div>
                <h1>404 not found</h1>
              </div>
            )}
          />
        </Switch>
      </MainWrapper>
    </AppWrapper>
  );
};

export default App;
