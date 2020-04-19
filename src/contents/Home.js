import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import homepic from '../img/Corona.jpg';



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={homepic} alt="homepic" className="homepic"></img>
            {/* <ReactTypingEffect className="typingeffect" text={['Covid Data']}/> */}
            <h1>Covid Data with Map</h1>
            </div>
            )
        }
    }
    
    export default Home
    