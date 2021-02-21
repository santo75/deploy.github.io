import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default class Navbar extends Component {

constructor(props){
    super(props)

    this.state = {
        shownav:false
    }
}

handleNav = () => {
    this.setState({
        shownav:!this.state.shownav
    })
}
    render() {
        return (
            <div className="nav-whole">
                        <div className="Nav-sec">
                <div className="walker-logo">
                            <img src="walker-logo.gif"></img>
                            <div className="info-logo-heading" >alker</div>
                        </div>
                        <div className="float-right">
                      
                    <div className="home-sec">

                     
                        <div className="home-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
                        </div>
                        <Link to="/"><div className="home-info">Home</div></Link>
                    </div>
                    <div className="tour-sec">

                     
                        <div className="tour-svg">
                        <i class="fa fa-globe" aria-hidden="true"></i>

                        </div>
                        <Link to="/travel"><div className="tour-info">Tours</div></Link>
                    </div>
                    <div className="achievement-sec">
                        <div className="achievement-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
</svg>
                        </div>
                     <Link to="/carrer" >  <div className="achievement-info">Carrer</div> </Link>
                    </div>
             
                    </div>
                  
                </div>

             {this.state.shownav ? null :  <div className="hamburger" onClick={this.handleNav}>
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
    }

               {this.state.shownav ? <div className="hamburger-content">
                     <div className="ham-cont">
                         <div className="ham-cont-list">
                                           
                    <div className="home-sec">

                     
<div className="home-svg">
<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
<path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
</svg>
</div>
<Link to="/"><div className="home-info">Home</div></Link>
</div>
                         </div>
                         <div className="line"></div>
                         <div className="ham-cont-list">
                         <div className="tour-sec">

                     
<div className="tour-svg">
<i class="fa fa-globe" aria-hidden="true"></i>

</div>
<Link to="/travel"><div className="tour-info">Tours</div></Link>
</div>
                         </div>
                         <div className="line"></div>
                         <div className="ham-cont-list">
                         <div className="achievement-sec">
                        <div className="achievement-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z"/>
</svg>
                        </div>
                     <Link to="/carrer" >  <div className="achievement-info">Carrer</div> </Link>
                    </div>
                         </div>

                         <div className="line"></div>
                         <div className="ham-cont-list">    
                    </div>
                   
                     </div>

                     <div className="cancel-btn" onClick={this.handleNav}>
                     <i class="fa fa-times" aria-hidden="true"></i>
                     </div>
                </div> :null
               } 
            </div>
        )
    }
}
