import React, { useState, useCallback } from "react";


export default class PhotoTile extends React.Component {
    render() {
        let {photo} = this.props
        let margin = 5
        return (
        <div
        style={{ margin, width: photo.width,height:"100%",
                backgroundColor: "rgba(0,0,0,0)", borderRadius:5,textAlign:"center" }}
        >
        <a href={`/post/${photo.src.split("/").pop()}`}>
        <img
            id="main"
            alt={photo.title}
            {...photo}
            style={{opacity:1,top:0,left:0,zIndex:3,maxWidth:"80%",maxHeight:"100%",marginRight:"auto",marginLeft:"auto"}}
        />
        <img
            //alt={photo.orig.replace("croppedrembg", "croppedorig")}
            {...photo}
            src={photo.src.replace("croppedrembg", "croppedorig")}
            style={{opacity:0.1,top: 0,left:0,zIndex:3,maxWidth:"80%",textAlign:"center",left:0,right:0,position:"absolute",
                    maxHeight:"100%",marginRight:"auto",marginLeft:"auto",
                    height:photo.height-80,filter:"blur(2px)"}}
        />
    <div
        style={{marginTop:40, height: photo.height-80, width: photo.width, 
                backgroundColor: photo.cc, borderRadius:5 , opacity:0.5,
                position:"absolute",top:0,left:0,zIndex:2}}
        ></div>

        
        <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </a>

        </div>
        )
    }
}