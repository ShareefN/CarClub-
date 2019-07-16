import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Bmw extends Component{
  constructor(props){
	  super(props)
	  this.state = {
			 cars: [],
			 modalIsOpen: false,
			 name: '',
			 mobile: '',
			 date: '',
	  }
	}

	componentWillMount(){
		fetch('/getBmw').then(data => data.json())
		.then(data => {
			this.setState({
				cars: data,
			})
		})
	}

	hanleClickOpen(){
		this.setState({
			modalIsOpen: ! this.state.modalIsOpen
		})
	}

	hanleClickClose(){
		this.setState({
			modalIsOpen: false
		})
	}

	handelInputChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	snedTD(){
		fetch('/sendRequest', {
			method: 'POST',
			body: JSON.stringify({
				name: this.state.name,
				mobile: this.state.mobile,
				date: this.state.date
			}),
			headers: { "Content-Type": "application/json" },
		}).then(request => {
			return request.json()
		}).then(body => {
			alert('Request Sent')
		}).catch(err => {
			console.log(err)
		})
	}

	render(){
		return(
			<div class="container" style={{marginTop: '10%', marginLeft: '7%'}}>
			<h3 style={{fontSize: '35px', textAlign: 'center'}}>BMW</h3>
			{this.state.cars.map((item, index) => {
		return(
		<div class="card" style={{width: '20rem', height: "28rem",  float: "left", margin: "40px"}}>
			<img class="card-img-top" src={item.image} style={{height: '15rem', width: '20rem'}} alt="Card image cap" />
		<div class="card-body">
			<h5 class="card-title" style={{fontSize: '25px'}}>{item.name}</h5>
			<p class="card-text">Color: {item.color}</p>
			<p class="card-text">Milage: {item.milage},000 KM</p>
			<p class="card-text">Asking Price: {item.price},000 JD</p>
			<a class="btn btn-primary" style={{margin: '25%', color: "blue"}} onClick={this.hanleClickOpen.bind(this)}>Book A Test Drive</a>
		</div>
		<Dialog open={this.state.modalIsOpen} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
		<DialogTitle id="alert-dialog-slide-title"></DialogTitle>
		<DialogContent>
		  <DialogContentText id="alert-dialog-slide-description" style={{textAlign: 'center', color: 'black'}}>
						<h3>CarClub Test Drive Form</h3>
						<p>*Please enter your credintials below and visit the showroom anytime!</p>
					<TextField required	fullWidth	onChange={this.handelInputChange.bind(this)}	label="Name"	name="name"	autoComplete="Name" autoFocus/>
					<TextField required	fullWidth	onChange={this.handelInputChange.bind(this)}	label="Mobile Number"	name="mobile"	autoComplete="mobile" autoFocus/>
					<TextField required	fullWidth	onChange={this.handelInputChange.bind(this)}	label="Date Of Test Drive"	name="date"	autoComplete="date" autoFocus/>
		  </DialogContentText>
		</DialogContent>
		<DialogActions>
		  <Button href="/bmw" color="primary" onClick={this.snedTD.bind(this)}>Request Test Drive</Button>
					<Button color="primary" onClick={this.hanleClickClose.bind(this)}>Back</Button>
		</DialogActions>
	  </Dialog>
		</div>
	)
})}
	</div>
		)
	}
}
export default Bmw;