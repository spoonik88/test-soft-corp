import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import ActionTracking from "./routes/ActionTracking";
import Administration from "./routes/Administration";
import Operations from "./routes/Operations";
import People from "./routes/People";
import SchedulePlanning from "./routes/SchedulePlanning";

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
`;

const App = () => {
  const match = useRouteMatch("/");

  return (
    <AppWrapper>
      <NavBar />
      <MainWrapper>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/main" />} />
          <Route path="/main" component={Main} />
          <Route path="/people" component={People} />{/*TODO return InProgress Component*/}
          <Route path="/operations" component={() => <Operations title={"Operations"}/>} />
          <Route path="/schedule-planning" component={SchedulePlanning} />
          <Route path="/administration" component={Administration} />
          <Route path="/action-tracking" component={ActionTracking} />
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
