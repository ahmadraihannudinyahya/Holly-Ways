import { Component } from 'react'
import './Navbar.css'

class Navbar extends Component{
  constructor(props){
    super(props);
    this.isLogin = props.isLogin
    this.handleShowModal = props.handleShowModal;
  }
  render(){
    return (
    <div className="navbar">
        <img src="/Icon.png" alt="icon" />
        <div>
          {this.isLogin? <img src="/Icon.png" alt="avatar" />: <><button id="login" onClick={this.handleShowModal}>Login</button><button id="register" onClick={this.handleShowModal}>Register</button> </>}
        </div>
      </div>
    )
  }
}

export default Navbar