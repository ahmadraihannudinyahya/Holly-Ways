import CardFund from './common/CardFund';
import './MyListFund.css'

function MyListFund(props){
  const {fetchMyFundlistServices, movePage}= props;
  const listFund = fetchMyFundlistServices();
  const hanleClikRaiseFund = (e) =>{
    e.preventDefault();
    movePage('/raisefund');
  }
  return(
    <div className="myraisefund">
      <div>
        <div>
          <h2>My Raise Fund</h2>
        </div>
        <div>
          <button onClick={hanleClikRaiseFund}>Make Raise Fund</button>
        </div>
      </div>
      <div>
        {listFund.map(fund =><CardFund key={fund.id} fund={fund} movePage={movePage}/>)}
      </div>
    </div>
  )
}

export default MyListFund;