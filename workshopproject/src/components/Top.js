import React, { Component } from 'react'
import './Top.css'

export default class Top extends Component {
    render() {
        return (
            <div>
                <div className="top-bg">
                    <img src="https://learnframermotion.com/images/bg-darker.webp"></img>

                    <div className="top-intro"></div>
                </div>

                <div className="welcome-intro">
                    <div className="intro-heading">Welcome To my Page</div>
                    <div className="intro-sub-heading">Here you can Find All Information About Me</div>
                </div>

               <div className="avatar">
                    <div className="avatar-left-most">
                        <img src="https://learnframermotion.com/images/white_man_3d.webp"></img>
                    </div>
                    <div className="avatar-left-girl">
                        <img src="https://learnframermotion.com/images/black_girl_3d.webp"></img>
                    </div>
                    <div className="avatar-right-girl">
                        <img src="https://learnframermotion.com/images/white_girl_3d.webp"></img>
                    </div>
                    <div className="avatar-right-most">
                        <img src="https://learnframermotion.com/images/black_man_3d-2.webp"></img>
                    </div>
                </div>
     
            </div>
        )
    }
}
