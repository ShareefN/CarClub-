import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/topnavbar';
import Home from './components/home';
import Mercedes from './components/mercedes';

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
      </Router>
      </div>
    )
  }
}

export default App;
