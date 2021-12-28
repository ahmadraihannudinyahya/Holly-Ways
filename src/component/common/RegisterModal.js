import { Component } from 'react';

import './RegisterModal.css'

class RegisterModal extends Component{
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
    this.modalHandle('loginModal')
  }
  render(){
    return(
      <div className="modalBackdrop" id="modalRegister" onClick={this.handleOffModal}>
        <div className="modal">
          <form action="">
            <h1>Register</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Fullname"/>
            <button>Register</button>
            <p>Already have an account ? <b onClick={this.handleSwitchModal}>Klik Here</b></p>
          </form>
        </div>
      </div>
    )
  }
}
export default RegisterModal;