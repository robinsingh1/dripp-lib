import React from 'react'
import styles from './styles.module.css'
import DialogExample from './Dialog'
import SelectedImage from "./SelectedImage";
import PhotoTile from './tile'
import { photos } from "./photos";
import { 
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
  Home,
  AuthScreen,
  LoginScreen,
  PrivacyPolicy
} from "./App";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { 
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
  Home,
  AuthScreen,
  LoginScreen,
  PrivacyPolicy
}