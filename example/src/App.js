/* eslint-disable */
import { 
  DialogExample, 
  SelectedImage, 
  PhotoTile, 
  photos ,

  MainNav, 
  HomeFeed, 
  InfluencerProfile, 
  InfluencerPostDetails,
  InfluencerPost,
  About,
  SearchPage,
  Boards,
  Dashboard,
  AuthScreen,
  Home
} from 'dripp-lib'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import React from 'react'
import 'dripp-lib/dist/index.css';

class App extends React.Component  {
  render() {
  return (
     <Router>
       {/* 
      <MainNav />
      */}

        <Switch>
          <Route exact path="/" component={HomeFeed}>
          
          </Route>

          <Route path="/@:name" component={InfluencerProfile}>
          </Route>
          <Route path="/post/:id" component={InfluencerPostDetails} >
          </Route>
          <Route path="/login" component={AuthScreen} >
          </Route>
          <Route path="/influencer/post">
            <InfluencerPost />
          </Route>

          <Route path="/retailer">
            <About />
          </Route>

          <Route path="/search/:query" component={SearchPage}>
        
          </Route>

          <Route path="/boards" component={Boards}>
          </Route>

          <Route path="/brand" >
          </Route>

          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}
}

export default App;
