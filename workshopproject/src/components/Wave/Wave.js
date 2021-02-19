

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
                  {/*} <img src="https://learnframermotion.com/images/black_man_3d-2.webp"></img>*/}
                   <img src="./animation_4.gif"></img>

                   </div>
                   <div className="profile-info">Hey, I got to know about <span>Alan Walker </span> because of his song called <span>Faded</span>. This is an absolutely amazing song, then i did some research on his life and found out that his full name is <span>Alan Olav Walker </span>and he was born on 24 August 1997, he is an English-Norwegian DJ and record producer.In 2015, Walker received international acclaim after releasing the single "Faded", which received platinum certifications in 14 countries. In 2020, he was ranked 26th on DJ Mag. He released his debut studio album,<span> Different World, in 2018</span></div>
                </div>
                <div className="wave-bg-down">
                    <img src="./wave4.png"></img>
                </div>
                </div>
               

              
            </div>
        )
    }
}


