import './LoginModal.css'
import { Component } from 'react'

class LoginModal extends Component{
  render(){
    return (
    <div className="modalBackdrop" onClick={this.handleRemove}>
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