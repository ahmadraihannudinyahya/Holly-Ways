import { Component } from "react";
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
        <ProfileComponent />
      </>
    )
  }
}

export default Profile;