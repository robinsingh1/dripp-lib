//import logo from './logo.svg';
import Stories, { WithSeeMore } from 'react-insta-stories'
import Gallery, {Photo} from "react-photo-gallery";
import SelectedImage from "./SelectedImage";
import PhotoTile from './tile'
import HorizontalScroll from 'react-scroll-horizontal'
import {
  Alignment,
  Button,
  H5,
  Navbar,
} from "@blueprintjs/core";
import { GoogleLogin } from 'react-google-login';
import { Card, Elevation } from "@blueprintjs/core";
import DialogExample from './Dialog'
import firebase from 'firebase';
import { render } from '@testing-library/react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { photos } from "./photos";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import { ShoppingCart } from 'react-feather';
import Carousel, { Modal, ModalGateway } from "react-images";
import React, { useState, useCallback } from "react";
import Masonry from 'react-masonry-css'
import reactImageSize from 'react-image-size';

import './App.css';


var firebaseConfig = {
  apiKey: "AIzaSyB7SnAHuew4550eCG0rAMvS3637HcYDREg",
  authDomain: "dryp-e44a9.firebaseapp.com",
  databaseURL: "https://dryp-e44a9.firebaseio.com",
  projectId: "dryp-e44a9",
  storageBucket: "dryp-e44a9.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "1:979226334513:web:aca5a43ef25fbcdee48c10",
  measurementId: "G-MEASUREMENT_ID",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      console.log("yo")
      console.log(this)

      console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
      //this.props.history.push('/');

      console.log("yo")
      return false
    }
  },
};

console.log(window.location.origin)
let API_URL = (window.location.origin.includes("localhost")) ? 'http://localhost:5000' : 'https://dripp-py.herokuapp.com'
API_URL = (window.location.origin.includes("gitpod")) ? 'https://5000-peach-cat-avh4l9cg.ws-us08.gitpod.io' : API_URL


//API_URL = 'https://dripp-py.herokuapp.com'
/*
function api_url() {
  console.log("api_url")
  if(window.location.origin.includes("localhost")){
    const API_URL = 'http://localhost:5000'
  } else {
    const API_URL = 'https://dripp-py.herokuapp.com'
  }
  console.log(API_URL)
  return API_URL
}
*/
//function App() {

class App extends React.Component  {
  /*
   * Need to adjust as this only works with functional components
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    console.log("yo")
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  */

  /*
  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
          <div className="yoyo">
            <div>"bruh"</div>

              <img
        alt={photo.title}
        {...photo}
      />
          </div>
    ),
  );
  */





  render() {
    //console.log("user",this.state.user)
  return (
     <Router>
      <div style={{display:"none",position:"fixed",top:0,zIndex:100,paddingRight:10,backgroundColor:"white",width:"100%",height:60,fontWeight:"bold"}}>
        <a href="/" style={{textDecoration:"None"}}>
          <img src={"/logo2.png"} alt="Logo" style={{height:30,marginTop:10}}/>
          </a>


          <div style={{display:"inline-block",marginLeft:15,marginTop:-40}}>
            <Link to="/" style={{marginRight:5,textDecoration:"none",color:"black"}} >Inspiration</Link>
            <Link to="/" style={{marginRight:5,textDecoration:"none",color:"black"}}>Retailers</Link>
            <Link to="/" style={{marginRight:5,textDecoration:"none",color:"black"}}>Brands</Link>
          </div>

          <input text="text" type="text" style={{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:-35,fontSize:16,padding:10,borderRadius:30,textHighlight:"none",outline:"none",
                                                  width:300,backgroundColor:"#eee"}}/>
          <div style={{float:"right",marginTop:-30, marginRight:30}}>
            <ShoppingCart />
          </div>

      </div>
      <MainNav />

        <Switch>
          <Route exact path="/" component={HomeFeed}>
          
          </Route>

          <Route path="/@:name" component={InfluencerProfile}>
          </Route>
          <Route path="/post/:id" component={InfluencerPostDetails} >
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

export class MainNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  render() {
    return (
      <Navbar style={{position:"fixed",top:0,zIndex:11}}>
          <Navbar.Group align={Alignment.LEFT} style={{marginLeft:90}}>
              <Navbar.Heading>
                <a href="/"><img src={"/Group 33.png"} style={{marginTop:5, height:50}}/></a>
              </Navbar.Heading>
          </Navbar.Group>

          <Navbar.Group>
            <div className="bp3-input-group" style={{marginLeft:50}}>
              <form onSubmit={(e) => { 
                e.preventDefault()
                console.log("submit")
                window.location.href = "/search/"+document.getElementById("search-input").value.replace(" ","+")
                          }}>
              <input type="text" className="bp3-input bp3-large" id="search-input" placeholder="Search" large />
              </form>
              <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right bp3-large"></button>
            </div>
          </Navbar.Group>

          <Navbar.Group align={Alignment.RIGHT} style={{marginRight:90}}>
            <Button className="bp3-minimal bp3-large" icon="shopping-cart" text="$0.00" style={{display:"none"}}/>
            <Button className="bp3-minimal bp3-large" icon="bookmark" text="" onClick={() => window.location.href = "/boards"}/>
              <Button className="bp3-minimal bp3-large" icon="user" text="" />

              {(!this.props.user) ? <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} /> : <a onClick={() => 
                firebase.auth().signOut()
              }>Sign-out</a>
      }

              {/* 
              <GoogleLogin
                clientId="467393818187-jo9eqf5fu4apptd5h5gk0gp01chd0lb4.apps.googleusercontent.com"
                render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
              */}
              
          </Navbar.Group>
      </Navbar>
    )
  }
}

export class HomeFeed extends React.Component{
  
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      currentImage:0,
      user:null,
      setCurrentImage:0,
      viewerIsOpen: false,
      setViewerIsOpen: false
    }
 }
  componentWillMount(){
    window.addEventListener('scroll', (e) => { this.loadMore() });
  
    this.authFirebaseListener = firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.setState({user})
  
      this.setState({
        loading: false,  // For the loader maybe
        user, // User Details
        isAuth: true
      });
      let db = firebase.firestore();
      let _this = this;
  
      db.collection("Board").where("userId", "==", user.uid).get()
          .then(function(boards){
            console.log("boards",boards)
            let data = []  
            boards.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              //console.log(doc.id, " => ", doc.data());
              //return doc.data()
              let d = doc.data()
              d["id"] = doc.id
              data.push(d)
            })
            console.log(data)
  
            _this.setState({"boards":data})
          })
  
    });
  
    }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.loadMore);
    this.authFirebaseListener && this.authFirebaseListener() // Unlisten it by calling it as a function

}

loadMore() {
  if (window.innerHeight + document.documentElement.scrollTop  === document.scrollingElement.scrollHeight) {
    this.loadData()
  }
}

async getSize(img) {
  let src = img.url
  let { width, height } = await reactImageSize(src);
  //console.log(width, height)
  
  return {width: width, height: height, src:  src, ...img}
}

async loadData() {
  console.log(API_URL)
  let _this = this;
  let res = await fetch(`${API_URL}/rbgfeed`)
  let result = await res.json()
    
  //console.log(result)
  let feed = result.map(function(img) {
    //let imgSrc = img.replace("gs://","https://storage.googleapis.com/")      
    return _this.getSize(img)
  })   
  //console.log(feed)
  feed = await Promise.all(feed)
  //console.log("feed",feed)

  let _feed =  this.state.feed
  this.setState({
    feed: _feed.concat(feed)
  });
    
}

componentDidMount() {
  console.log("yo")
  this.loadData()

}

imageRenderer(index, left, top, key, photo ) {
    return <div>yoyo</div>
}

imageRenderer ({ index, left, top, key, photo }) {
    <SelectedImage
      key={key}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
    />
}
  render(){
    let { viewerIsOpen, closeLightbox, currentImage } = this.state

    return(
      <div>
      <div style={{paddingLeft:100,paddingRight:100,backgroundColor:"#eee",paddingTop:60}}>
              {
              (this.state.feed.length) ? 
                <Gallery photos={this.state.feed} 
                columns={5}
                margin={7}
                renderImage={props => { 

                  return <SelectedImage {...props} boards={this.state.boards} user={this.state.user}/>
                }}
                direction={"column"} 
                  onClick={(e, i, a) => {
                    let inf = i.photo.src.split("/")[5]
                    window.location.href=`/influencer/${inf}`
                  } }
                /> : <div></div>
                }
            </div>

            <div style={{display:"none"}}>
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                {this.state.feed.map(function(img){
                  //console.log(img)
                  return ( 
                  <div><img src={img.src} /> </div>)
                })}
            </Masonry>
            </div>

          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
    )
  }
}


const Photo1 = ({ index, onClick, photo, margin, direction, top, left, key }) => {
  const imgStyle = { margin: margin, display: 'block' };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <img
      key={key}
      style={onClick ? { ...imgStyle } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />
  );
};

const responseGoogle = (response) => {
  console.log(response);
}

export class InfluencerProfile extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      currentImage:0,
      setCurrentImage:0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      igPosts: []
    }
 }

 async getSize(img) {
  let src = img.url
  let { width, height } = await reactImageSize(src);
  //console.log(width, height)
  
  return {width: width, height: height, src:  src, ...img}
}

  async loadData() {
    console.log(API_URL)
    let _this = this;

    let res = await fetch(`${API_URL}/inf/rbg/${this.props.match.params.name}`)
    let result = await res.json()

      
    let feed = result.map(function(img) {
      //let imgSrc = img.replace("gs://","https://storage.googleapis.com/")      
      return _this.getSize(img)
    })   

    feed = await Promise.all(feed)

    let _feed =  this.state.feed
    this.setState({
      feed: _feed.concat(feed)
    });
      
  }

  componentDidMount() {
    console.log("yo")
    this.loadData()
    this.loadIGPosts()

  
  }

  loadIGPosts(){
    console.log("this props")
    console.log(this.props)
    fetch(`${API_URL}/inf/${this.props.match.params.name}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          let feed= result.map(function(img) {
            return {
              src: img,
              width:2,
              height:2,
            }
          })
          console.log(feed)
          this.setState({
            igPosts:feed 
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <div style={{paddingTop:50,paddingLeft:50}}>
          <div style={{height:100,width:100,borderRadius:200,display:"block"}}>
            <img src="https://storage.googleapis.com/dripp-pub/184601555_1414186115596009_4741948367379115170_n.jpeg" style={{height:200,borderRadius:200}}/>
          </div>
        <div style={{paddingLeft:250,marginTop:-50,marginBottom:75}}>
    <h2>{"@"+this.props.match.params.name}</h2>
          <button>Follow</button>
            </div>
        </div>
        <br/>
        <br/>
        {(this.state.feed.length) ? 
      <Gallery photos={this.state.feed} 
                columns={5}
                margin={7}
                renderImage={props => { 
                  console.log("props",props)
                  console.log(this.state.feed)
                  return <SelectedImage {...props} />
                }}
                direction={"column"} 
                  onClick={(e, i, a) => {
                    let inf = i.photo.src.split("/")[5]
                    window.location.href=`/influencer/${inf}`
                  } }
                /> : <div/> }

        {(this.state.igPosts.length) ?  <Gallery photos={this.state.igPosts} direction={"column"} /> : <div></div>}
      </div>
    );
  }
}

export function InfluencerPost() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <div style={{paddingTop:50,paddingLeft:50}}>
        <div style={{height:100,width:100,borderRadius:200,display:"block"}}>
          <img src="https://storage.googleapis.com/dripp-pub/184601555_1414186115596009_4741948367379115170_n.jpeg" style={{height:200,borderRadius:200}}/>
        </div>
      <div style={{paddingLeft:250,marginTop:-50,marginBottom:75}}>
        <h2>First Name, Last Name</h2>
        <button>Follow</button>
          </div>
      </div>
      <br/>
      <br/>
      <Gallery photos={photos} direction={"column"} />
    </div>
  );
}

export class InfluencerPostDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      currentImage:0,
      setCurrentImage:0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      recs: [],
      ecom: []
    }
 }

 async getSize(img) {
  let src = img.url
  let { width, height } = await reactImageSize(src);
  //console.log(width, height)
  
  return {width: width, height: height, src:  src, ...img}
}

  async loadData() {
    console.log(API_URL)
    let _this = this;
    if(this.props){
      console.log("params", this.props)
      console.log("params", this.props.match.params.id)

    }
    let recs_req = await fetch(`${API_URL}/recs/${this.props.match.params.id}`)
    let result = await recs_req.json()

    let ecom_req = await fetch(`${API_URL}/ecom/${this.props.match.params.id}`)
    let ecom = await ecom_req.json()

    this.setState({recs: result, ecom: ecom})

    let post = await fetch(`${API_URL}${window.location.pathname}`)
    post = await post.json()
    console.log("current post",post)
    console.log("current post",post[0])
    //post = post[0]
    post.src = post.url
    post.width = "auto"
    post.height = "auto"
    this.setState({currentPost: post})
      
    let feed = result.map(function(img) {
      //let imgSrc = img.replace("gs://","https://storage.googleapis.com/")      
      return _this.getSize(img)
    })   

    feed = await Promise.all(feed)

    let _feed =  this.state.feed
    this.setState({
      feed: _feed.concat(feed)
    });
      
  }

  componentDidMount() {
    console.log("yo")
    this.loadData()
  }

  render() {
    console.log(this.state.feed)
    console.log("yo",this.state.feed)
    let p = {}

    if(this.state.feed.length) {
      p = this.state.feed[0]
      p.width = 600*(p.height/p.width)
      p.height = 600

    } else {
    }
    const child   = { width: `30px`, height: `100px`,backgroundColor:"blue",margin:15}
    const parent  = { width: `300px`, height: `100px`,backgroundColor:"blue",margin:15}
    return (
    <div>

     
      <br/>
      <br/>
      <br/>
      <div style={{paddingTop:50,paddingLeft:50}}>
      
      
        <div style={{width:"50%",position:"relative",height:p.height,display:"block"}}>
         {(this.state.currentPost) ? <PhotoTile {...{photo: this.state.currentPost}} /> : <div /> }
        </div>
       
      <div style={{paddingLeft:0,marginTop:-550,marginBottom:75,marginLeft:350,float:"right",width:"50%"}}>
        <h2>Shop This Look</h2>
        
        <a href={(this.state.currentPost) ? `/@${this.state.currentPost.src.split("/")[5]}` : ""} >
        {(this.state.currentPost) ? `@${this.state.currentPost.src.split("/")[5]}` : ""}
        </a>
        <button>Follow</button>
        <br/>
        <br/>
          Tops
           <div style={{height:250,width:"100%",overflowX:"scroll" ,
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      overflowY:"hidden",
                      overflowX: "scroll"}}>
            {//[...Array(15).keys()].map(function(){
              this.state.ecom.slice(0, 4).map(function(item){
                console.log("ecom",item)
              return  (
                <div style={{margin:5,borderRadius:5,height:250}}>
                  <a href={item["og:url"]}>
                  <img src={item.img_url} style={{height:200,width:"auto",borderRadius:5}}/>
                  <h5 style={{margin:0}}>{item["og:title"]}: ${item["og:price:amount"]}</h5>
                  <h5 style={{margin:0}}>Aritzia</h5>
                 <div style={{display:"inline-block",margin:5, height:150,width:150,backgroundColor:"blue",visibility:"hidden"}}></div>
                  </a>
                </div>
              )
            })}
          </div>
          Bottoms
           <div style={{height:250,width:"100%",overflowX:"scroll" ,overflowY: "hidden",
                      display: "flex",
                      flexWrap: "wrap",
                      flexDirection: "column",
                      overflowX: "scroll"}}>
           {//[...Array(15).keys()].map(function(){
              this.state.ecom.slice(4, 8).map(function(item){
                console.log("ecom",item)
              return  (
                <div style={{margin:5,borderRadius:5,height:250}}>
                  <a href={item["og:url"]}>
                  <img src={item.img_url} style={{height:200,width:"auto",borderRadius:5}}/>
                  <h5 style={{margin:0}}>{item["og:title"]}: ${item["og:price:amount"]}</h5>
                  <h5 style={{margin:0}}>Aritzia</h5>
                 <div style={{display:"inline-block",margin:5, height:150,width:150,backgroundColor:"blue",visibility:"hidden"}}></div>
                  </a>
                </div>
              )
            })}
          </div>
        <div>
        </div>
        
      </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <div style={{marginLeft:90,marginRight:90}}>
      {(this.state.feed.length) ? 
      <Gallery photos={this.state.feed} 
                columns={5}
                margin={7}
                renderImage={props => { 
                  console.log("props",props)
                  console.log(this.state.feed)
                  return <SelectedImage {...props} />
                }}
                direction={"column"} 
                  onClick={(e, i, a) => {
                    let inf = i.photo.src.split("/")[5]
                    window.location.href=`/influencer/${inf}`
                  } }
                /> : <div/> }
                </div>
    </div>
  );
                }
}

export class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [],
      currentImage:0,
      setCurrentImage:0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: ""
    }
 }

 async getSize(img) {
  let src = img.url
  let { width, height } = await reactImageSize(src);
  //console.log(width, height)
  
  return {width: width, height: height, src:  src, ...img}
}
 async loadData() {
  console.log(API_URL)
  let _this = this;
  let res = await fetch(`${API_URL}/search/${this.props.match.params.query}`)
  let result = await res.json()
    
  //console.log(result)
  let feed = result.map(function(img) {
    //let imgSrc = img.replace("gs://","https://storage.googleapis.com/")      
    return _this.getSize(img)
  })   
  //console.log(feed)
  feed = await Promise.all(feed)
  //console.log("feed",feed)

  let _feed =  this.state.feed
  this.setState({
    feed: _feed.concat(feed)
  });
    
}

 componentDidMount() {
  this.loadData()
 }

  render() {
    console.log(this.props)
    let qry = this.props.match.params.query.replace("+"," ")
    return (
      <div style={{marginLeft:100,marginTop:100}}>
        <h2>Search : {qry}</h2>
        {(this.state.feed.length) ? 
      <Gallery photos={this.state.feed} 
                columns={5}
                margin={7}
                renderImage={props => { 
                  console.log("props",props)
                  console.log(this.state.feed)
                  return <SelectedImage {...props} />
                }}
                direction={"column"} 
                  onClick={(e, i, a) => {
                    let inf = i.photo.src.split("/")[5]
                    window.location.href=`/influencer/${inf}`
                  } }
                /> : <div/> }
      </div>
    )
  }
}

export function EcommPost() {
  return (
    <div>
      <h2>EcommPost</h2>
    </div>
  );
}

export function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


export class Boards extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        boards: [],
        userId: null
    }
 }

  componentWillMount() {
    let db = firebase.firestore();
    let _this = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user)
        _this.setState({userId: user.uid})
        
        db.collection("Board").where("userId", "==", user.uid).get()
        .then(function(boards){
          console.log("boards",boards)
          let data = []  
          boards.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            //return doc.data()
            data.push(doc.data())
          })
          console.log(data)

          _this.setState({"boards":data})
        })
      } else {
        // No user is signed in.
      }    
    });
  }

  addBoard(boards) {
    //let boards = this.state.boards
    //boards.push(boards)
    this.setState({boards})
  }

  render() {
  return (
    <div style={{marginTop:70,paddingLeft:110,paddingRight:100}}>
      <h2>Boards</h2>
      <DialogExample addBoard={(board) => { this.addBoard(board) }} boards={this.state.boards}/>
      <br/>
      <br/>
      <br/>
      {this.state.boards.map(function(board) { 
        return (
        <Card interactive={true} elevation={Elevation.TWO}
        style={{width:"25%",margin:10,display:"inline-block"}}>
          <h3><a href="#">{board.name}</a></h3>
        
        </Card>
        )
        })}
    </div>
  );
      }
}



export function About() {
  return (
    <div>
      <h2>About</h2>
      
    </div>
  );
}

export function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export class AuthScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      authScreen:true,
      login:true,
      signup: false
    }

    this.loginEmailInput = React.createRef();
    this.loginPasswordInput = React.createRef();

    this.signupEmailInput = React.createRef();
    this.signupPasswordInput = React.createRef();

    this.authScreen = React.createRef();
    this.appScreen = React.createRef();
  }

  render() {
    return (
      <div ref={this.authScreen} style={{width:"100%",textAlign:"center",display:(this.state.authScreen) ? "block": "none"}}>
          <br/>
          <br/>
          <img src="https://storage.googleapis.com/dripp-public/webassets/Group%2033.png" style={{height:100,width:100}}/>
          <br/>
          <br/>
          <br/>
          <div style={{marginBottom:20}}>
          <a onClick={() => { 
                        console.log("signup")
         this.setState({signup:true,login:false})
          }} style={{marginRight:10}}>Sign Up</a>
          |
          <a style={{marginLeft:10}} onClick={() => { 
            console.log("login")
            this.setState({signup:false,login:true})

          }}>Login</a>
</div>
          <form id="login-form" style={{display:(this.state.login) ? "block" : "none"}} onSubmit={(e) => { 
            e.preventDefault()
            console.log("login form submit")
          }}>
          <input ref={this.loginEmailInput} type="text" className="bp3-input bp3-large" id="search-input" placeholder="email" large />
          <br/>
          <br/>
          <input ref={this.loginPasswordInput} type="password" className="bp3-input bp3-large" id="search-input" placeholder="password" large />
          <br/>
          <br/>
          <br/>
          <button onClick={() => { 
            console.log(this.loginEmailInput.value)
            console.log(this.loginPasswordInput.value)
 
            var email = this.loginEmailInput.current.value
            var password = this.loginPasswordInput.current.value
            console.log("login",email, password)
            let _this = this;

            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in
              console.log("login user", userCredential)
              var user = userCredential.user;
              localStorage.setItem('dryp-auth',JSON.stringify(userCredential))
              // ...
              console.log("auth", _this.ref.authScreen)
              console.log("app",_this.ref.appScreen)
       
              _this.setState({appScreen: true, authScreen: false, user: userCredential})

            })
            .catch((error) => {
              console.log("error",error)
              var errorCode = error.code;
              var errorMessage = error.message;
            });

          }}>Login</button>
 
          </form>


          <form id="signup-form" style={{display:(this.state.signup) ? "block" : "none"}} onSubmit={(e) => { 
            e.preventDefault()
            console.log("login")
          }}>
          <input ref={this.signupEmailInput} type="text" className="bp3-input bp3-large" id="search-input" placeholder="email" large />
          <br/>
          <br/>
          <input ref={this.signupPasswordInput} type="password" className="bp3-input bp3-large" id="search-input" placeholder="password" large />
          <br/>
          <br/>
          <input type="password" className="bp3-input bp3-large" id="search-input" placeholder="password" large />
          <br/>
          <br/>
          <br/>
          
          <button onClick={() => { 
            console.log(this.signupEmailInput)
            console.log(this.signupPasswordInput)
            var email = this.signupEmailInput.current.value
            var password = this.signupPasswordInput.current.value
            console.log(email, password)
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              // Signed in 
              console.log(userCredential)
              var user = userCredential.user;
              localStorage.setItem('dryp-auth',JSON.stringify(userCredential))
              // ...
              this.setState({appScreen: true, authScreen: false, user: userCredential})

            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              // ..
            });
          

          }}>Signup</button>          
          </form>
        </div>
    )
  }
}

/*
      <Stories
			stories={stories2}
			defaultInterval={1500}
			width={432}
			height={768}
		/>
*/

const Story2 = ({ action, isPaused }) => {
	return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#16161d' }}>
		<h1>You get the control of the story.</h1>
		<p>Render your custom JSX by passing just a <code style={{ fontStyle: 'italic' }}>content</code> property inside your story object.</p>
		<p>You get a <code style={{ fontStyle: 'italic' }}>action</code> prop as an input to your content function, that can be used to play or pause the story.</p>
		<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
		<h4>v2 is out 🎉</h4>
		<p>React Native version coming soon.</p>
	</div>
}

const stories2 = [
	{
		content: ({ action, isPaused }) => {
			return <div style={contentStyle}>
				<h1>The new version is here.</h1>
				<p>This is the new story.</p>
				<p>Now render React components right into your stories.</p>
				<p>Possibilities are endless, like here - here's a code block!</p>
				<pre>
					<code style={code}>
						console.log('Hello, world!')
        			</code>
				</pre>
				<p>Or here, an image!</p>
				<br />
				<img style={image} src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
				<h3>Perfect. But there's more! →</h3>
			</div>
		}
	},
	{
		content: ({ action, story }) => {
			return <WithSeeMore story={story} action={action}><div style={{ background: 'pink', padding: 20 }}>
				<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
				<h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
			</div></WithSeeMore>
		},
		seeMoreCollapsed: ({ toggleMore, action }) => <p style={customSeeMore} onClick={() => toggleMore(true)}>A custom See More message →</p>,
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
		duration: 5000
	},
	{
		url: 'https://picsum.photos/1080/1920',
		seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>
	},
	{
		url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
		type: 'video'
	},
	{
		content: Story2
	}
]

const image = {
	display: 'block',
	maxWidth: '100%',
	borderRadius: 4,
}

const code = {
	background: '#eee',
	padding: '5px 10px',
	borderRadius: '4px',
	color: '#333'
}

const contentStyle = {
	background: 'salmon',
	width: '100%',
	padding: 20,
	color: 'white'
}

const customSeeMore = {
	textAlign: 'center',
	fontSize: 14,
	bottom: 20,
	position: 'relative'
}

export default App;