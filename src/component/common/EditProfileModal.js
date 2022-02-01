import './EditProfileModal.css'
import { Component } from 'react'

class LoginModal extends Component{
  constructor(props){
    super(props);
    this.modalHandle = props.modalHandle;
    this.sendEditProfile = props.patchProfile;
    this.profile = props.profile;
    this.state = {
      alert : null,
      isLoading : false,
      inputs : {
        fullname : '',
        phone : '',
        image : null, 
      }
    }
    this.handleOffModal = this.handleOffModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePatchEdit = this.handlePatchEdit.bind(this);
  }
  componentDidMount(){
    this.setState({inputs : {...this.profile}});
  }
  handleOffModal(e){
    if(e.target.classList.contains('modalBackdrop')){
      this.modalHandle();
    }
  }
  handleInputChange(e){
    if(e.target.name === 'image'){
      this.setState({inputs : {...this.state.inputs, [e.target.name] : e.target.files[0]}});
    }
    this.setState({inputs : {...this.state.inputs, [e.target.name] : e.target.value}});
  }
  async handlePatchEdit(){
    try {
      this.setState({isLoading : true});
      const formData = new FormData();
      formData.set('fullname', this.state.inputs.fullname);
      formData.set('phone', this.state.inputs.phone);
      formData.append('image', this.state.inputs.image);
      await this.sendEditProfile(formData);
      this.modalHandle();
    } catch (error) {
      this.setState({isLoading : false});
      this.setState({alert : error.response.data.message});
    }
  };
  render(){
    return (
    <div className="modalBackdrop" id="modalLogin" onClick={this.handleOffModal}>
      <div className="modal">
        <form action="">
          <h1>Edit Profile</h1>
          {this.state.alert? <span>{this.state.alert}</span>:<></>}
          <input type="text" name='fullname' placeholder="Fullname" value={this.state.inputs.fullname} onChange={this.handleInputChange}/>
          <input type="text" name="phone" placeholder="phone ex 0876xxxxx" value={this.state.inputs.phone} onChange={this.handleInputChange}/>
          <label htmlFor="image">Attache Thumbnail</label>
          <input type='file' name="image" id="image" onChange={this.handleInputChange} style={{display : 'none'}}/>
          <button onClick = {this.handlePatchEdit} disabled = {this.state.isLoading}>
            {this.state.isLoading ? 'Loading...' : 'Confirm'}
          </button>
        </form>
      </div>
    </div>
    )
  }
}
export default LoginModal;