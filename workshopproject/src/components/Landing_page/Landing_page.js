import React, { Component } from 'react'
import Hide_avatar from '../Hide_avatar/Hide_avatar'
import Top from '../Top'
import './Landing_page.css'
import Wave from './../Wave/Wave';

export default class Landing_page extends Component {
    render() {
        return (
            <div className="landing-whole">
                <div className="top-div">
                    <Top></Top>
                </div> 
        

         <div className="wave-div">
                 <Wave></Wave>
                </div>
        
            <div className="hide_avatar">
                    <Hide_avatar></Hide_avatar>
        </div> 
            </div>
        )
    }
}
