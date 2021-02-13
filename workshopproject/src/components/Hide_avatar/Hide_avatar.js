import React, { Component } from 'react'
import './Hide_avatar.css'

export default class Hide_avatar extends Component {
    render() {
        return (
            <div className="hide_class_whole">
                <div className="avatar-box">
                    <div className="Project-info">
                        <div className="Project-info-head">Some of My Projects :-</div>
                        <div className="project-list">
                            <div className="project-item">AIR Healthcare</div>
                            <div className="project-item">Climatic Impact</div>
                            <div className="project-item">College Fest</div>
                            <div className="project-item">Photography Website</div>
                            <div className="project-item">College Technical Website</div>
                            <div className="much-more">&much more</div>
                        </div>
                    </div>
                    <div className="avatar-img">
                        <img src="https://learnframermotion.com/images/black_man_3d-2.webp"></img>
                    </div>
                </div>
               
            </div>
        )
    }
}
