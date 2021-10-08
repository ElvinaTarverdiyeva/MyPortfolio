import React, { Component } from 'react'
import myfoto from "../img/myfoto.png"
export class About extends Component {
    render() {
        return (
            <div className="about">
            <div className="aboutFirts">
              <h3>Elvina Tarverdiyeva .</h3>
              <h3> Front-end Developer...</h3>
            </div>
            <div className="text">
              <div className="div1"><div /><p>Hello ,</p></div>
              <div className="div1"><div /><p>I live in Baku,</p></div>
              <div className="div1"><div /><p>I'm azerbaijani,</p></div>
              <div className="div1"><div /><p>Front-end Developer,</p></div>
              <div className="div1"><div /><p>My name is Elvina Tarverdiyeva,</p></div>
              <div className="div1"><div /><p>I'm 20 years old,</p></div>
              <div className="div1"><div /><p>I'm a student,</p></div>
              <div className="div1"><div /><p>At the Baku Engineering University...</p></div> 
              <div className="imgdiv">
                <img src={myfoto} alt="" />
              </div>
            </div>
          </div>
        )
    }
}

export default About
