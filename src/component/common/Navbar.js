import { Component } from 'react'
import './Navbar.css'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleLogin = props.handleLogin;
  }
  render(){
    return (
    <div className="navbar">
        <img src="/Icon.png" alt="icon" />
        <div>
          <button id="login" onClick={this.handleLogin}>Login</button>
          <button id="register">Register</button>
        </div>
      </div>
    )
  }
}

export default Navbar