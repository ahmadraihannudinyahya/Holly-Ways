import { Component } from "react";
import ProfileComponent from "../component/ProfieComponent";
import EditProfileModal from "../component/common/EditProfileModal";

class Profile extends Component{
  constructor(props){
    super();
    this.props = props;
    this.state = {
      profile : null,
      donations : [],
      modalEditStatus : false, 
    }
    this.fetchProfile = this.fetchProfile.bind(this);
    this.fetchUserDonation = this.fetchUserDonation.bind(this);
    this.setModal = this.setModal.bind(this);
  }
  async componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
    await this.fetchProfile();
    await this.fetchUserDonation();
  }
  async fetchProfile(){
    try {
      const response = await this.props.getProfileUserLogin();
      this.setState({profile :response.data.data.user });
    } catch (error) {
      console.log(error);
    }
  }
  async fetchUserDonation(){
    try {
      const response = await this.props.getUserLoginDonations();
      this.setState({donations : response.data.data.donations})
    } catch (error) {
      console.log(error);
    }
  }
  setModal(condition = false){
    this.setState({modalEditStatus : condition});
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.modalEditStatus !== prevState.modalEditStatus){
      if(!this.state.modalEditStatus){
        this.fetchProfile()
      }
    }
  };
  render(){
    return (
      <>
        <ProfileComponent {...this.state} modalHandle ={this.setModal}/>
        {this.state.modalEditStatus? <EditProfileModal modalHandle ={this.setModal} patchProfile ={this.props.patchProfile} profile = {this.state.profile}/> : <></> }  
      </>
    )
  }
}

export default Profile;