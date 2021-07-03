import React, { useState, useEffect } from "react";
import ColorThief from "colorthief";
import { Button, Card, Elevation, Popover } from "@blueprintjs/core";
import { Classes, Popover2 } from "@blueprintjs/popover2";

import {  Menu, MenuItem, Position, Icon, IconSize, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useColor } from 'color-thief-react'
import firebase from 'firebase';


const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
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

  //console.log("img props",photo)
  boards = (boards) ? boards : []

  //console.log("boards",boards)
  const [isSelected, setIsSelected] = useState(selected);
  const [inHover, setHover] = useState(false);

  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === "column") {
    cont.position = "absolute";
    cont.left = left;
    cont.top = top;
  }

  const handleOnClick = (e) => {
    setIsSelected(!isSelected);
      console.log(e)
      //console.log(i)
      let inf = e.src.split("/")[5]
      //window.location.href=`/@${inf}`
      //window.location.href=`/@${inf}/post/${e.src.split("/").pop()}`
  };

  useEffect(() => {
    setIsSelected(selected);
    let _img = document.querySelector(`.${id}`);
    let colorThief = new ColorThief();

  }, [selected]);

  let id = '_' + Math.random().toString(36).substr(2, 9)

  const addToBoard = () => {

  }

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont,
               backgroundColor: "rgba(0,0,0,0)", borderRadius:5 }}
      className={!isSelected ? "not-selected" : ""}
      onClick={() => {handleOnClick(photo)}}
      //onMouseEnter={() => this.setState({"hover":true}) }
      //onMouseLeave={() => this.setState({"hover":false})}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h5 style={{display:"none"}}> HOVER </h5>
      {inHover ? 
      <div style={{height:40,width:photo.width,backgroundColor:"rgba(0,0,0,0.5)",position:"relative",zIndex:10,opacity:1,top:((photo.height/2)-50)}}>
        <Button className="bp3-minimal bp3-large" text="" color="white" style={{color:"white"}} style={{width:photo.width/3}} 
          onClick={(e, i) => {
            let db = firebase.firestore();
            console.log("click", e, i)
            //console.log("click", board)
            console.log("clicked")
            //console.log(this.state)

            let favPost = {
                userId: user.uid,
                //boardId: board.id,
                postId: photo.id,
                //name: name,
                createdAt: Date.now(),
            }

            db.collection('FavoritePost').add(favPost)
            .then(() => {
                console.log("Document successfully written!");
                //boards = [board].concat(boards)
                //_this.props.addBoard(boards)
                //_this.handleClose()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
          }}>
         <Icon icon="heart" iconSize={20} color="white" />
        </Button>
        
        <Popover 
          placement="right"
          interactionKind="click"
          onInteraction={state => this.handleInteraction(state)}
          content={
          <div>
        <Menu style={{height:200,overflow:"scroll"}}>
          {boards.map((board) => {return <MenuItem text={board.name} 
          onClick={(e, i) => { 
            let db = firebase.firestore();
            console.log("click", e, i)
            console.log("click", board)
            console.log("clicked")
            //console.log(this.state)

            let boardPost = {
                userId: user.uid,
                boardId: board.id,
                postId: photo.id,
                //name: name,
                createdAt: Date.now(),
            }

            db.collection('BoardPost').add(boardPost)
            .then(() => {
                console.log("Document successfully written!");
                //boards = [board].concat(boards)
                //_this.props.addBoard(boards)
                //_this.handleClose()
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
          }} 

          labelElement={<Icon icon="add" />
          } />})}
        </Menu>
          </div>
          } position={Position.RIGHT_TOP}>
        <Button className="bp3-minimal bp3-large" text="" style={{width:photo.width/3}} onClick={(e) => { 
          if(!user) {
            e.preventDefault()
            console.log("not signed in")
          }
        } }>
            <Icon icon="bookmark" iconSize={20} color="white" />
        </Button>
        </Popover>

        <Popover2 content={<Menu>
          <MenuItem text="Twitter" labelElement={<Icon icon="twitter" />} />
          <MenuItem text="Facebook" labelElement={<Icon icon="facebook" />} />
          <MenuItem text="Instagram" labelElement={<Icon icon="instagram" />} />
        </Menu>} position={Position.RIGHT_TOP}>
          <Button className="bp3-minimal bp3-large" text="" color="white" style={{color:"white"}} style={{width:photo.width/3}}>
          <Icon icon="share" iconSize={20} color="white" />
          </Button>
        </Popover2>
      </div> : <div /> }

      <a href={`/post/${photo.id}`}>

        <img
        alt={photo.title}
        {...photo}
        className={id}
        style={{opacity:1,position:"absolute",top:0,left:0,zIndex:3}}
      />
       <img
        alt={photo.orig.replace("croppedrembg", "croppedorig")}
        {...photo}
        src={photo.src.replace("croppedrembg", "croppedorig")}
        className={id}
        style={{opacity:0.1,position:"absolute",top:0,left:0,zIndex:3,
                height:photo.height-80,marginTop:40,filter:"blur(2px)"}}
      />
   <div
      style={{  marginTop:40, height: photo.height-80, width: photo.width, ...cont,
               backgroundColor: photo.cc, borderRadius:5 , opacity:0.5,
               position:"absolute",top:0,left:0,zIndex:2}}
      ></div>

    
      </a>

    </div>
  );
};



export default SelectedImage;
