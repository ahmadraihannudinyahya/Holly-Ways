import DonorColomn from './common/DonorColomn';
import Progress from './common/Progress';
import './FundDetail.css'

function FundDetail(props){
  const {handleTogleDonateModal} = props;
  return (
    <div className="funddetail">
      <div>
        <div>
          <img src="/image/Rectangle7.png" alt="bocil" />
        </div>
        <div>
          <h2>The Strength of a People. Power of Community</h2>
          <div>
            <p>Rp. 25.000.000</p>
            <p>gathered from</p>
            <p>Rp. 200.000.000</p>
          </div>
          <Progress value='40'/>
          <div>
            <p><b>200</b> Donation</p>
            <p><b>150</b> More Day</p>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button onClick={handleTogleDonateModal}>Donate</button>
        </div>
      </div>
      <div className="donorfunds">
        <h2>List Donation (200)</h2>
        <div>
          <DonorColomn isAproved='true'/>
          <DonorColomn isAproved='true'/>
          <DonorColomn isAproved='true'/>
          <DonorColomn isAproved='true'/>
          <p>Load Mode</p>
        </div>
      </div>
    </div>
  )
}

export default FundDetail;