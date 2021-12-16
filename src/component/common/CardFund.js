import './CardFund.css'
import Progress from './Progress';
import {Link} from 'react-router-dom'
function CardFund(props){
  const {id , title, goal_donations, descriton, progres, thumbnail} = props.fund;
  const link = `/fund/${id}`
  return(
    <div className="cardfund">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{descriton}</p>
      <div>
        <Progress value = {progres}/>
      </div>
      <div>
        <div>
          <p>{goal_donations}</p>
        </div>
        <div>
          <Link to={link} ><button>Donate</button></Link>
        </div>
      </div>
    </div>
  )
}

export default CardFund;