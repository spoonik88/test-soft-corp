import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import ActionTracking from './routes/ActionTracking';
import Administration from './routes/Administration';
import Operations from './routes/Operations';
import People from './routes/People';
import SchedulePlanning from './routes/SchedulePlanning';

const AppWrapper = styled.div`
max-width:1440px;
width:100%;
min-height: 100vh;
display:flex;
background: #FFFFFF;
`
const MainWrapper = styled.div`
width:100%;
display:flex;
padding: 42px 44px 0 42px;
    box-sizing: border-box;
    flex-wrap: wrap;
`


const App =()=>{
  const match = useRouteMatch("/");
  
  return (
    <AppWrapper >
       <Switch>
  <Route path="/404" render={() => <h1>404 Not Found!</h1>} />
  <Route>
    <Route>
    <NavBar/>
    
      <MainWrapper>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/main" exact component={Main} />
          <Route path="/people" component={People} /> 
          <Route path="/operations" component={Operations} />
          <Route path="/schedule-planning" component={SchedulePlanning} />
           <Route path="/administration" component={Administration} /> 
           <Route path="/action-tracking" component={ActionTracking} />

          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </MainWrapper>
      
    </Route>
  </Route>
</Switch>
    </AppWrapper>
 
  )
}



export default App;