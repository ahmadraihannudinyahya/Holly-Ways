import DonorColomn from './common/DonorColomn'
import './ProfieComponent.css'

function ProfileComponent(){
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
              <p>Andi</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>andigans@gmail.com</p>
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
          <DonorColomn  isOwner={true}/>
        </div>
      </div>
    </div>
  )
}
export default ProfileComponent