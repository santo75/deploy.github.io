import React, { Component } from 'react'
import './Recent.css'
export default class Recent extends Component {
    render() {
        return (
            <div className="recent-whole">
                <div className="recent-heading">
                    <div className="recent-title">Some Recent Snaps</div>
                    <i class="fa fa-camera" aria-hidden="true"></i>
                    <p>:-</p>
                </div>
                <div className="recent-img">
                    <div className="group-1">
                        <div className="img-first">
                    <img src="./recent.jpg" className="img-1">
                    </img>
                    <div className="img-line-1"></div>
                        <div className="img-line-4"></div>
                        <div className="recent-info"> <p>Bangkok Tour</p></div>
                    </div>
                    <div className="img-second">
                    <img src="./Alan2.jfif" className="img-2"></img>
                    <div className="img-line-1"></div>
                        <div className="img-line-4"></div>
                        <div className="recent-info"><p>Florida Tour</p></div>
                    </div>
                    </div>
                    <div className="group-3">
                        <div className="img-third">
                    <img src="./Alan3.jfif" className="img-3"></img>
                    <div className="img-line-1"></div>
                        <div className="img-line-4"></div>
                        <div className="recent-info"><p>Panda Tour</p></div>
                    </div>
                    <div className="img-fourth">
                    <img src="./recent1.jpg" className="img-4"></img>
                    <div className="img-line-1"></div>
                        <div className="img-line-4"></div>
                        <div className="recent-info"><p>Nepal Tour</p></div>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
