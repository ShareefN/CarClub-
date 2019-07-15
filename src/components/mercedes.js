import React, { Component } from 'react';

class Mercedes extends Component{
  constructor(props){
  	super(props)
      this.state = {
			 cars: [],
			 carsSelected: [],
      }
	}

	componentWillMount(){
		fetch('/getMerc').then(data => data.json())
		.then(data => {
			this.setState({
				cars: data,
			})
		})
	}

	render(){
		return(
			<div class="container" style={{marginTop: '10%'}}>
			<h3 style={{fontSize: '35px', textDecoration: 'underline', textAlign: 'center'}}>Mercedes</h3>
			{this.state.cars.map((item, index) => {
		return(
		<div class="card" style={{width: '20rem', height: "28rem",  float: "left", margin: "40px"}}>
			<img class="card-img-top" src={item.image} style={{height: '15rem'}} alt="Card image cap" />
		<div class="card-body">
			<h5 class="card-title">{item.name}</h5>
			<p class="card-text">Color: {item.color}</p>
			<p class="card-text">Milage: {item.milage},000 KM</p>
			<p class="card-text">Asking Price: {item.price},000 JD</p>
			<a class="btn btn-primary" style={{margin: '25%', color: "blue"}}>Book A Test Drive</a>
		</div>
		</div>
	)
})}
	</div>
		)
	}
}
export default Mercedes;