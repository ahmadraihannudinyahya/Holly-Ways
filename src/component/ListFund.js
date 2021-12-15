import CardFund from './common/CardFund';
import './ListFund.css'

function ListFund (){
  return(
    <div className="listfund">
      <h2>Donate Now</h2>
      <div className="listcontainer">
        <CardFund/>
        <CardFund/>
        <CardFund/>
      </div>
    </div>
  )
}

export default ListFund;