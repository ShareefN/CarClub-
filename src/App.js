import React, { Component, Fragment } from 'react';
import Navbar from './components/topnavbar';
import Home from './components/home'

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
        <Home/>
      </div>
    )
  }
}

export default App;
