import './CardFund.css'
import Progress from './Progress';
import {Link} from 'react-router-dom'
function CardFund(props){
  const {id , title, goal_donations, descriton, progres, thumbnail} = props.fund;
  const {handleToDetailPage} = props;
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
          <button id={id} onClick={handleToDetailPage}>Donate</button>
        </div>
      </div>
    </div>
  )
}

export default CardFund;