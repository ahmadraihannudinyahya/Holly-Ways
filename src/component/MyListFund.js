import CardFund from './common/CardFund';
import './MyListFund.css'

function MyListFund(props){
  const {fetchMyFundlistServices, moveToRaiseFundPage, moveToFundDetailPage}= props;
  const listFund = fetchMyFundlistServices();
  const hanleClikRaiseFund = (e) =>{
    e.preventDefault();
    moveToRaiseFundPage();
  }
  const handleToDetailPage = (e) =>{
    e.preventDefault();
    moveToFundDetailPage(e.target.id)
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
        {listFund.map(fund =><CardFund key={fund.id} fund={fund} handleToDetailPage={handleToDetailPage}/>)}
      </div>
    </div>
  )
}

export default MyListFund;