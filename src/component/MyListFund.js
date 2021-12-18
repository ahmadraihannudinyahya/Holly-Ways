import CardFund from './common/CardFund';
import './MyListFund.css'

function MyListFund(props){
  const {fetchMyFundlistServices}= props;
  const listFund = fetchMyFundlistServices();
  return(
    <div className="myraisefund">
      <div>
        <div>
          <h2>My Raise Fund</h2>
        </div>
        <div>
          <button>Make Raise Fund</button>
        </div>
      </div>
      <div>
        {listFund.map(fund =><CardFund key={fund.id} fund={fund}/>)}
      </div>
    </div>
  )
}

export default MyListFund;