import { useHistory } from 'react-router';
import './DropDown.css';

function DropDown(props){
  const {handleMoveToProfilePage, handleMoveToFundPage, togleDropdown, setIsLogin} = props;
  const history = useHistory();
  const handleProfileClick =(e)=>{
    e.preventDefault();
    handleMoveToProfilePage();
    togleDropdown();
  }
  const handleRaiseFundClick = (e) =>{
    e.preventDefault();
    handleMoveToFundPage();
    togleDropdown();
  }
  const handleLogoutClick = e =>{
    e.preventDefault();
    localStorage.removeItem('token');
    togleDropdown();
    setIsLogin();
    history.push('/')
  }
  return(
    <div className="dropdown-menu">
      <button onClick={handleProfileClick}><img src='/image/UserIcon.png'/>Profile</button>
      <button onClick={handleRaiseFundClick}><img src='/image/FundIcon.png'/>Raise Fund</button>
      <hr />
      <button onClick = {handleLogoutClick}><img src='/image/LogoutIcon.png'/>Logout</button>
    </div>
  )
}
export default DropDown;