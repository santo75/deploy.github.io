import React, { Component } from 'react';
import './Contact_us.css';
import Navbar from './../Navbar/Navbar';

class Contact_us extends Component {
    state = { 
        account:{ name:'' , email:'' , subject:'', message:''}
     }

    handleChange = (e) => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
    }    
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="contact-whole">
               <div className="contact-nav"><Navbar></Navbar></div>
                <div className="contact_us">
                    <img src="./wave4.png"></img>
                    <form className="container">
                        <div className="row">
                            <div className="col-md-12 form-start">
                                <p className="mt-4 page-title">Contact Me</p>
                                    <div className="form-group flex-display">
                                        <label className="col-md-3 name_label" htmlFor="name">Name</label>
                                        <input className="col-md-6 name" type="text" name="name" value={this.state.account.name} onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group flex-display">
                                        <label className="col-md-3 email_label" htmlFor="email">Email</label>
                                        <input className="col-md-6 email" type="text" name="email" value={this.state.account.email} onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group flex-display">
                                        <label className="col-md-3 sub_label" htmlFor="subject">Subject</label>
                                        <input className="col-md-6 sub" type="text" name="subject" value={this.state.account.subject} onChange={this.handleChange}></input>
                                    </div>
                                    <div className="form-group flex-display">
                                        <label className="col-md-3 msg_label" htmlFor="message">Message</label>
                                        <textarea className="col-md-6 msg" type="text" name="message" value={this.state.account.message} onChange={this.handleChange}></textarea>
                                    </div>
                                
                                    <hr/>
                                    <div className="btn-box">
                                        <button className="btn col-md-6 send">Send <i class="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                </div> 
            </React.Fragment>
         );
    }
}
 
export default Contact_us;