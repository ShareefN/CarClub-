import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
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

class NavBar extends Component{
	constructor(props){
		super(props)
		this.state = {
			modalIsOpen: false,
			email: 'admin@carclub.com',
			password: '1234',
		}
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

	onInputChange(event){
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	checkAdmin(){
		
	}

	classes() {
		return{
		root: {
			flexGrow: 1,
		},
	}
} 

	render(){
		return(
			<div>
				<AppBar position="fixed" color="default">
					<ToolBar>
					<Typography style={{color: "white", textDecoration:"none", display: 'inline-block', paddingTop: '.3125rem', paddingBottom: '.3125rem', marginRight: '1rem', fontSize: '1.25rem', lineHeight: 'inherit', whiteSpace: 'nowrap'}}>
        	<Link href="/" style={{color: 'black', textDecoration: 'none'}}>CarClub!</Link>
					<Button color="black" style={{marginLeft: "75%", position: 'absolute'}} onClick={this.hanleClickOpen.bind(this)}>LogIn As Admin</Button>
					<Dialog open={this.state.modalIsOpen} TransitionComponent={Transition} keepMounted aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <DialogTitle id="alert-dialog-slide-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{textAlign: 'center', color: 'black'}}>
						<h3>Welcome Admin</h3>
					<TextField required	fullWidth	onChange={this.onInputChange.bind(this)}	label="Email"	name="email"	autoComplete="email" autoFocus/>
					<TextField required	fullWidth	onChange={this.onInputChange.bind(this)}	label="Pawword" type="password"	name="password"	autoComplete="password" autoFocus/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
					<Button href="/requests" color="primary" onClick={this.checkAdmin.bind(this)}>Login</Button>
					<Button color="primary" onClick={this.hanleClickClose.bind(this)}>Back</Button>
        </DialogActions>
      </Dialog>
      		</Typography>
					</ToolBar>
					<Paper className={this.classes.root}>
   				<BrowserRouter>
			   <Tabs centered>
    		 <Link href ="/" style={{textDecoration: 'none'}}><Tab label="Home" /></Link>
     		 <Link href ="/mercedes" style={{textDecoration: 'none'}}><Tab label="Mercedes" /></Link>
        <Link href ="/bmw" style={{textDecoration: 'none'}}><Tab label="Bmw" /></Link>
        <Link href="/audi" style={{textDecoration: 'none'}}><Tab label="Audi"/></Link>
				<Link href="/porsche" style={{textDecoration: 'none'}}><Tab label="Porsche"/></Link>
				<Link href="/range" style={{textDecoration: 'none'}}><Tab label="Range Rover"/></Link>
        <Link href="/lambo" style={{textDecoration: 'none'}}><Tab label="Lamborghini" /></Link>
        <Link href ="/ferrari" style={{textDecoration: 'none'}}><Tab label="Ferrari"/></Link>
  			</Tabs>
  			</BrowserRouter>
				</Paper>

				</AppBar>
			</div>
		)
	}
}
export default NavBar;