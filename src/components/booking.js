import React, { Component, Fragment } from 'react';

class Orders extends Component{
    constructor(props){
        super(props);
        this.state = {
					items : [],
				}
		}

		componentDidMount(){
			fetch('/receiveRequests').then(data => data.json())
			.then(data => {
				console.log(data)
				this.setState({
					items: data
				})
			});
		}

		render(){
			return(
        <div>
							<div style={{marginTop: '10%'}}>
							<h1 style={{textAlign: 'center', textDecoration:'underline'}}>Test Drive Requests</h1>
							</div>
					{this.state.items.map(data => {
						return(
							<div style={{marginTop: '80px'}}>
							<h2>{data.name} is requesting a test drive, you can reach him/her at {data.mobile}.<br/> Please be ready to greet him/her on {data.date}</h2>
							</div>
						)
					})}
        </div>
					)
			}

}
export default Orders;