import React__default, { Component, createElement, useState, useEffect } from 'react';
import { Button, Dialog, Classes, AnchorButton, Intent, H5, Switch, Code, Icon, Popover, Menu, MenuItem, Position, Navbar, Alignment, Card, Elevation } from '@blueprintjs/core';
import { Tooltip2, Popover2 } from '@blueprintjs/popover2';
import firebase from 'firebase';
import ColorThief from 'colorthief';
import 'color-thief-react';
import 'react-insta-stories';
import Gallery from 'react-photo-gallery';
import 'react-scroll-horizontal';
import 'react-google-login';
import '@testing-library/react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import 'react-router-dom';
import 'feather-icons-react';
import 'react-feather';
import Carousel, { ModalGateway, Modal } from 'react-images';
import Masonry from 'react-masonry-css';
import reactImageSize from 'react-image-size';

var styles = {"test":"_styles-module__test__3ybTi"};

class DialogExample extends Component {
  constructor(props) {
    super(props);

    this.handleOpen = () => this.setState({
      isOpen: true
    });

    this.handleClose = () => this.setState({
      isOpen: false
    });

    this.state = {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true,
      userId: null
    };
  }

  componentWillMount() {}

  componentDidMount() {
    let user = firebase.auth().currentUser;
    console.log(user);

    if (user) {
      this.setState({
        userId: user.uid
      });
    }

    let _this = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);

        _this.setState({
          userId: user.uid
        });
      }
    });
  }

  addBoard(board) {}

  render() {
    let {
      addBoard,
      boards
    } = this.props;

    let _this = this;

    return /*#__PURE__*/createElement("div", null, /*#__PURE__*/createElement(Button, {
      onClick: this.handleOpen
    }, "Show dialog"), /*#__PURE__*/createElement(Dialog, Object.assign({
      icon: "info-sign",
      onClose: this.handleClose,
      title: "Palantir Foundry"
    }, this.state), /*#__PURE__*/createElement("div", {
      className: Classes.DIALOG_BODY
    }, /*#__PURE__*/createElement("input", {
      type: "text",
      className: "bp3-input bp3-large",
      placeholder: "Board Name",
      id: "board_name",
      large: true,
      style: {
        width: "100%"
      }
    })), /*#__PURE__*/createElement("div", {
      className: Classes.DIALOG_FOOTER
    }, /*#__PURE__*/createElement("div", {
      className: Classes.DIALOG_FOOTER_ACTIONS
    }, /*#__PURE__*/createElement(Tooltip2, {
      content: "This button is hooked up to close the dialog."
    }, /*#__PURE__*/createElement(Button, {
      onClick: this.handleClose
    }, "Close")), /*#__PURE__*/createElement(AnchorButton, {
      intent: Intent.PRIMARY,
      target: "_blank",
      onClick: () => {
        let db = firebase.firestore();
        console.log("clicked");
        console.log(this.state);
        console.log(document.getElementById("board_name").value);
        let name = document.getElementById("board_name").value;
        let userId = this.state.userId;
        let board = {
          userId: userId,
          name: name,
          createdAt: Date.now()
        };
        db.collection('Board').add(board).then(() => {
          console.log("Document successfully written!");
          boards = [board].concat(boards);

          _this.props.addBoard(boards);

          _this.handleClose();
        }).catch(error => {
          console.error("Error writing document: ", error);
        });
      }
    }, "Create")))));
  }

  renderOptions() {
    const {
      autoFocus,
      enforceFocus,
      canEscapeKeyClose,
      canOutsideClickClose,
      usePortal
    } = this.state;
    return /*#__PURE__*/createElement(Fragment, null, /*#__PURE__*/createElement(H5, null, "Props"), /*#__PURE__*/createElement(Switch, {
      checked: autoFocus,
      label: "Auto focus",
      onChange: this.handleAutoFocusChange
    }), /*#__PURE__*/createElement(Switch, {
      checked: enforceFocus,
      label: "Enforce focus",
      onChange: this.handleEnforceFocusChange
    }), /*#__PURE__*/createElement(Switch, {
      checked: usePortal,
      onChange: this.handleUsePortalChange
    }, "Use ", /*#__PURE__*/createElement(Code, null, "Portal")), /*#__PURE__*/createElement(Switch, {
      checked: canOutsideClickClose,
      label: "Click outside to close",
      onChange: this.handleOutsideClickChange
    }), /*#__PURE__*/createElement(Switch, {
      checked: canEscapeKeyClose,
      label: "Escape key to close",
      onChange: this.handleEscapeKeyChange
    }));
  }

}

const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected,
  boards,
  user
}) => {
  boards = boards ? boards : [];
  const [isSelected, setIsSelected] = useState(selected);
  const [inHover, setHover] = useState(false);

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = e => {
    setIsSelected(!isSelected);
    console.log(e);
    let inf = e.src.split("/")[5];
  };

  useEffect(() => {
    setIsSelected(selected);

    let _img = document.querySelector(`.${id}`);

    let colorThief = new ColorThief();
  }, [selected]);
  let id = '_' + Math.random().toString(36).substr(2, 9);

  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      margin,
      height: photo.height,
      width: photo.width,
      ...cont,
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: 5
    },
    className: !isSelected ? "not-selected" : "",
    onClick: () => {
      handleOnClick(photo);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React__default.createElement("h5", {
    style: {
      display: "none"
    }
  }, " HOVER "), inHover ? /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: 40,
      width: photo.width,
      backgroundColor: "rgba(0,0,0,0.5)",
      position: "relative",
      zIndex: 10,
      opacity: 1,
      top: photo.height / 2 - 50
    }
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: "bp3-minimal bp3-large",
    text: "",
    color: "white",
    style: {
      color: "white"
    },
    style: {
      width: photo.width / 3
    },
    onClick: (e, i) => {
      let db = firebase.firestore();
      console.log("click", e, i);
      console.log("clicked");
      let favPost = {
        userId: user.uid,
        postId: photo.id,
        createdAt: Date.now()
      };
      db.collection('FavoritePost').add(favPost).then(() => {
        console.log("Document successfully written!");
      }).catch(error => {
        console.error("Error writing document: ", error);
      });
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    icon: "heart",
    iconSize: 20,
    color: "white"
  })), /*#__PURE__*/React__default.createElement(Popover, {
    placement: "right",
    interactionKind: "click",
    onInteraction: state => undefined.handleInteraction(state),
    content: /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Menu, {
      style: {
        height: 200,
        overflow: "scroll"
      }
    }, boards.map(board => {
      return /*#__PURE__*/React__default.createElement(MenuItem, {
        text: board.name,
        onClick: (e, i) => {
          let db = firebase.firestore();
          console.log("click", e, i);
          console.log("click", board);
          console.log("clicked");
          let boardPost = {
            userId: user.uid,
            boardId: board.id,
            postId: photo.id,
            createdAt: Date.now()
          };
          db.collection('BoardPost').add(boardPost).then(() => {
            console.log("Document successfully written!");
          }).catch(error => {
            console.error("Error writing document: ", error);
          });
        },
        labelElement: /*#__PURE__*/React__default.createElement(Icon, {
          icon: "add"
        })
      });
    }))),
    position: Position.RIGHT_TOP
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: "bp3-minimal bp3-large",
    text: "",
    style: {
      width: photo.width / 3
    },
    onClick: e => {
      if (!user) {
        e.preventDefault();
        console.log("not signed in");
      }
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    icon: "bookmark",
    iconSize: 20,
    color: "white"
  }))), /*#__PURE__*/React__default.createElement(Popover2, {
    content: /*#__PURE__*/React__default.createElement(Menu, null, /*#__PURE__*/React__default.createElement(MenuItem, {
      text: "Twitter",
      labelElement: /*#__PURE__*/React__default.createElement(Icon, {
        icon: "twitter"
      })
    }), /*#__PURE__*/React__default.createElement(MenuItem, {
      text: "Facebook",
      labelElement: /*#__PURE__*/React__default.createElement(Icon, {
        icon: "facebook"
      })
    }), /*#__PURE__*/React__default.createElement(MenuItem, {
      text: "Instagram",
      labelElement: /*#__PURE__*/React__default.createElement(Icon, {
        icon: "instagram"
      })
    })),
    position: Position.RIGHT_TOP
  }, /*#__PURE__*/React__default.createElement(Button, {
    className: "bp3-minimal bp3-large",
    text: "",
    color: "white",
    style: {
      color: "white"
    },
    style: {
      width: photo.width / 3
    }
  }, /*#__PURE__*/React__default.createElement(Icon, {
    icon: "share",
    iconSize: 20,
    color: "white"
  })))) : /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("a", {
    href: `/post/${photo.id}`
  }, /*#__PURE__*/React__default.createElement("img", Object.assign({
    alt: photo.title
  }, photo, {
    className: id,
    style: {
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 3
    }
  })), /*#__PURE__*/React__default.createElement("img", Object.assign({
    alt: photo.orig.replace("croppedrembg", "croppedorig")
  }, photo, {
    src: photo.src.replace("croppedrembg", "croppedorig"),
    className: id,
    style: {
      opacity: 0.1,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 3,
      height: photo.height - 80,
      marginTop: 40,
      filter: "blur(2px)"
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginTop: 40,
      height: photo.height - 80,
      width: photo.width,
      ...cont,
      backgroundColor: photo.cc,
      borderRadius: 5,
      opacity: 0.5,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2
    }
  })));
};

class PhotoTile extends React__default.Component {
  render() {
    let {
      photo
    } = this.props;
    let margin = 5;
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        margin,
        width: photo.width,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0)",
        borderRadius: 5,
        textAlign: "center"
      }
    }, /*#__PURE__*/React__default.createElement("a", {
      href: `/post/${photo.src.split("/").pop()}`
    }, /*#__PURE__*/React__default.createElement("img", Object.assign({
      id: "main",
      alt: photo.title
    }, photo, {
      style: {
        opacity: 1,
        top: 0,
        left: 0,
        zIndex: 3,
        maxWidth: "80%",
        maxHeight: "100%",
        marginRight: "auto",
        marginLeft: "auto"
      }
    })), /*#__PURE__*/React__default.createElement("img", Object.assign({}, photo, {
      src: photo.src.replace("croppedrembg", "croppedorig"),
      style: {
        opacity: 0.1,
        top: 0,
        left: 0,
        zIndex: 3,
        maxWidth: "80%",
        textAlign: "center",
        left: 0,
        right: 0,
        position: "absolute",
        maxHeight: "100%",
        marginRight: "auto",
        marginLeft: "auto",
        height: photo.height - 80,
        filter: "blur(2px)"
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginTop: 40,
        height: photo.height - 80,
        width: photo.width,
        backgroundColor: photo.cc,
        borderRadius: 5,
        opacity: 0.5,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 2
      }
    }), /*#__PURE__*/React__default.createElement("style", null, `.not-selected:hover{outline:2px solid #06befa}`)));
  }

}

const photos = [{
  src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  width: 1,
  height: 1
}, {
  src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
  width: 3,
  height: 4
}, {
  src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
  width: 4,
  height: 3
}, {
  src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
  width: 4,
  height: 3
}];

var firebaseConfig = {
  apiKey: "AIzaSyB7SnAHuew4550eCG0rAMvS3637HcYDREg",
  authDomain: "dryp-e44a9.firebaseapp.com",
  databaseURL: "https://dryp-e44a9.firebaseio.com",
  projectId: "dryp-e44a9",
  storageBucket: "dryp-e44a9.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "1:979226334513:web:aca5a43ef25fbcdee48c10",
  measurementId: "G-MEASUREMENT_ID"
};
firebase.initializeApp(firebaseConfig);
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (authResult, redirectUrl) => {
      console.log("yo");
      console.log(undefined);
      console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
      console.log("yo");
      return false;
    }
  }
};
console.log(window.location.origin);
let API_URL = window.location.origin.includes("localhost") ? 'http://localhost:5000' : 'https://dripp-py.herokuapp.com';
API_URL = window.location.origin.includes("gitpod") ? 'https://5000-peach-cat-avh4l9cg.ws-us08.gitpod.io' : API_URL;

class MainNav extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render() {
    return /*#__PURE__*/React__default.createElement(Navbar, {
      style: {
        position: "fixed",
        top: 0,
        zIndex: 11
      }
    }, /*#__PURE__*/React__default.createElement(Navbar.Group, {
      align: Alignment.LEFT,
      style: {
        marginLeft: 90
      }
    }, /*#__PURE__*/React__default.createElement(Navbar.Heading, null, /*#__PURE__*/React__default.createElement("a", {
      href: "/"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: "/Group 33.png",
      style: {
        marginTop: 5,
        height: 50
      }
    })))), /*#__PURE__*/React__default.createElement(Navbar.Group, null, /*#__PURE__*/React__default.createElement("div", {
      className: "bp3-input-group",
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/React__default.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        console.log("submit");
        window.location.href = "/search/" + document.getElementById("search-input").value.replace(" ", "+");
      }
    }, /*#__PURE__*/React__default.createElement("input", {
      type: "text",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "Search",
      large: true
    })), /*#__PURE__*/React__default.createElement("button", {
      className: "bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right bp3-large"
    }))), /*#__PURE__*/React__default.createElement(Navbar.Group, {
      align: Alignment.RIGHT,
      style: {
        marginRight: 90
      }
    }, /*#__PURE__*/React__default.createElement(Button, {
      className: "bp3-minimal bp3-large",
      icon: "shopping-cart",
      text: "$0.00",
      style: {
        display: "none"
      }
    }), /*#__PURE__*/React__default.createElement(Button, {
      className: "bp3-minimal bp3-large",
      icon: "bookmark",
      text: "",
      onClick: () => window.location.href = "/boards"
    }), /*#__PURE__*/React__default.createElement(Button, {
      className: "bp3-minimal bp3-large",
      icon: "user",
      text: ""
    }), !this.props.user ? /*#__PURE__*/React__default.createElement(StyledFirebaseAuth, {
      uiConfig: uiConfig,
      firebaseAuth: firebase.auth()
    }) : /*#__PURE__*/React__default.createElement("a", {
      onClick: () => firebase.auth().signOut()
    }, "Sign-out")));
  }

}
class HomeFeed extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      currentImage: 0,
      user: null,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', e => {
      this.loadMore();
    });
    this.authFirebaseListener = firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.setState({
        user
      });
      this.setState({
        loading: false,
        user,
        isAuth: true
      });
      let db = firebase.firestore();

      let _this = this;

      db.collection("Board").where("userId", "==", user.uid).get().then(function (boards) {
        console.log("boards", boards);
        let data = [];
        boards.forEach(doc => {
          let d = doc.data();
          d["id"] = doc.id;
          data.push(d);
        });
        console.log(data);

        _this.setState({
          "boards": data
        });
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMore);
    this.authFirebaseListener && this.authFirebaseListener();
  }

  loadMore() {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      this.loadData();
    }
  }

  async getSize(img) {
    let src = img.url;
    let {
      width,
      height
    } = await reactImageSize(src);
    return {
      width: width,
      height: height,
      src: src,
      ...img
    };
  }

  async loadData() {
    console.log(API_URL);

    let _this = this;

    let res = await fetch(`${API_URL}/rbgfeed`);
    let result = await res.json();
    let feed = result.map(function (img) {
      return _this.getSize(img);
    });
    feed = await Promise.all(feed);
    let _feed = this.state.feed;
    this.setState({
      feed: _feed.concat(feed)
    });
  }

  componentDidMount() {
    console.log("yo");
    this.loadData();
  }

  imageRenderer(index, left, top, key, photo) {
    return /*#__PURE__*/React__default.createElement("div", null, "yoyo");
  }

  imageRenderer({
    index,
    left,
    top,
    key,
    photo
  }) {
  }

  render() {
    let {
      viewerIsOpen,
      closeLightbox,
      currentImage
    } = this.state;
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: "#eee",
        paddingTop: 60
      }
    }, this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: props => {
        return /*#__PURE__*/React__default.createElement(SelectedImage, Object.assign({}, props, {
          boards: this.state.boards,
          user: this.state.user
        }));
      },
      direction: "column",
      onClick: (e, i, a) => {
        let inf = i.photo.src.split("/")[5];
        window.location.href = `/influencer/${inf}`;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null)), /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: "none"
      }
    }, /*#__PURE__*/React__default.createElement(Masonry, {
      breakpointCols: 3,
      className: "my-masonry-grid",
      columnClassName: "my-masonry-grid_column"
    }, this.state.feed.map(function (img) {
      return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
        src: img.src
      }), " ");
    }))), /*#__PURE__*/React__default.createElement(ModalGateway, null, viewerIsOpen ? /*#__PURE__*/React__default.createElement(Modal, {
      onClose: closeLightbox
    }, /*#__PURE__*/React__default.createElement(Carousel, {
      currentIndex: currentImage,
      views: photos.map(x => ({ ...x,
        srcset: x.srcSet,
        caption: x.title
      }))
    })) : null));
  }

}

class InfluencerProfile extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      igPosts: []
    };
  }

  async getSize(img) {
    let src = img.url;
    let {
      width,
      height
    } = await reactImageSize(src);
    return {
      width: width,
      height: height,
      src: src,
      ...img
    };
  }

  async loadData() {
    console.log(API_URL);

    let _this = this;

    let res = await fetch(`${API_URL}/inf/rbg/${this.props.match.params.name}`);
    let result = await res.json();
    let feed = result.map(function (img) {
      return _this.getSize(img);
    });
    feed = await Promise.all(feed);
    let _feed = this.state.feed;
    this.setState({
      feed: _feed.concat(feed)
    });
  }

  componentDidMount() {
    console.log("yo");
    this.loadData();
    this.loadIGPosts();
  }

  loadIGPosts() {
    console.log("this props");
    console.log(this.props);
    fetch(`${API_URL}/inf/${this.props.match.params.name}`).then(res => res.json()).then(result => {
      console.log(result);
      let feed = result.map(function (img) {
        return {
          src: img,
          width: 2,
          height: 2
        };
      });
      console.log(feed);
      this.setState({
        igPosts: feed
      });
    }, error => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render() {
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingTop: 50,
        paddingLeft: 50
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        height: 100,
        width: 100,
        borderRadius: 200,
        display: "block"
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      src: "https://storage.googleapis.com/dripp-pub/184601555_1414186115596009_4741948367379115170_n.jpeg",
      style: {
        height: 200,
        borderRadius: 200
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingLeft: 250,
        marginTop: -50,
        marginBottom: 75
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "@" + this.props.match.params.name), /*#__PURE__*/React__default.createElement("button", null, "Follow"))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: props => {
        console.log("props", props);
        console.log(this.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: (e, i, a) => {
        let inf = i.photo.src.split("/")[5];
        window.location.href = `/influencer/${inf}`;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null), this.state.igPosts.length ? /*#__PURE__*/React__default.createElement(Gallery, {
      photos: this.state.igPosts,
      direction: "column"
    }) : /*#__PURE__*/React__default.createElement("div", null));
  }

}
function InfluencerPost() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
    style: {
      paddingTop: 50,
      paddingLeft: 50
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: 100,
      width: 100,
      borderRadius: 200,
      display: "block"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: "https://storage.googleapis.com/dripp-pub/184601555_1414186115596009_4741948367379115170_n.jpeg",
    style: {
      height: 200,
      borderRadius: 200
    }
  })), /*#__PURE__*/React__default.createElement("div", {
    style: {
      paddingLeft: 250,
      marginTop: -50,
      marginBottom: 75
    }
  }, /*#__PURE__*/React__default.createElement("h2", null, "First Name, Last Name"), /*#__PURE__*/React__default.createElement("button", null, "Follow"))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(Gallery, {
    photos: photos,
    direction: "column"
  }));
}
class InfluencerPostDetails extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      recs: [],
      ecom: []
    };
  }

  async getSize(img) {
    let src = img.url;
    let {
      width,
      height
    } = await reactImageSize(src);
    return {
      width: width,
      height: height,
      src: src,
      ...img
    };
  }

  async loadData() {
    console.log(API_URL);

    let _this = this;

    if (this.props) {
      console.log("params", this.props);
      console.log("params", this.props.match.params.id);
    }

    let recs_req = await fetch(`${API_URL}/recs/${this.props.match.params.id}`);
    let result = await recs_req.json();
    let ecom_req = await fetch(`${API_URL}/ecom/${this.props.match.params.id}`);
    let ecom = await ecom_req.json();
    this.setState({
      recs: result,
      ecom: ecom
    });
    let post = await fetch(`${API_URL}${window.location.pathname}`);
    post = await post.json();
    console.log("current post", post);
    console.log("current post", post[0]);
    post.src = post.url;
    post.width = "auto";
    post.height = "auto";
    this.setState({
      currentPost: post
    });
    let feed = result.map(function (img) {
      return _this.getSize(img);
    });
    feed = await Promise.all(feed);
    let _feed = this.state.feed;
    this.setState({
      feed: _feed.concat(feed)
    });
  }

  componentDidMount() {
    console.log("yo");
    this.loadData();
  }

  render() {
    console.log(this.state.feed);
    console.log("yo", this.state.feed);
    let p = {};

    if (this.state.feed.length) {
      p = this.state.feed[0];
      p.width = 600 * (p.height / p.width);
      p.height = 600;
    }
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingTop: 50,
        paddingLeft: 50
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        width: "50%",
        position: "relative",
        height: p.height,
        display: "block"
      }
    }, this.state.currentPost ? /*#__PURE__*/React__default.createElement(PhotoTile, {
      photo: this.state.currentPost
    }) : /*#__PURE__*/React__default.createElement("div", null)), /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingLeft: 0,
        marginTop: -550,
        marginBottom: 75,
        marginLeft: 350,
        float: "right",
        width: "50%"
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Shop This Look"), /*#__PURE__*/React__default.createElement("a", {
      href: this.state.currentPost ? `/@${this.state.currentPost.src.split("/")[5]}` : ""
    }, this.state.currentPost ? `@${this.state.currentPost.src.split("/")[5]}` : ""), /*#__PURE__*/React__default.createElement("button", null, "Follow"), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), "Tops", /*#__PURE__*/React__default.createElement("div", {
      style: {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        overflowY: "hidden",
        overflowX: "scroll"
      }
    }, this.state.ecom.slice(0, 4).map(function (item) {
      console.log("ecom", item);
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          margin: 5,
          borderRadius: 5,
          height: 250
        }
      }, /*#__PURE__*/React__default.createElement("a", {
        href: item["og:url"]
      }, /*#__PURE__*/React__default.createElement("img", {
        src: item.img_url,
        style: {
          height: 200,
          width: "auto",
          borderRadius: 5
        }
      }), /*#__PURE__*/React__default.createElement("h5", {
        style: {
          margin: 0
        }
      }, item["og:title"], ": $", item["og:price:amount"]), /*#__PURE__*/React__default.createElement("h5", {
        style: {
          margin: 0
        }
      }, "Aritzia"), /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: "inline-block",
          margin: 5,
          height: 150,
          width: 150,
          backgroundColor: "blue",
          visibility: "hidden"
        }
      })));
    })), "Bottoms", /*#__PURE__*/React__default.createElement("div", {
      style: {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        overflowX: "scroll"
      }
    }, this.state.ecom.slice(4, 8).map(function (item) {
      console.log("ecom", item);
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          margin: 5,
          borderRadius: 5,
          height: 250
        }
      }, /*#__PURE__*/React__default.createElement("a", {
        href: item["og:url"]
      }, /*#__PURE__*/React__default.createElement("img", {
        src: item.img_url,
        style: {
          height: 200,
          width: "auto",
          borderRadius: 5
        }
      }), /*#__PURE__*/React__default.createElement("h5", {
        style: {
          margin: 0
        }
      }, item["og:title"], ": $", item["og:price:amount"]), /*#__PURE__*/React__default.createElement("h5", {
        style: {
          margin: 0
        }
      }, "Aritzia"), /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: "inline-block",
          margin: 5,
          height: 150,
          width: 150,
          backgroundColor: "blue",
          visibility: "hidden"
        }
      })));
    })), /*#__PURE__*/React__default.createElement("div", null))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginLeft: 90,
        marginRight: 90
      }
    }, this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: props => {
        console.log("props", props);
        console.log(this.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: (e, i, a) => {
        let inf = i.photo.src.split("/")[5];
        window.location.href = `/influencer/${inf}`;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null)));
  }

}
class SearchPage extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: ""
    };
  }

  async getSize(img) {
    let src = img.url;
    let {
      width,
      height
    } = await reactImageSize(src);
    return {
      width: width,
      height: height,
      src: src,
      ...img
    };
  }

  async loadData() {
    console.log(API_URL);

    let _this = this;

    let res = await fetch(`${API_URL}/search/${this.props.match.params.query}`);
    let result = await res.json();
    let feed = result.map(function (img) {
      return _this.getSize(img);
    });
    feed = await Promise.all(feed);
    let _feed = this.state.feed;
    this.setState({
      feed: _feed.concat(feed)
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    console.log(this.props);
    let qry = this.props.match.params.query.replace("+", " ");
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginLeft: 100,
        marginTop: 100
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Search : ", qry), this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: props => {
        console.log("props", props);
        console.log(this.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: (e, i, a) => {
        let inf = i.photo.src.split("/")[5];
        window.location.href = `/influencer/${inf}`;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null));
  }

}
function Home() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "Home"));
}
class Boards extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [],
      userId: null
    };
  }

  componentWillMount() {
    let db = firebase.firestore();

    let _this = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);

        _this.setState({
          userId: user.uid
        });

        db.collection("Board").where("userId", "==", user.uid).get().then(function (boards) {
          console.log("boards", boards);
          let data = [];
          boards.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            data.push(doc.data());
          });
          console.log(data);

          _this.setState({
            "boards": data
          });
        });
      }
    });
  }

  addBoard(boards) {
    this.setState({
      boards
    });
  }

  render() {
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginTop: 70,
        paddingLeft: 110,
        paddingRight: 100
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Boards"), /*#__PURE__*/React__default.createElement(DialogExample, {
      addBoard: board => {
        this.addBoard(board);
      },
      boards: this.state.boards
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), this.state.boards.map(function (board) {
      return /*#__PURE__*/React__default.createElement(Card, {
        interactive: true,
        elevation: Elevation.TWO,
        style: {
          width: "25%",
          margin: 10,
          display: "inline-block"
        }
      }, /*#__PURE__*/React__default.createElement("h3", null, /*#__PURE__*/React__default.createElement("a", {
        href: "#"
      }, board.name)));
    }));
  }

}
function About() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "About"));
}
function Dashboard() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "Dashboard"));
}
class AuthScreen extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      authScreen: true,
      login: true,
      signup: false
    };
    this.loginEmailInput = React__default.createRef();
    this.loginPasswordInput = React__default.createRef();
    this.signupEmailInput = React__default.createRef();
    this.signupPasswordInput = React__default.createRef();
    this.authScreen = React__default.createRef();
    this.appScreen = React__default.createRef();
  }

  render() {
    return /*#__PURE__*/React__default.createElement("div", {
      ref: this.authScreen,
      style: {
        width: "100%",
        textAlign: "center",
        display: this.state.authScreen ? "block" : "none"
      }
    }, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("img", {
      src: "https://storage.googleapis.com/dripp-public/webassets/Group%2033.png",
      style: {
        height: 100,
        width: 100
      }
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginBottom: 20
      }
    }, /*#__PURE__*/React__default.createElement("a", {
      onClick: () => {
        console.log("signup");
        this.setState({
          signup: true,
          login: false
        });
      },
      style: {
        marginRight: 10
      }
    }, "Sign Up"), "|", /*#__PURE__*/React__default.createElement("a", {
      style: {
        marginLeft: 10
      },
      onClick: () => {
        console.log("login");
        this.setState({
          signup: false,
          login: true
        });
      }
    }, "Login")), /*#__PURE__*/React__default.createElement("form", {
      id: "login-form",
      style: {
        display: this.state.login ? "block" : "none"
      },
      onSubmit: e => {
        e.preventDefault();
        console.log("login form submit");
      }
    }, /*#__PURE__*/React__default.createElement("input", {
      ref: this.loginEmailInput,
      type: "text",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "email",
      large: true
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("input", {
      ref: this.loginPasswordInput,
      type: "password",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "password",
      large: true
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("button", {
      onClick: () => {
        console.log(this.loginEmailInput.value);
        console.log(this.loginPasswordInput.value);
        var email = this.loginEmailInput.current.value;
        var password = this.loginPasswordInput.current.value;
        console.log("login", email, password);

        let _this = this;

        firebase.auth().signInWithEmailAndPassword(email, password).then(userCredential => {
          console.log("login user", userCredential);
          localStorage.setItem('dryp-auth', JSON.stringify(userCredential));
          console.log("auth", _this.ref.authScreen);
          console.log("app", _this.ref.appScreen);

          _this.setState({
            appScreen: true,
            authScreen: false,
            user: userCredential
          });
        }).catch(error => {
          console.log("error", error);
        });
      }
    }, "Login")), /*#__PURE__*/React__default.createElement("form", {
      id: "signup-form",
      style: {
        display: this.state.signup ? "block" : "none"
      },
      onSubmit: e => {
        e.preventDefault();
        console.log("login");
      }
    }, /*#__PURE__*/React__default.createElement("input", {
      ref: this.signupEmailInput,
      type: "text",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "email",
      large: true
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("input", {
      ref: this.signupPasswordInput,
      type: "password",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "password",
      large: true
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("input", {
      type: "password",
      className: "bp3-input bp3-large",
      id: "search-input",
      placeholder: "password",
      large: true
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("button", {
      onClick: () => {
        console.log(this.signupEmailInput);
        console.log(this.signupPasswordInput);
        var email = this.signupEmailInput.current.value;
        var password = this.signupPasswordInput.current.value;
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(userCredential => {
          console.log(userCredential);
          localStorage.setItem('dryp-auth', JSON.stringify(userCredential));
          this.setState({
            appScreen: true,
            authScreen: false,
            user: userCredential
          });
        }).catch(error => {
        });
      }
    }, "Signup")));
  }

}

const ExampleComponent = ({
  text
}) => {
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

export { About, AuthScreen, Boards, Dashboard, DialogExample, ExampleComponent, Home, HomeFeed, InfluencerPost, InfluencerPostDetails, InfluencerProfile, MainNav, PhotoTile, SearchPage, SelectedImage, photos };
//# sourceMappingURL=index.modern.js.map
