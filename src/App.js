import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/topnavbar';
import Home from './components/home';
import Mercedes from './components/mercedes';
import Bmw from './components/bmw';
import Audi from './components/audi';
import Porsche from './components/porsche';
import Range from './components/range';
import Ferrari from './components/ferrari';
import Lamborghini from './components/lambo';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      loginIn: false,
    }
  }

  onLogin = () => {
    this.setState({
      loginIn: ! this.state.loginIn
    })
  }

  render(){
    return(
        <div>
      <Fragment>
        <Navbar onLogin={this.onLogin}/>
      </Fragment>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/mercedes" component={Mercedes}/>
        <Route exact path="/bmw" component={Bmw}/>
        <Route exact path="/audi" component={Audi}/>
        <Route exact path="/porsche" component={Porsche}/>
        <Route exact path="/range" component={Range}/>
        <Route exact path="/ferrari" component={Ferrari}/>
        <Route exact path="/lambo" component={Lamborghini}/>
      </Router>
      </div>
    )
  }
}

export default App;
