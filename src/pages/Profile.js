import { Component } from "react";
import ProfileComponent from "../component/ProfieComponent";

class Profile extends Component{
  constructor(props){
    super();
    this.props = props;
    this.state = {
      profile : null,
      donations : [],
    }
    this.fetchProfile = this.fetchProfile.bind(this);
    this.fetchUserDonation = this.fetchUserDonation.bind(this);
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

  render(){
    return (
      <>
        <ProfileComponent {...this.state}/>
      </>
    )
  }
}

export default Profile;