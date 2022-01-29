import DonorColomn from './common/DonorColomn'
import './ProfieComponent.css'

function ProfileComponent({donations, profile}){
  const donationsEll = donations.map(donation => <DonorColomn key ={donation.id}isOwner={true} {...donation} fullname = {donation.fundTitle}/>)
  if(profile){
    return (
      <div className="ProfieComponent">
        <div className="myprofile">
          <h2>My Profile</h2>
          <div>
            <div>
              <img src={profile.image?profile.image:"/image/profile.png"} alt="profile" />
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{profile.fullname}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{profile.email}</p>
              </div>
              <div>
                <h4>Phone</h4>
                <p>{profile.phone?profile.phone:'-'}</p>
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