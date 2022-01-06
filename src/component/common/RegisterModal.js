import { Component } from 'react';

import './RegisterModal.css'

class RegisterModal extends Component{
  constructor(props){
    super(props);
    this.modalHandle = props.modalHandle;
    this.postRegister = props.postRegister;
    this.setIsLogin = props.setIsLogin;
    this.state = {
      alert : null,
      isLoading : false
    }
    this.handleOffModal = this.handleOffModal.bind(this);
    this.handleSwitchModal = this.handleSwitchModal.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
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
  async handleRegister(e){
    try {
      e.preventDefault();
      const fullnameEll = e.target.previousElementSibling;
      const passwordEll = fullnameEll.previousElementSibling;
      const emailEll = passwordEll.previousElementSibling;
      if(passwordEll.value.length < 8){
        return this.setState({alert : 'password min 8 character'});
      }
      if(fullnameEll.value.length < 5){
        return this.setState({alert : 'fullname min 5 character'});
      }
      this.setState({isLoading : true});
      const response = await this.postRegister({
        fullname : fullnameEll.value,
        email : emailEll.value,
        password : passwordEll.value
      });
      localStorage.setItem('token', response.data.data.user.token);
      this.setIsLogin(true);
      this.modalHandle();
    } catch (error) {
      this.setState({isLoading : false})
      if(error.response){
        return this.setState({alert : error.response.data.message})
      }
      console.log('Error', error.message);
    }
  }
  render(){
    return(
      <>
        <div className="modalBackdrop" id="modalRegister" onClick={this.handleOffModal}>
          <div className="modal">
            <form action="">
              <h1>Register</h1>
              {this.state.alert? <span>{this.state.alert}</span> : <></>}
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password"/>
              <input type="text" placeholder="Fullname"/>
              <button onClick = {this.handleRegister} disabled = {this.state.isLoading}>Register</button>
              <p>Already have an account ? <b onClick={this.handleSwitchModal}>Klik Here</b></p>
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default RegisterModal;