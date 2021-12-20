import { Component } from "react";
import Navbar from "../component/common/Navbar";
import ProfileComponent from "../component/ProfieComponent";

class Profile extends Component{
  constructor(props){
    super();
    this.props = props;
  }
  componentDidMount(){
    if(!this.props.isLogin){
      this.props.history.push('/');
    }
  }
  render(){
    return (
      <>
        <Navbar isLogin = {this.props.isLogin}/>
        <ProfileComponent />
      </>
    )
  }
}

export default Profile;