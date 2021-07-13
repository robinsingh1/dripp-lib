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
  ChromePostDetails,
  InfluencerPost,
  About,
  SearchPage,
  Boards,
  Dashboard,
  AuthScreen,
  Home,
  LoginScreen,
  PrivacyPolicy
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
          <Route path="/auth" component={LoginScreen}>
          </Route>
          <Route path="/privacy" component={PrivacyPolicy}>
          </Route>
          <Route path="/@:name" component={InfluencerProfile}>
          </Route>
          <Route path="/post/:id" component={InfluencerPostDetails} >
          </Route>
          <Route path="/chrome/:id" component={ChromePostDetails} >
          </Route>
          <Route path="/c" >
            <ChromePostDetails currentImage={"https://i.pinimg.com/originals/a1/f4/6b/a1f46b66467f9a37b72a4346c3a49bdf.jpg"} />
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
