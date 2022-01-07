import './NotifcationCard.css'

function NotifcationCard(props){
  return(
    <div className="notifcationCard">
      <div  className="notifcationHeader">
        <h3>Notification</h3>
      </div>
      <div className="notifcationContent">
        <p>{props.message}</p>
      </div>
    </div>
  )
}
export default NotifcationCard;