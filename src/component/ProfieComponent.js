import DonorColomn from './common/DonorColomn'
import './ProfieComponent.css'

function ProfileComponent(props){
  console.log(props.donations);
  const donationsEll = props.donations.map(donation => <DonorColomn isOwner={true} {...donation} fullname = {donation.fundTitle}/>)
  if(props.profile){
    return (
      <div className="ProfieComponent">
        <div className="myprofile">
          <h2>My Profile</h2>
          <div>
            <div>
              <img src="/image/Rectangle12.png" alt="profile" />
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{props.profile.fullname}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{props.profile.email}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>083896833122</p>
              </div>
            </div>
          </div>
        </div>
        <div className="historydonation">
          <h2>History Donation</h2>
          <div>
            {donationsEll}
          </div>
        </div>
      </div>
    )
  }
  return <></>
}
export default ProfileComponent