import { Component } from "react";
import NotifcationCard from "./common/NotifcationCard";
import './NotificationContainer.css';
import { io } from 'socket.io-client';

class NotificationContainer extends Component{
  constructor(){
    super()
    this.state = {
      show : false,
      notification : [],
    }
  };
  componentDidMount(){
    if(process.env.SOCKET_IO_URL){
      this.socket = io(process.env.SOCKET_IO_URL);
      this.socket.connect();
      this.socket.on('connection_error', (error)=>{
        console.log(error);
      });
      this.socket.on('message', (message)=>{
        this.setState({notification : [...this.state.notification, message]});
        this.setTimeNotification();
      })
    }
  };
  componentWillUnmount(){
    if(this.socket){
      this.socket.disconnect();
    }
  };
  setTimeNotification(){
    if(this.state.notification.length === 1){
      const interval = setInterval(() => {
        this.setState((prevState => ({
          notification : prevState.notification.filter((notif , index) => index !== prevState.notification.length-1)
        })))
        if(this.state.notification.length === 0){
          clearInterval(interval);
        }
        console.log(this.state.notification);
      }, 5000);
    }
  }
  render(){
    if(this.state.notification.length !== 0){
      return(
        <div className = "notificationContainer">
          {this.state.notification.map((message, index)=><NotifcationCard key ={index} message = {message}/>)}
        </div>
      )
    }
    return <></>
  }
}
export default NotificationContainer;