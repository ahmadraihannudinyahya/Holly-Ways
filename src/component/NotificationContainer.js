import { Component } from "react";
import NotifcationCard from "./common/NotifcationCard";
import './NotificationContainer.css'

class NotificationContainer extends Component{
  constructor(){
    super()
    this.state = {
      show : false,
    }
  }
  render(){
    if(this.state.show){
      return(
        <div className = "notificationContainer">
          <NotifcationCard />
        </div>
      )
    }
    return <></>
  }
}
export default NotificationContainer;