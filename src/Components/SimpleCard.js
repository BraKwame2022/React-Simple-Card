import React, { Component } from "react";
import Title from "./Title";
import Descreption from "./Descreption";
import Image from "./Image";
import '../App.css'

export class SimpleCard extends Component {
  render() {
    return (
      <div className="container">
        <Image image="https://plus.unsplash.com/premium_photo-1661659883207-3dca9f725e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBkZXNpZ24lMjBzdHVkaW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
        <div className="sub-container">
          <Title header="Codetrain" />
          <Descreption career="mobile apps developers" />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
