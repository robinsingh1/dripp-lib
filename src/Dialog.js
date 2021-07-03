/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";

import { AnchorButton, Button, Classes, Code, Dialog, H5, Intent, Switch } from "@blueprintjs/core";
//import { Example, handleBooleanChange, IExampleProps } from "@blueprintjs/docs-theme";
import { Tooltip2 } from "@blueprintjs/popover2";

import firebase from 'firebase';

/*
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
*/


export default class DialogExample extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            autoFocus: true,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: true,
            isOpen: false,
            usePortal: true,
            userId: null
        }
     }
    componentWillMount() {

    }

    componentDidMount() {
        let user = firebase.auth().currentUser;
        console.log(user)
        if(user) { 
            this.setState({userId: user.uid})

        }

        let _this = this;
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user)
              _this.setState({userId: user.uid})
           
            } else {
              // No user is signed in.
            }
        });
    }

    addBoard(board){

    }

    render() {
        let {addBoard, boards} = this.props
        let _this = this;
        return (
            <div>
                <Button onClick={this.handleOpen}>Show dialog</Button>
                <Dialog
                    icon="info-sign"
                    onClose={this.handleClose}
                    title="Palantir Foundry"
                    {...this.state}
                >
                    <div className={Classes.DIALOG_BODY}>
                    <input type="text" className="bp3-input bp3-large" placeholder="Board Name" 
                                id="board_name"
                                large style={{width:"100%"}}/>

                    </div>
                    <div className={Classes.DIALOG_FOOTER}>
                        <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                            <Tooltip2 content="This button is hooked up to close the dialog.">
                                <Button onClick={this.handleClose}>Close</Button>
                            </Tooltip2>
                            <AnchorButton
                                intent={Intent.PRIMARY}
                                target="_blank"
                                onClick={() => {
                                    let db = firebase.firestore();

                                    console.log("clicked")
                                    console.log(this.state)
                                    console.log(document.getElementById("board_name").value)
                                    let name = document.getElementById("board_name").value
                                    let userId =  this.state.userId

                                    let board = {
                                        userId: userId,
                                        name: name,
                                        createdAt: Date.now(),
                                    }
                                    db.collection('Board').add(board)
                                    .then(() => {
                                        console.log("Document successfully written!");
                                        boards = [board].concat(boards)
                                        _this.props.addBoard(boards)
                                        _this.handleClose()
                                    })
                                    .catch((error) => {
                                        console.error("Error writing document: ", error);
                                    });
                                }}
                            >
                                Create
                            </AnchorButton>
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }

    renderOptions() {
        const { autoFocus, enforceFocus, canEscapeKeyClose, canOutsideClickClose, usePortal } = this.state;
        return (
            <>
                <H5>Props</H5>
                <Switch checked={autoFocus} label="Auto focus" onChange={this.handleAutoFocusChange} />
                <Switch checked={enforceFocus} label="Enforce focus" onChange={this.handleEnforceFocusChange} />
                <Switch checked={usePortal} onChange={this.handleUsePortalChange}>
                    Use <Code>Portal</Code>
                </Switch>
                <Switch
                    checked={canOutsideClickClose}
                    label="Click outside to close"
                    onChange={this.handleOutsideClickChange}
                />
                <Switch checked={canEscapeKeyClose} label="Escape key to close" onChange={this.handleEscapeKeyChange} />
            </>
        );
    }

    handleOpen = () => this.setState({ isOpen: true });

    handleClose = () => this.setState({ isOpen: false });
}

