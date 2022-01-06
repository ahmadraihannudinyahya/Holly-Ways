import './CardFund.css'
import Progress from './Progress';
function CardFund(props){
  const {id , title, goal : goal_donations, description, donationObtained, thumbnail } = props.fund;
  const {isOwner = false} = props;
  const progres = donationObtained / goal_donations * 100
  const handleClickToDetailPage = e =>{
    e.preventDefault();
    props.movePage({
      pathname : `/fund/${id}`,
      state : {isOwner}  
    });
  }
  return(
    <div className="cardfund">
      <img src={thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <Progress value = {progres}/>
      </div>
      <div>
        <div>
          <p>Rp. {goal_donations}</p>
        </div>
        <div>
          {isOwner ? <button onClick={handleClickToDetailPage}>View Fund</button> :<button onClick={handleClickToDetailPage}>Donate</button>}
        </div>
      </div>
    </div>
  )
}

export default CardFund;