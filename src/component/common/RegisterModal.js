import { Component } from 'react';

import './RegisterModal.css'

class RegisterModal extends Component{
  constructor(props){
    super(props);
    this.handleTogleModal = props.handleTogleModal;
    this.handleOffModal = this.handleOffModal.bind(this);
  }
  handleOffModal(e){
    if(e.target.classList.contains('modalBackdrop')){
      this.handleTogleModal();
    }
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
            <p>Already have an account ? Klik Here</p>
          </form>
        </div>
      </div>
    )
  }
}
export default RegisterModal;