import './LoginModal.css'
import { Component } from 'react'

class LoginModal extends Component{
  constructor(props){
    super(props);
    this.modalHandle = props.modalHandle;
    this.handleOffModal = this.handleOffModal.bind(this);
    this.handleSwitchModal = this.handleSwitchModal.bind(this);
  }
  handleOffModal(e){
    e.preventDefault();
    if(e.target.classList.contains('modalBackdrop')){
      this.modalHandle();
    }
  }
  handleSwitchModal(e){
    e.preventDefault();
    this.modalHandle('registerModal')
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
          <p>Don't have an account ? <b onClick={this.handleSwitchModal}>Klik Here</b></p>
        </form>
      </div>
    </div>
    )
  }
}
export default LoginModal;