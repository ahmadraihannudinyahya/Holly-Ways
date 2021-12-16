import './LoginModal.css'
import { Component } from 'react'

class LoginModal extends Component{
  constructor(props){
    super(props);
    this.handleOffModal= props.handleOffModal;
  }
  render(){
    return (
    <div className="modalBackdrop" id="modalLogin" onClick={this.handleOffModal}>
        <div className="modal">
          <form action="">
            <h1>Login</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <button>Login</button>
            <p>Don't have an account ? Klik Here</p>
          </form>
        </div>
      </div>
    )
  }
}
export default LoginModal;