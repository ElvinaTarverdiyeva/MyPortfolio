import React, { Component } from 'react'
import page1girl from "../img/page1girl.gif"
import img2 from "../img/img2.png"
import birds from "../img/bird-birds.gif"
const Home = () => {
        return (
            <div className="page1">
        <div className="imgdivleft">     
          <div className="div"> <img src={page1girl} alt="" /></div>
        </div>
        <div className="page1text">
          <h1>Hello &amp; welcome!</h1>
          <div className="textani">
            <div className="div1" />
            <p>Hello! I am Elvina. I am 20 years old and I live in Baku. I work as a front-end developer.</p>
          </div>
        </div>
        <div className="birds">
          <div>
            <img src={birds} alt="" />
            <img  src={birds} alt="" />
            <img  src={birds} alt="" />
            <img  src={birds} alt="" />
          </div>
        </div>
        <div className="page1img">
          <img src={img2} alt="" />
        </div>
            </div>
        )
    }


export default Home
