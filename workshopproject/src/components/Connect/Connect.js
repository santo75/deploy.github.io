import React, { Component } from 'react'
import './Connect.css'

export default class Connect extends Component {
    render() {
        return (
            <div className="connect-whole">
                <div className="border-line"></div>
                <div className="connect-heading"><span className="same">Show</span> <span className="diff">Some</span><i class="fa fa-heartbeat"  aria-hidden="true"></i> <span className="same">On</span></div>
                <div className="Connect-icons">
                    <div className="icon-box">
                    <i class="fa fa-youtube-square icon-img" aria-hidden="true"></i>
                    <div className="icon-name">YouTube</div>
                    </div>
                    <div className="icon-box">
                    <i class="fa fa-instagram icon-img" aria-hidden="true"></i>
                    <div className="icon-name">Instagram</div>
                    </div>
                    <div className="icon-box">
                    <i class="fa fa-spotify icon-img" aria-hidden="true"></i>
                    <div className="icon-name">Spotify</div>
                    </div>
                    <div className="icon-box icon-last">
                    <i class="fa fa-wikipedia-w icon-img" aria-hidden="true"></i>
                    <div className="icon-name">Wikipedia</div>
                    </div>
               
                </div>
            </div>
        )
    }
}
