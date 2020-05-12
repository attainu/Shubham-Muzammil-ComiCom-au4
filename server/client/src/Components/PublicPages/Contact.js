import React, { Component } from 'react'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendMail } from '../../Redux/action_creators/featureActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
toast.configure();

class Contact extends Component {

    state={
        name : '',
        email : '',
        subject : '',
        message : ''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=()=>{
        let { name, email, subject, message} = this.state;
        if(name && email && subject && message){
            let message = sendMail(this.state)
            console.log("message", message)
            if(message) {
                toast('Mail Send, Will reply soon', {type: 'success'})
            }else {
                toast('Sorry, Something went wrong', {type : "error"})
            }
        }
    }

    render(){
        return (
            <div className="m-3 p-2">
                <div className="jumbotron jumbotron-sm">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-12">
                                <h1 className="h1">
                                    Contact us <small>Feel free to contact us</small></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="well well-sm">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Name<span style={{color:"red"}}>*</span></label>
                                            <input onChange={(e)=>{this.handleChange(e)}} name="name" type="text" className="form-control" id="name" placeholder="Enter name" required="required" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email Address<span style={{color:"red"}}>*</span></label>
                                            <div className="input-group">
                                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                                </span>
                                                <input onChange={(e)=>{this.handleChange(e)}} name="email" type="email" className="form-control" id="email" placeholder="Enter email" required="required" /></div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">
                                                Subject<span style={{color:"red"}}>*</span></label>
                                            <select value={this.state.subject} onChange={(e)=>{this.handleChange(e)}} id="subject" name="subject" className="form-control" required="required">
                                                <option value="na">Choose One:</option>
                                                <option value="General Customer Service">General Customer Service</option>
                                                <option value="Suggestions">Suggestions</option>
                                                <option value="Product Support">Product Support</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="name">
                                                Message<span style={{color:"red"}}>*</span></label>
                                            <textarea onChange={(e)=>{this.handleChange(e)}} name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                                placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button onClick={()=>{this.handleSubmit()}} type="submit" className="btn pull-right" id="btnContactUs" style={{background:"#ffd900"}}>
                                            Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <form>
                            <legend><span className="glyphicon glyphicon-globe"></span>										<FontAwesomeIcon icon={faGlobeAmericas} style={{color:"#ffd900"}}/>
                                 Our office</legend>
                            <address>
                                <strong>Comicom, Inc.</strong><br />
                                795 Folsom Ave, Suite 600<br />
                                San Francisco, CA 94107<br />
                                <abbr title="Phone">
                                    P:</abbr>
                                (123) 456-7890
                            </address>
                            <address>
                                <strong>Full Name</strong><br />
                                <a href="mailto:#">first.last@example.com</a>
                            </address>
                            </form>
                        </div>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default Contact