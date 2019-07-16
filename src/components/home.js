import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

class Home extends Component{
	constructor(props){
		super(props)
		this.state = {
			name: '',
			mobile: '',
			date: '',
			message: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(event){
		this.setState({
		[event.target.name]: [event.target.value]
		})
	}

  render(){
    return(
			<div>
		<div>
       <h1 style={{marginTop: '22%', marginLeft: '15%'}}>Who We Are?</h1>
			 </div>
			<div style={{textAlign:'center', marginLeft: '-730px', position: 'relative'}}>
			 <strong><p style={{color: '#737680'}}>There is a need in Amman for a large selection of quality used cars, and Integrity<br/> Auto Sales will sell these top-quality used vehicles at a competitive price. <br/>The owner and sales manager have over 30 years of combined experience in new and used auto sales.<br/> We will continue to develop our excellent working relationship with local<br/> dealers and auctions to bring the savings to the customer.<br/>Whatever you like CarClub has it, Come checkout our inventory and maybe go for a test drive!</p></strong>
			</div>
			 <img style={{position: 'relative', marginLeft: '50%', marginTop: '-18%'}} src="https://wisebread-killeracesmedia.netdna-ssl.com/files/fruganomics/imagecache/605x340/blog-images/car-salesman-151336938-small.jpg"/>
				<div>
					<h1 style={{marginTop: '12%', marginLeft:'65%'}}>Where Are We Located?</h1>
					</div>
					<div style={{textAlign:'center', marginLeft: '700px', position: 'relative'}}>
					<strong><p style={{color: '#737680'}}>There is a need in Amman for a large selection of quality used cars, and Integrity<br/> Auto Sales will sell these top-quality used vehicles at a competitive price. <br/>The owner and sales manager have over 30 years of combined experience in new and used auto sales.<br/> We will continue to develop our excellent working relationship with local<br/> dealers and auctions to bring the savings to the customer.<br/>Whatever you like CarClub has it, Come checkout our inventory and maybe go for a test drive!</p></strong>
					</div>
					<Map google={this.props.google} initialCenter={{ lat: 31.9414, lng: 35.8881}} zoom={18} style={{height: '40%', width: '45%', marginLeft: '2%', marginTop: '-240px'}}>
			 <Marker onClick={this.onMarkerClick}
			 
        name={'Current location'} />
      </Map>
			</div>	
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyD297bWnr4XMlsOda_RF3u0rX7bvfT_zAo ")
})(Home)