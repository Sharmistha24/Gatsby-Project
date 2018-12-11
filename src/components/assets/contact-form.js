import React from 'react';
import Link from 'gatsby-link';
import axios from 'axios';


class Contactform extends React.Component {


constructor() {
	super();
	this.state= {
		name:'',
		email:'',
		message:'',
		error: false,
	
	}
	this.onSubmit = this.onSubmit.bind(this);
}


clearData = () => {
	this.setState({...initialstate})

}

onSubmit(e) {
	e.preventDefault();
	console.log("inside onSubmit");
	// console.log(this.state);
	const { name, email, message } = this.state;
	if ( ! name || ! email || ! message ) {
		// alert("enter Name, Email and Mesage");
		this.setState({ error: true });
		return;
	}

	console.log("User has entered all fields, make api call");
	console.log("user data", this.state);

	axios.post(
		'https://hook.io/sharmisthakundu12/contact',
		{
		  name: this.state.name,
		  email: this.state.email,
		  message: this.state.message,
		}
	  )
	  .then( (response) => {
      console.log("response", response);
	})
	  .catch( (error) => {
        console.log("alert",error);
	});

}

handleChange = (name, event) =>{
	
	this.setState({[name] : event.target.value })
}



xonSubmit = (e) => {
	this.clearData();
	e.preventDefault();
	// const err = this.validate();
	// if (!err){
	let formData = this.state;
	console.log("formData",formData);
// }
	

	let name = this.state.name;
	console.log('name', name)
	if(name < 2){
		alert("provide valid name");
		return false;
	}
}

render(){
	// const {name, mail, office, message } = this.state
  return(
   
	<form className="contact1-form validate-form" 
		  method="post" name="form" data-netlify="true" 
		  >
		  
				<span className="contact1-form-title">
					Get in touch
				</span>

				{ this.state.error &&
				<div style={{ background: "red", color: "#FFF", padding: "20px", margin: 20 }}>Error occoured!!!!!</div>
				}

				<div className="wrap-input1 validate-input">
					<input className="input1" type="text"
					id="name" 
					required
					name="name"
					value={this.state.name}
					
					placeholder="Name"
					
					 onChange={(event) => this.handleChange('name', event)}
					 />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input">
					<input className="input1" type="email"
					required 
					name="mail"
					value={this.state.mail}
					
					 placeholder="Email" 
					  onChange={(event) => this.handleChange('email', event)} 
					   />
					<span className="shadow-input1"></span>
				</div>

				<div className="wrap-input1 validate-input">
					<textarea className="input1"required
					 name="message"
					value={this.state.message}
					
					 placeholder="Message"  
					 onChange={(event) => this.handleChange('message', event)} 
					 ></textarea>
					<span className="shadow-input1"></span>
				</div>

				<div className="container-contact1-form-btn">
					<button className="contact1-form-btn" onClick={ this.onSubmit }>
						<span>
							Send Email
							
						</span>
					</button>
				</div>
			</form>
  );
}

}
export default Contactform;