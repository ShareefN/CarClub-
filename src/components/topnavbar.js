import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


class NavBar extends Component{

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
					<Button color="black" style={{marginLeft: "75%", position: 'absolute'}}>LogIn As Admin</Button>
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