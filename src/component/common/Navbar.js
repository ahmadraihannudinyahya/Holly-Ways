import { Component } from 'react'
import './Navbar.css'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.isLogin = props.isLogin
    this.handleTogleModalLogin = props.handleTogleModalLogin;
    this.handleTogleModalRegister = props.handleTogleModalRegister;
  }
  render(){
    return (
    <div className="navbar">
        <img src="/Icon.png" alt="icon" />
        <div>
          {this.isLogin? <img src="/Icon.png" alt="avatar" />: <><button id="login" onClick={this.handleTogleModalLogin}>Login</button><button id="register" onClick={this.handleTogleModalRegister}>Register</button> </>}
        </div>
      </div>
    )
  }
}

export default Navbar