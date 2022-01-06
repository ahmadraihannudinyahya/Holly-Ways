import './LoginModal.css'
import { Component } from 'react'

class LoginModal extends Component{
  constructor(props){
    super(props);
    this.modalHandle = props.modalHandle;
    this.postLogin = props.postLogin;
    this.setIsLogin = props.setIsLogin;
    this.state = {
      alert : null,
      isLoading : false
    }
    this.handleOffModal = this.handleOffModal.bind(this);
    this.handleSwitchModal = this.handleSwitchModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
  async handleLogin(e){
    try {
      e.preventDefault();
      const passEll = e.target.previousElementSibling;
      const emailEll = passEll.previousElementSibling;
      this.setState({isLoading : true});
      const response = await this.postLogin({email : emailEll.value, password : passEll.value});
      localStorage.setItem('token', response.data.data.user.token);
      this.setIsLogin(true);
      this.modalHandle()
    } catch (error) {
      this.setState({isLoading : false});
      if(error.response){
        this.setState({alert : error.response.data.message});
      }else{
        console.log(error);
      }
    }
  }
  render(){
    return (
    <div className="modalBackdrop" id="modalLogin" onClick={this.handleOffModal}>
      <div className="modal">
        <form action="">
          <h1>Login</h1>
          {this.state.alert? <span>{this.state.alert}</span>:<></>}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <button onClick = {this.handleLogin} disabled = {this.state.isLoading}>Login</button>
          <p>Don't have an account ? <b onClick={this.handleSwitchModal}>Klik Here</b></p>
        </form>
      </div>
    </div>
    )
  }
}
export default LoginModal;