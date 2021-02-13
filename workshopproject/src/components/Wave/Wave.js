

import React, { Component } from 'react'
import './Wave.css'

export default class Wave extends Component {
    render() {
        return (
            <div className="wave-whole">
                <div className="wave-bg">
                    <img src="./wave3.png"></img>
                    <div className="wave-content">
                   <div className="profile-img">
                   <img src="https://learnframermotion.com/images/black_man_3d-2.webp"></img>
                   </div>
                   <div className="profile-info">This is Shubham Raj , Student of <span> IIT Tirupati</span>. I have been working as a <span>Web Developer </span> for the past two Years. Basically I am a resident of Patna . I have a keen intrest in Front-End <span>&</span> Back-End . I would like to go more depper into this Field and explore more about the fascinating creations.I have prior experience of working with diifrent Languages such as <span> JavaScript</span>, <span>PHP </span>, <span>MySQL</span> AND MUCH more . </div>
                </div>
                <div className="wave-bg-down">
                    <img src="./wave4.png"></img>
                </div>
                </div>
               

              
            </div>
        )
    }
}


