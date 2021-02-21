import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import './Travel.css'

export default class Travel extends Component {
    render() {
        return (
            <div className="travel-whole">
                <Navbar></Navbar>
                
                <div className="travel-bg">
                    <img src="./animation_2.gif"></img>

                    <div className="tour-list">
                        <div className="list-item-tour">
                            <div className="whole-list">
                            <div className="list-item-border row border-1">
                            <div className="list-item-tour-name col-sm-6 col-12" title="Walker Tour">Walker Tour</div>
                            <div className="list-item-year-start col-sm-2 col-3">2016</div>
                            <div className="list-item-btn col-sm-2 col-3"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                            <div className="list-item-year-end col-sm-2 col-3">2018</div>
                            </div>
                            <div className="list-item-border row border-2">
                            <div className="list-item-tour-name col-sm-6 col-12" title="Diffrent World Tour">Diffrent World Tour</div>
                            <div className="list-item-year-start col-sm-2 col-3">2018</div>
                            <div className="list-item-btn col-sm-2 col-3"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>
                            <div className="list-item-year-end col-sm-2 col-3">2019</div>
                            </div>
                            <div className="list-item-border row border-3">
                            <div className="list-item-tour-name col-sm-6 col-12">World Of Walker Tour</div>
                            <div className="list-item-year-start col-sm-2 col-3">2018</div>
                           
                            </div>
                            <div className="list-item-border row border-4">
                            <div className="list-item-tour-name col-sm-6 col-12">Aviation Tour Tour</div>
                            <div className="list-item-year-start col-sm-2 col-3">2019</div>
                      
                            </div>
                            </div>
                        </div>   
                       
                    </div>
                </div>
            </div>
        )
    }
}
