function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

function _interopNamespace(e) {
  if (e && e.__esModule) { return e; } else {
    var n = {};
    if (e) {
      Object.keys(e).forEach(function (k) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      });
    }
    n['default'] = e;
    return n;
  }
}

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@blueprintjs/core');
var popover2 = require('@blueprintjs/popover2');
var firebase = _interopDefault(require('firebase'));
var ColorThief = _interopDefault(require('colorthief'));
require('color-thief-react');
require('react-insta-stories');
var Gallery = require('react-photo-gallery');
var Gallery__default = _interopDefault(Gallery);
require('react-scroll-horizontal');
require('react-google-login');
require('@testing-library/react');
var StyledFirebaseAuth = _interopDefault(require('react-firebaseui/StyledFirebaseAuth'));
var reactFeather = require('react-feather');
require('react-router-dom');
require('feather-icons-react');
var Carousel = require('react-images');
var Carousel__default = _interopDefault(Carousel);
var Masonry = _interopDefault(require('react-masonry-css'));
var reactImageSize = _interopDefault(require('react-image-size'));

var styles = {"test":"_styles-module__test__3ybTi"};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var DialogExample = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(DialogExample, _React$Component);

  function DialogExample(props) {
    var _this2;

    _this2 = _React$Component.call(this, props) || this;

    _this2.handleOpen = function () {
      return _this2.setState({
        isOpen: true
      });
    };

    _this2.handleClose = function () {
      return _this2.setState({
        isOpen: false
      });
    };

    _this2.state = {
      autoFocus: true,
      canEscapeKeyClose: true,
      canOutsideClickClose: true,
      enforceFocus: true,
      isOpen: false,
      usePortal: true,
      userId: null
    };
    return _this2;
  }

  var _proto = DialogExample.prototype;

  _proto.componentWillMount = function componentWillMount() {};

  _proto.componentDidMount = function componentDidMount() {
    var user = firebase.auth().currentUser;
    console.log(user);

    if (user) {
      this.setState({
        userId: user.uid
      });
    }

    var _this = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);

        _this.setState({
          userId: user.uid
        });
      }
    });
  };

  _proto.addBoard = function addBoard(board) {};

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        boards = _this$props.boards;

    var _this = this;

    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(core.Button, {
      onClick: this.handleOpen
    }, "Show dialog"), /*#__PURE__*/React.createElement(core.Dialog, _extends({
      icon: "info-sign",
      onClose: this.handleClose,
      title: "Palantir Foundry"
    }, this.state), /*#__PURE__*/React.createElement("div", {
      className: core.Classes.DIALOG_BODY
    }, /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "bp3-input bp3-large",
      placeholder: "Board Name",
      id: "board_name",
      large: true,
      style: {
        width: "100%"
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: core.Classes.DIALOG_FOOTER
    }, /*#__PURE__*/React.createElement("div", {
      className: core.Classes.DIALOG_FOOTER_ACTIONS
    }, /*#__PURE__*/React.createElement(popover2.Tooltip2, {
      content: "This button is hooked up to close the dialog."
    }, /*#__PURE__*/React.createElement(core.Button, {
      onClick: this.handleClose
    }, "Close")), /*#__PURE__*/React.createElement(core.AnchorButton, {
      intent: core.Intent.PRIMARY,
      target: "_blank",
      onClick: function onClick() {
        var db = firebase.firestore();
        console.log("clicked");
        console.log(_this3.state);
        console.log(document.getElementById("board_name").value);
        var name = document.getElementById("board_name").value;
        var userId = _this3.state.userId;
        var board = {
          userId: userId,
          name: name,
          createdAt: Date.now()
        };
        db.collection('Board').add(board).then(function () {
          console.log("Document successfully written!");
          boards = [board].concat(boards);

          _this.props.addBoard(boards);

          _this.handleClose();
        })["catch"](function (error) {
          console.error("Error writing document: ", error);
        });
      }
    }, "Create")))));
  };

  _proto.renderOptions = function renderOptions() {
    var _this$state = this.state,
        autoFocus = _this$state.autoFocus,
        enforceFocus = _this$state.enforceFocus,
        canEscapeKeyClose = _this$state.canEscapeKeyClose,
        canOutsideClickClose = _this$state.canOutsideClickClose,
        usePortal = _this$state.usePortal;
    return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(core.H5, null, "Props"), /*#__PURE__*/React.createElement(core.Switch, {
      checked: autoFocus,
      label: "Auto focus",
      onChange: this.handleAutoFocusChange
    }), /*#__PURE__*/React.createElement(core.Switch, {
      checked: enforceFocus,
      label: "Enforce focus",
      onChange: this.handleEnforceFocusChange
    }), /*#__PURE__*/React.createElement(core.Switch, {
      checked: usePortal,
      onChange: this.handleUsePortalChange
    }, "Use ", /*#__PURE__*/React.createElement(core.Code, null, "Portal")), /*#__PURE__*/React.createElement(core.Switch, {
      checked: canOutsideClickClose,
      label: "Click outside to close",
      onChange: this.handleOutsideClickChange
    }), /*#__PURE__*/React.createElement(core.Switch, {
      checked: canEscapeKeyClose,
      label: "Escape key to close",
      onChange: this.handleEscapeKeyChange
    }));
  };

  return DialogExample;
}(React.Component);

var _this = undefined;
var cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
};

var SelectedImage = function SelectedImage(_ref) {
  var _React$createElement, _React$createElement2;

  var photo = _ref.photo,
      margin = _ref.margin,
      direction = _ref.direction,
      top = _ref.top,
      left = _ref.left,
      selected = _ref.selected,
      boards = _ref.boards,
      user = _ref.user;
  boards = boards ? boards : [];

  var _useState = React.useState(selected),
      isSelected = _useState[0],
      setIsSelected = _useState[1];

  var _useState2 = React.useState(false),
      inHover = _useState2[0],
      setHover = _useState2[1];

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  var handleOnClick = function handleOnClick(e) {
    setIsSelected(!isSelected);
    console.log(e);
    var inf = e.src.split("/")[5];
  };

  React.useEffect(function () {
    setIsSelected(selected);

    var _img = document.querySelector("." + id);

    var colorThief = new ColorThief();
  }, [selected]);
  var id = '_' + Math.random().toString(36).substr(2, 9);

  return /*#__PURE__*/React__default.createElement("div", {
    style: _extends({
      margin: margin,
      height: photo.height,
      width: photo.width
    }, cont, {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: 5
    }),
    className: !isSelected ? "not-selected" : "",
    onClick: function onClick() {
      handleOnClick(photo);
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
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
  }, /*#__PURE__*/React__default.createElement(core.Button, (_React$createElement = {
    className: "bp3-minimal bp3-large",
    text: "",
    color: "white",
    style: {
      color: "white"
    }
  }, _React$createElement["style"] = {
    width: photo.width / 3
  }, _React$createElement.onClick = function onClick(e, i) {
    var db = firebase.firestore();
    console.log("click", e, i);
    console.log("clicked");
    var favPost = {
      userId: user.uid,
      postId: photo.id,
      createdAt: Date.now()
    };
    db.collection('FavoritePost').add(favPost).then(function () {
      console.log("Document successfully written!");
    })["catch"](function (error) {
      console.error("Error writing document: ", error);
    });
  }, _React$createElement), /*#__PURE__*/React__default.createElement(core.Icon, {
    icon: "heart",
    iconSize: 20,
    color: "white"
  })), /*#__PURE__*/React__default.createElement(core.Popover, {
    placement: "right",
    interactionKind: "click",
    onInteraction: function onInteraction(state) {
      return _this.handleInteraction(state);
    },
    content: /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(core.Menu, {
      style: {
        height: 200,
        overflow: "scroll"
      }
    }, boards.map(function (board) {
      return /*#__PURE__*/React__default.createElement(core.MenuItem, {
        text: board.name,
        onClick: function onClick(e, i) {
          var db = firebase.firestore();
          console.log("click", e, i);
          console.log("click", board);
          console.log("clicked");
          var boardPost = {
            userId: user.uid,
            boardId: board.id,
            postId: photo.id,
            createdAt: Date.now()
          };
          db.collection('BoardPost').add(boardPost).then(function () {
            console.log("Document successfully written!");
          })["catch"](function (error) {
            console.error("Error writing document: ", error);
          });
        },
        labelElement: /*#__PURE__*/React__default.createElement(core.Icon, {
          icon: "add"
        })
      });
    }))),
    position: core.Position.RIGHT_TOP
  }, /*#__PURE__*/React__default.createElement(core.Button, {
    className: "bp3-minimal bp3-large",
    text: "",
    style: {
      width: photo.width / 3
    },
    onClick: function onClick(e) {
      if (!user) {
        e.preventDefault();
        console.log("not signed in");
      }
    }
  }, /*#__PURE__*/React__default.createElement(core.Icon, {
    icon: "bookmark",
    iconSize: 20,
    color: "white"
  }))), /*#__PURE__*/React__default.createElement(popover2.Popover2, {
    content: /*#__PURE__*/React__default.createElement(core.Menu, null, /*#__PURE__*/React__default.createElement(core.MenuItem, {
      text: "Twitter",
      labelElement: /*#__PURE__*/React__default.createElement(core.Icon, {
        icon: "twitter"
      })
    }), /*#__PURE__*/React__default.createElement(core.MenuItem, {
      text: "Facebook",
      labelElement: /*#__PURE__*/React__default.createElement(core.Icon, {
        icon: "facebook"
      })
    }), /*#__PURE__*/React__default.createElement(core.MenuItem, {
      text: "Instagram",
      labelElement: /*#__PURE__*/React__default.createElement(core.Icon, {
        icon: "instagram"
      })
    })),
    position: core.Position.RIGHT_TOP
  }, /*#__PURE__*/React__default.createElement(core.Button, (_React$createElement2 = {
    className: "bp3-minimal bp3-large",
    text: "",
    color: "white",
    style: {
      color: "white"
    }
  }, _React$createElement2["style"] = {
    width: photo.width / 3
  }, _React$createElement2), /*#__PURE__*/React__default.createElement(core.Icon, {
    icon: "share",
    iconSize: 20,
    color: "white"
  })))) : /*#__PURE__*/React__default.createElement("div", null), /*#__PURE__*/React__default.createElement("a", {
    href: "/post/" + photo.id
  }, /*#__PURE__*/React__default.createElement("img", _extends({
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
  })), /*#__PURE__*/React__default.createElement("img", _extends({
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
    style: _extends({
      marginTop: 40,
      height: photo.height - 80,
      width: photo.width
    }, cont, {
      backgroundColor: photo.cc,
      borderRadius: 5,
      opacity: 0.5,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 2
    })
  })));
};

var PhotoTile = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(PhotoTile, _React$Component);

  function PhotoTile() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PhotoTile.prototype;

  _proto.render = function render() {
    var _ref;

    var photo = this.props.photo;
    var margin = 5;
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        margin: margin,
        width: photo.width,
        height: "100%",
        backgroundColor: "rgba(0,0,0,0)",
        borderRadius: 5,
        textAlign: "center"
      }
    }, /*#__PURE__*/React__default.createElement("a", {
      href: "/post/" + photo.src.split("/").pop()
    }, /*#__PURE__*/React__default.createElement("img", _extends({
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
    })), /*#__PURE__*/React__default.createElement("img", _extends({}, photo, {
      src: photo.src.replace("croppedrembg", "croppedorig"),
      style: (_ref = {
        opacity: 0.1,
        top: 0,
        left: 0,
        zIndex: 3,
        maxWidth: "80%",
        textAlign: "center"
      }, _ref["left"] = 0, _ref.right = 0, _ref.position = "absolute", _ref.maxHeight = "100%", _ref.marginRight = "auto", _ref.marginLeft = "auto", _ref.height = photo.height - 80, _ref.filter = "blur(2px)", _ref)
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
    }), /*#__PURE__*/React__default.createElement("style", null, ".not-selected:hover{outline:2px solid #06befa}")));
  };

  return PhotoTile;
}(React__default.Component);

var photos = [{
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

var _this2 = undefined;
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
var uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: function signInSuccessWithAuthResult(authResult, redirectUrl) {
      console.log("yo");
      console.log(_this2);
      console.log('signInSuccessWithAuthResult', authResult, redirectUrl);
      console.log("yo");
      return false;
    }
  }
};
console.log(window.location.origin);
var API_URL = window.location.origin.includes("localhost") ? 'http://localhost:5000' : 'https://dripp-py.herokuapp.com';
API_URL = window.location.origin.includes("gitpod") ? 'https://5000-peach-cat-avh4l9cg.ws-us08.gitpod.io' : API_URL;
API_URL = 'https://5000-peach-cat-avh4l9cg.ws-us10.gitpod.io';

var MainNav = /*#__PURE__*/function (_React$Component2) {
  _inheritsLoose(MainNav, _React$Component2);

  function MainNav(props) {
    var _this3;

    _this3 = _React$Component2.call(this, props) || this;

    _this3.updateWindowDimensions = function () {
      var width = document.querySelector("#my-extension-root").offsetWidth;
      var height = document.querySelector("#my-extension-root").offsetHeight;

      _this3.setState({
        width: width,
        height: height
      });
    };

    _this3.state = {
      user: null,
      width: 0,
      height: 0
    };
    return _this3;
  }

  var _proto2 = MainNav.prototype;

  _proto2.componentDidMount = function componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  _proto2.render = function render() {
    console.log(this.state);
    var logoGroupStyle = this.state.width > 500 ? {
      marginLeft: 90
    } : {
      marginLeft: 10
    };
    var rightGroupStyle = this.state.width > 500 ? {
      marginRight: 90
    } : {
      marginRight: 10,
      display: "none"
    };
    var searchStyle = this.state.width > 500 ? {
      marginLeft: 50
    } : {
      marginLeft: 50,
      display: "none"
    };
    return /*#__PURE__*/React__default.createElement(core.Navbar, {
      style: {
        position: "fixed",
        top: 0,
        zIndex: 11
      }
    }, /*#__PURE__*/React__default.createElement(core.Navbar.Group, {
      align: core.Alignment.LEFT,
      style: logoGroupStyle
    }, /*#__PURE__*/React__default.createElement(core.Navbar.Heading, null, /*#__PURE__*/React__default.createElement("a", {
      href: "/"
    }, /*#__PURE__*/React__default.createElement("img", {
      src: "https://storage.googleapis.com/dripp-public/webassets/Group%2033.png",
      style: {
        marginTop: 5,
        height: 50
      }
    })))), /*#__PURE__*/React__default.createElement(core.Navbar.Group, null, /*#__PURE__*/React__default.createElement("div", {
      className: "bp3-input-group",
      style: searchStyle
    }, /*#__PURE__*/React__default.createElement("form", {
      onSubmit: function onSubmit(e) {
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
    }))), /*#__PURE__*/React__default.createElement(core.Navbar.Group, {
      align: core.Alignment.RIGHT,
      style: {
        margnRight: 10
      }
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(reactFeather.ShoppingCart, {
      height: 20
    }), /*#__PURE__*/React__default.createElement(reactFeather.Search, {
      height: 20
    })), /*#__PURE__*/React__default.createElement(reactFeather.ExternalLink, {
      height: 20
    }), /*#__PURE__*/React__default.createElement(reactFeather.XCircle, {
      height: 20
    })), /*#__PURE__*/React__default.createElement(core.Navbar.Group, {
      align: core.Alignment.RIGHT,
      style: rightGroupStyle
    }, /*#__PURE__*/React__default.createElement(core.Button, {
      className: "bp3-minimal bp3-large",
      icon: "shopping-cart",
      text: "$0.00",
      style: {
        display: "none"
      }
    }), /*#__PURE__*/React__default.createElement(core.Button, {
      className: "bp3-minimal bp3-large",
      icon: "bookmark",
      text: "",
      onClick: function onClick() {
        return window.location.href = "/boards";
      }
    }), /*#__PURE__*/React__default.createElement(core.Button, {
      className: "bp3-minimal bp3-large",
      icon: "user",
      text: ""
    }), !this.props.user ? /*#__PURE__*/React__default.createElement(StyledFirebaseAuth, {
      uiConfig: uiConfig,
      firebaseAuth: firebase.auth()
    }) : /*#__PURE__*/React__default.createElement("a", {
      onClick: function onClick() {
        return firebase.auth().signOut();
      }
    }, "Sign-out")));
  };

  return MainNav;
}(React__default.Component);
var HomeFeed = /*#__PURE__*/function (_React$Component3) {
  _inheritsLoose(HomeFeed, _React$Component3);

  function HomeFeed(props) {
    var _this4;

    _this4 = _React$Component3.call(this, props) || this;
    _this4.state = {
      feed: [],
      currentImage: 0,
      user: null,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false
    };
    return _this4;
  }

  var _proto3 = HomeFeed.prototype;

  _proto3.componentWillMount = function componentWillMount() {
    var _this5 = this;

    window.addEventListener('scroll', function (e) {
      _this5.loadMore();
    });
    this.authFirebaseListener = firebase.auth().onAuthStateChanged(function (user) {
      console.log(user);

      _this5.setState({
        user: user
      });

      _this5.setState({
        loading: false,
        user: user,
        isAuth: true
      });

      var db = firebase.firestore();
      var _this = _this5;
      db.collection("Board").where("userId", "==", user.uid).get().then(function (boards) {
        console.log("boards", boards);
        var data = [];
        boards.forEach(function (doc) {
          var d = doc.data();
          d["id"] = doc.id;
          data.push(d);
        });
        console.log(data);

        _this.setState({
          "boards": data
        });
      });
    });
  };

  _proto3.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMore);
    this.authFirebaseListener && this.authFirebaseListener();
  };

  _proto3.loadMore = function loadMore() {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      this.loadData();
    }
  };

  _proto3.getSize = function getSize(img) {
    try {
      var src = img.url;
      return Promise.resolve(reactImageSize(src)).then(function (_ref) {
        var width = _ref.width,
            height = _ref.height;
        return _extends({
          width: width,
          height: height,
          src: src
        }, img);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto3.loadData = function loadData() {
    try {
      var _this7 = this;

      console.log(API_URL);
      var _this = _this7;
      return Promise.resolve(fetch(API_URL + "/rbgfeed")).then(function (res) {
        return Promise.resolve(res.json()).then(function (result) {
          var feed = result.map(function (img) {
            return _this.getSize(img);
          });
          return Promise.resolve(Promise.all(feed)).then(function (_Promise$all) {
            feed = _Promise$all;
            var _feed = _this7.state.feed;

            _this7.setState({
              feed: _feed.concat(feed)
            });
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto3.componentDidMount = function componentDidMount() {
    console.log("yo");
    this.loadData();
  };

  _proto3.imageRenderer = function imageRenderer(index, left, top, key, photo) {
    return /*#__PURE__*/React__default.createElement("div", null, "yoyo");
  };

  _proto3.imageRenderer = function imageRenderer(_ref2) {
  };

  _proto3.render = function render() {
    var _this8 = this;

    var _this$state = this.state,
        viewerIsOpen = _this$state.viewerIsOpen,
        closeLightbox = _this$state.closeLightbox,
        currentImage = _this$state.currentImage;
    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingLeft: 100,
        paddingRight: 100,
        backgroundColor: "#eee",
        paddingTop: 60
      }
    }, this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: function renderImage(props) {
        return /*#__PURE__*/React__default.createElement(SelectedImage, _extends({}, props, {
          boards: _this8.state.boards,
          user: _this8.state.user
        }));
      },
      direction: "column",
      onClick: function onClick(e, i, a) {
        var inf = i.photo.src.split("/")[5];
        window.location.href = "/influencer/" + inf;
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
    }))), /*#__PURE__*/React__default.createElement(Carousel.ModalGateway, null, viewerIsOpen ? /*#__PURE__*/React__default.createElement(Carousel.Modal, {
      onClose: closeLightbox
    }, /*#__PURE__*/React__default.createElement(Carousel__default, {
      currentIndex: currentImage,
      views: photos.map(function (x) {
        return _extends({}, x, {
          srcset: x.srcSet,
          caption: x.title
        });
      })
    })) : null));
  };

  return HomeFeed;
}(React__default.Component);

var InfluencerProfile = /*#__PURE__*/function (_React$Component4) {
  _inheritsLoose(InfluencerProfile, _React$Component4);

  function InfluencerProfile(props) {
    var _this9;

    _this9 = _React$Component4.call(this, props) || this;
    _this9.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      igPosts: []
    };
    return _this9;
  }

  var _proto4 = InfluencerProfile.prototype;

  _proto4.getSize = function getSize(img) {
    try {
      var src = img.url;
      return Promise.resolve(reactImageSize(src)).then(function (_ref4) {
        var width = _ref4.width,
            height = _ref4.height;
        return _extends({
          width: width,
          height: height,
          src: src
        }, img);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto4.loadData = function loadData() {
    try {
      var _this11 = this;

      console.log(API_URL);
      var _this = _this11;
      return Promise.resolve(fetch(API_URL + "/inf/rbg/" + _this11.props.match.params.name)).then(function (res) {
        return Promise.resolve(res.json()).then(function (result) {
          var feed = result.map(function (img) {
            return _this.getSize(img);
          });
          return Promise.resolve(Promise.all(feed)).then(function (_Promise$all2) {
            feed = _Promise$all2;
            var _feed = _this11.state.feed;

            _this11.setState({
              feed: _feed.concat(feed)
            });
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto4.componentDidMount = function componentDidMount() {
    console.log("yo");
    this.loadData();
    this.loadIGPosts();
  };

  _proto4.loadIGPosts = function loadIGPosts() {
    var _this12 = this;

    console.log("this props");
    console.log(this.props);
    fetch(API_URL + "/inf/" + this.props.match.params.name).then(function (res) {
      return res.json();
    }).then(function (result) {
      console.log(result);
      var feed = result.map(function (img) {
        return {
          src: img,
          width: 2,
          height: 2
        };
      });
      console.log(feed);

      _this12.setState({
        igPosts: feed
      });
    }, function (error) {
      _this12.setState({
        isLoaded: true,
        error: error
      });
    });
  };

  _proto4.render = function render() {
    var _this13 = this;

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
    }, /*#__PURE__*/React__default.createElement("h2", null, "@" + this.props.match.params.name), /*#__PURE__*/React__default.createElement("button", null, "Follow"))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: function renderImage(props) {
        console.log("props", props);
        console.log(_this13.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: function onClick(e, i, a) {
        var inf = i.photo.src.split("/")[5];
        window.location.href = "/influencer/" + inf;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null), this.state.igPosts.length ? /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.igPosts,
      direction: "column"
    }) : /*#__PURE__*/React__default.createElement("div", null));
  };

  return InfluencerProfile;
}(React__default.Component);
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
  }, /*#__PURE__*/React__default.createElement("h2", null, "First Name, Last Name"), /*#__PURE__*/React__default.createElement("button", null, "Follow"))), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement(Gallery__default, {
    photos: photos,
    direction: "column"
  }));
}
var InfluencerPostDetails = /*#__PURE__*/function (_React$Component5) {
  _inheritsLoose(InfluencerPostDetails, _React$Component5);

  function InfluencerPostDetails(props) {
    var _this14;

    _this14 = _React$Component5.call(this, props) || this;
    _this14.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      recs: [],
      ecom: []
    };
    return _this14;
  }

  var _proto5 = InfluencerPostDetails.prototype;

  _proto5.getSize = function getSize(img) {
    try {
      var src = img.url;
      return Promise.resolve(reactImageSize(src)).then(function (_ref5) {
        var width = _ref5.width,
            height = _ref5.height;
        return _extends({
          width: width,
          height: height,
          src: src
        }, img);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto5.loadData = function loadData() {
    try {
      var _this16 = this;

      console.log(API_URL);
      var _this = _this16;

      if (_this16.props) {
        console.log("params", _this16.props);
        console.log("params", _this16.props.match.params.id);
      }

      return Promise.resolve(fetch(API_URL + "/recs/" + _this16.props.match.params.id)).then(function (recs_req) {
        return Promise.resolve(recs_req.json()).then(function (result) {
          return Promise.resolve(fetch(API_URL + "/ecom/" + _this16.props.match.params.id)).then(function (ecom_req) {
            return Promise.resolve(ecom_req.json()).then(function (ecom) {
              _this16.setState({
                recs: result,
                ecom: ecom
              });

              return Promise.resolve(fetch("" + API_URL + window.location.pathname)).then(function (post) {
                return Promise.resolve(post.json()).then(function (_post$json) {
                  post = _post$json;
                  console.log("current post", post);
                  console.log("current post", post[0]);
                  post.src = post.url;
                  post.width = "auto";
                  post.height = "auto";

                  _this16.setState({
                    currentPost: post
                  });

                  var feed = result.map(function (img) {
                    return _this.getSize(img);
                  });
                  return Promise.resolve(Promise.all(feed)).then(function (_Promise$all3) {
                    feed = _Promise$all3;
                    var _feed = _this16.state.feed;

                    _this16.setState({
                      feed: _feed.concat(feed)
                    });
                  });
                });
              });
            });
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto5.componentDidMount = function componentDidMount() {
    console.log("yo");
    this.loadData();
  };

  _proto5.render = function render() {
    var _ref6,
        _ref7,
        _this17 = this;

    console.log(this.state.feed);
    console.log("yo", this.state.feed);
    var p = {};

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
        "float": "right",
        width: "50%"
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Shop This Look"), /*#__PURE__*/React__default.createElement("a", {
      href: this.state.currentPost ? "/@" + this.state.currentPost.src.split("/")[5] : ""
    }, this.state.currentPost ? "@" + this.state.currentPost.src.split("/")[5] : ""), /*#__PURE__*/React__default.createElement("button", null, "Follow"), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), "Tops", /*#__PURE__*/React__default.createElement("div", {
      style: (_ref6 = {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        overflowY: "hidden"
      }, _ref6["overflowX"] = "scroll", _ref6)
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
      style: (_ref7 = {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column"
      }, _ref7["overflowX"] = "scroll", _ref7)
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
    }, this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: function renderImage(props) {
        console.log("props", props);
        console.log(_this17.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: function onClick(e, i, a) {
        var inf = i.photo.src.split("/")[5];
        window.location.href = "/influencer/" + inf;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null)));
  };

  return InfluencerPostDetails;
}(React__default.Component);
var ChromePostDetails = /*#__PURE__*/function (_React$Component7) {
  _inheritsLoose(ChromePostDetails, _React$Component7);

  function ChromePostDetails(props) {
    var _this19;

    _this19 = _React$Component7.call(this, props) || this;
    _this19.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: "",
      recs: [],
      recsPage: 1,
      loading: true,
      ecom: []
    };
    return _this19;
  }

  var _proto7 = ChromePostDetails.prototype;

  _proto7.getSize = function getSize(img) {
    try {
      var src = img.url;
      return Promise.resolve(new Promise(function (resolve) { resolve(_interopNamespace(require('react-image-size'))); })).then(function (_import) {
        var reactImageSize = _import["default"];
        return Promise.resolve(reactImageSize(src)).then(function (_ref8) {
          var width = _ref8.width,
              height = _ref8.height;
          return _extends({
            width: width,
            height: height,
            src: src
          }, img);
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto7.loadEcomData = function loadEcomData() {
    try {
      var _this21 = this;

      var id = null;
      var params = {
        user: 1,
        url: _this21.props.currentImage
      };
      params = new URLSearchParams(params).toString();
      id = 1;
      return Promise.resolve(fetch(API_URL + "/chrome_ecom/" + id + "?" + params)).then(function (ecom_req) {
        return Promise.resolve(ecom_req.json()).then(function (ecom) {
          console.log("ecom", ecom);

          _this21.setState({
            ecom: ecom
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto7.loadData = function loadData() {
    try {
      var _this23 = this;

      console.log(API_URL);
      var _this = _this23;

      if (_this23.props) {
        console.log("params", _this23.props);

        if (_this23.props.match) {
          var _id = _this23.props.match.params.id;
          console.log("params1", _this23.props.match.params.id);
        } else {
          console.log("else");
          var _id2 = _this23.props.query.id;
          console.log("id", _id2);
        }
      }

      var id = null;

      if (_this23.props.match) {
        id = _this23.props.match.params.id;
        console.log("params1", _this23.props.match.params.id);
      } else {
        console.log("else");
        id = _this23.props.query.id;
        console.log("id", id);
      }

      console.log("id", id);
      return Promise.resolve(fetch(API_URL + "/recs/" + id + "/" + _this23.state.recsPage)).then(function (recs_req) {
        return Promise.resolve(recs_req.json()).then(function (result) {
          _this23.setState({
            recs: result
          });

          return Promise.resolve(fetch(API_URL + "/post/" + id)).then(function (post) {
            return Promise.resolve(post.json()).then(function (_post$json2) {
              post = _post$json2;
              post.src = post.url;
              post.width = "auto";
              post.height = "auto";

              _this23.setState({
                currentPost: post
              });

              var feed = result.map(function (img) {
                return _this.getSize(img);
              });
              return Promise.resolve(Promise.all(feed)).then(function (_Promise$all4) {
                feed = _Promise$all4;
                var _feed = _this23.state.feed;
                var recsPage = _this23.state.recsPage;
                recsPage = recsPage + 1;
                console.log("Recs page", recsPage, _feed.length, feed.length);

                _this23.setState({
                  feed: _feed.concat(feed),
                  loading: false,
                  recsPage: recsPage
                });
              });
            });
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto7.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.currentImage !== prevProps.currentImage) {
      this.loadEcomData();
    }
  };

  _proto7.componentDidMount = function componentDidMount() {
    var _this24 = this;

    this.loadEcomData();
    console.log("yo did mount");
    window.addEventListener('scroll', function (e) {
      _this24.loadMore();
    });
    document.querySelectorAll("*").forEach(function (element) {
      return element.addEventListener("scroll", function (_ref9) {
        var target = _ref9.target;
        return console.log(target, target.id, target.parent, target.parent.id);
      });
    });
    this.authFirebaseListener = firebase.auth().onAuthStateChanged(function (user) {
      console.log("user", user);

      _this24.setState({
        user: user
      });

      _this24.setState({
        loading: false,
        user: user,
        isAuth: true
      });

      var db = firebase.firestore();
      var _this = _this24;
      var uid = user ? user.uid : null;

      if (uid) {
        db.collection("Board").where("userId", "==", uid).get().then(function (boards) {
          console.log("boards", boards);
          var data = [];
          boards.forEach(function (doc) {
            var d = doc.data();
            d["id"] = doc.id;
            data.push(d);
          });
          console.log(data);

          _this.setState({
            "boards": data
          });
        });
      }
    });
  };

  _proto7.componentWillUnmount = function componentWillUnmount() {
    console.log("unmount");
    window.removeEventListener('scroll', this.loadMore);
    this.authFirebaseListener && this.authFirebaseListener();
  };

  _proto7.debounce = function debounce(method, delay) {
    clearTimeout(method._tId);
    method._tId = setTimeout(function () {
      method();
    }, delay);
  };

  _proto7.loadMore = function loadMore() {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
      if (!this.state.loading) {
        console.log("LOAD");
        this.setState({
          loading: true
        });
        this.loadData();
      }
    }
  };

  _proto7.render = function render() {
    var _ref10,
        _ref11,
        _this25 = this;

    return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 20,
        margin: 20
      }
    }, "Shop this look"), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginLeft: 10,
        marginRight: 20,
        paddingTop: 0,
        paddingLeft: 0,
        borderRadius: 20
      },
      className: "post-details-area"
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        width: "90%",
        position: "relative",
        height: 200,
        display: "block",
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      id: "main",
      src: this.props.currentImage,
      style: {
        boxShadow: '0px 10px 30px rgb(0 0 0 / 25%)',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderRadius: 20,
        opacity: 1,
        top: 0,
        left: 0,
        zIndex: 3,
        height: 630,
        maxWidth: "80%",
        maxHeight: "100%",
        marginRight: "auto",
        marginLeft: "auto"
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      style: {
        paddingLeft: 20,
        marginTop: -600,
        marginBottom: 75,
        marginLeft: 350,
        "float": "right",
        width: "40%",
        display: "none"
      }
    }, /*#__PURE__*/React__default.createElement("h2", {
      style: {
        fontWeight: 800,
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 10
      }
    }, "Chrome This Look", /*#__PURE__*/React__default.createElement("a", {
      style: {
        marginLeft: 50,
        fontSize: 20
      },
      href: this.state.currentPost ? "/@" + this.state.currentPost.src.split("/")[5] : ""
    }, this.state.currentPost ? "@" + this.state.currentPost.src.split("/")[5] : "")), /*#__PURE__*/React__default.createElement("hr", {
      style: {
        marginBottom: 10,
        width: "70%"
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      style: (_ref10 = {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        display: "flex",
        overflowY: "hidden"
      }, _ref10["overflowX"] = "scroll", _ref10)
    }, this.state.ecom.slice(0, 4).map(function (item) {
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          margin: 5,
          borderRadius: 5,
          height: 250,
          width: 170
        }
      }, /*#__PURE__*/React__default.createElement("a", {
        href: "/p/" + item["id"]
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
    })), /*#__PURE__*/React__default.createElement("div", {
      style: (_ref11 = {
        height: 250,
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
        display: "flex"
      }, _ref11["overflowX"] = "scroll", _ref11)
    }, this.state.ecom.slice(4, 8).map(function (item) {
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          margin: 5,
          borderRadius: 5,
          height: 250,
          width: 170
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
        marginLeft: 0,
        marginRight: 0,
        marginTop: -50
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        fontWeight: 800,
        fontSize: 20,
        margin: 10
      }
    }, "Retailers"), this.state.ecom.slice(0, 24).map(function (item) {
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          margin: 5,
          borderRadius: 5,
          height: 200,
          width: 150,
          display: "inline-block"
        }
      }, /*#__PURE__*/React__default.createElement("a", {
        href: "/p/" + item["id"]
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
      }, "Aritzia")));
    }), this.state.feed.length ? /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: function renderImage(props) {
        console.log("post detail", props);
        return /*#__PURE__*/React__default.createElement(SelectedImage, _extends({}, props, {
          boards: _this25.state.boards,
          user: _this25.state.user
        }));
      },
      direction: "column",
      onClick: function onClick(e, i, a) {
        var inf = i.photo.src.split("/")[5];
        window.location.href = "/influencer/" + inf;
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginBottom: 20,
        marginTop: 10,
        visibility: this.state.loading ? "visible" : "hidden"
      }
    }, /*#__PURE__*/React__default.createElement(Spinner, {
      size: 20
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null))) : /*#__PURE__*/React__default.createElement("div", null)));
  };

  return ChromePostDetails;
}(React__default.Component);
var SearchPage = /*#__PURE__*/function (_React$Component8) {
  _inheritsLoose(SearchPage, _React$Component8);

  function SearchPage(props) {
    var _this26;

    _this26 = _React$Component8.call(this, props) || this;
    _this26.state = {
      feed: [],
      currentImage: 0,
      setCurrentImage: 0,
      viewerIsOpen: false,
      setViewerIsOpen: false,
      currentPost: ""
    };
    return _this26;
  }

  var _proto8 = SearchPage.prototype;

  _proto8.getSize = function getSize(img) {
    try {
      var src = img.url;
      return Promise.resolve(reactImageSize(src)).then(function (_ref12) {
        var width = _ref12.width,
            height = _ref12.height;
        return _extends({
          width: width,
          height: height,
          src: src
        }, img);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto8.loadData = function loadData() {
    try {
      var _this28 = this;

      console.log(API_URL);
      var _this = _this28;
      return Promise.resolve(fetch(API_URL + "/search/" + _this28.props.match.params.query)).then(function (res) {
        return Promise.resolve(res.json()).then(function (result) {
          var feed = result.map(function (img) {
            return _this.getSize(img);
          });
          return Promise.resolve(Promise.all(feed)).then(function (_Promise$all5) {
            feed = _Promise$all5;
            var _feed = _this28.state.feed;

            _this28.setState({
              feed: _feed.concat(feed)
            });
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  _proto8.componentDidMount = function componentDidMount() {
    this.loadData();
  };

  _proto8.render = function render() {
    var _this29 = this;

    console.log(this.props);
    var qry = this.props.match.params.query.replace("+", " ");
    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginLeft: 100,
        marginTop: 100
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Search : ", qry), this.state.feed.length ? /*#__PURE__*/React__default.createElement(Gallery__default, {
      photos: this.state.feed,
      columns: 5,
      margin: 7,
      renderImage: function renderImage(props) {
        console.log("props", props);
        console.log(_this29.state.feed);
        return /*#__PURE__*/React__default.createElement(SelectedImage, props);
      },
      direction: "column",
      onClick: function onClick(e, i, a) {
        var inf = i.photo.src.split("/")[5];
        window.location.href = "/influencer/" + inf;
      }
    }) : /*#__PURE__*/React__default.createElement("div", null));
  };

  return SearchPage;
}(React__default.Component);
function Home() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "Home"));
}
var Boards = /*#__PURE__*/function (_React$Component9) {
  _inheritsLoose(Boards, _React$Component9);

  function Boards(props) {
    var _this30;

    _this30 = _React$Component9.call(this, props) || this;
    _this30.state = {
      boards: [],
      userId: null
    };
    return _this30;
  }

  var _proto9 = Boards.prototype;

  _proto9.componentWillMount = function componentWillMount() {
    var db = firebase.firestore();

    var _this = this;

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log(user);

        _this.setState({
          userId: user.uid
        });

        db.collection("Board").where("userId", "==", user.uid).get().then(function (boards) {
          console.log("boards", boards);
          var data = [];
          boards.forEach(function (doc) {
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
  };

  _proto9.addBoard = function addBoard(boards) {
    this.setState({
      boards: boards
    });
  };

  _proto9.render = function render() {
    var _this31 = this;

    return /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginTop: 70,
        paddingLeft: 110,
        paddingRight: 100
      }
    }, /*#__PURE__*/React__default.createElement("h2", null, "Boards"), /*#__PURE__*/React__default.createElement(DialogExample, {
      addBoard: function addBoard(board) {
        _this31.addBoard(board);
      },
      boards: this.state.boards
    }), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), /*#__PURE__*/React__default.createElement("br", null), this.state.boards.map(function (board) {
      return /*#__PURE__*/React__default.createElement(core.Card, {
        interactive: true,
        elevation: core.Elevation.TWO,
        style: {
          width: "25%",
          margin: 10,
          display: "inline-block"
        }
      }, /*#__PURE__*/React__default.createElement("h3", null, /*#__PURE__*/React__default.createElement("a", {
        href: "#"
      }, board.name)));
    }));
  };

  return Boards;
}(React__default.Component);
function About() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "About"));
}
function Dashboard() {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("h2", null, "Dashboard"));
}
var AuthScreen = /*#__PURE__*/function (_React$Component10) {
  _inheritsLoose(AuthScreen, _React$Component10);

  function AuthScreen(props) {
    var _this32;

    _this32 = _React$Component10.call(this, props) || this;
    _this32.state = {
      authScreen: true,
      login: true,
      signup: false
    };
    _this32.loginEmailInput = React__default.createRef();
    _this32.loginPasswordInput = React__default.createRef();
    _this32.signupEmailInput = React__default.createRef();
    _this32.signupPasswordInput = React__default.createRef();
    _this32.authScreen = React__default.createRef();
    _this32.appScreen = React__default.createRef();
    return _this32;
  }

  var _proto10 = AuthScreen.prototype;

  _proto10.render = function render() {
    var _this33 = this;

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
      onClick: function onClick() {
        console.log("signup");

        _this33.setState({
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
      onClick: function onClick() {
        console.log("login");

        _this33.setState({
          signup: false,
          login: true
        });
      }
    }, "Login")), /*#__PURE__*/React__default.createElement("form", {
      id: "login-form",
      style: {
        display: this.state.login ? "block" : "none"
      },
      onSubmit: function onSubmit(e) {
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
      onClick: function onClick() {
        console.log(_this33.loginEmailInput.value);
        console.log(_this33.loginPasswordInput.value);
        var email = _this33.loginEmailInput.current.value;
        var password = _this33.loginPasswordInput.current.value;
        console.log("login", email, password);
        var _this = _this33;
        firebase.auth().signInWithEmailAndPassword(email, password).then(function (userCredential) {
          console.log("login user", userCredential);
          localStorage.setItem('dryp-auth', JSON.stringify(userCredential));
          console.log("auth", _this.ref.authScreen);
          console.log("app", _this.ref.appScreen);

          _this.setState({
            appScreen: true,
            authScreen: false,
            user: userCredential
          });
        })["catch"](function (error) {
          console.log("error", error);
        });
      }
    }, "Login")), /*#__PURE__*/React__default.createElement("form", {
      id: "signup-form",
      style: {
        display: this.state.signup ? "block" : "none"
      },
      onSubmit: function onSubmit(e) {
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
      onClick: function onClick() {
        console.log(_this33.signupEmailInput);
        console.log(_this33.signupPasswordInput);
        var email = _this33.signupEmailInput.current.value;
        var password = _this33.signupPasswordInput.current.value;
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (userCredential) {
          console.log(userCredential);
          localStorage.setItem('dryp-auth', JSON.stringify(userCredential));

          _this33.setState({
            appScreen: true,
            authScreen: false,
            user: userCredential
          });
        })["catch"](function (error) {
        });
      }
    }, "Signup")));
  };

  return AuthScreen;
}(React__default.Component);

var ExampleComponent = function ExampleComponent(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles.test
  }, "Example Component: ", text);
};

exports.About = About;
exports.AuthScreen = AuthScreen;
exports.Boards = Boards;
exports.ChromePostDetails = ChromePostDetails;
exports.Dashboard = Dashboard;
exports.DialogExample = DialogExample;
exports.ExampleComponent = ExampleComponent;
exports.Home = Home;
exports.HomeFeed = HomeFeed;
exports.InfluencerPost = InfluencerPost;
exports.InfluencerPostDetails = InfluencerPostDetails;
exports.InfluencerProfile = InfluencerProfile;
exports.MainNav = MainNav;
exports.PhotoTile = PhotoTile;
exports.SearchPage = SearchPage;
exports.SelectedImage = SelectedImage;
exports.photos = photos;
//# sourceMappingURL=index.js.map