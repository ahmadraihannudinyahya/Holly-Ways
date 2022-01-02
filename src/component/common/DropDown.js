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
      <button onClick={handleProfileClick}>Profile</button>
      <button onClick={handleRaiseFundClick}>Raise Fund</button>
      <hr />
      <button onClick = {handleLogoutClick}>Logout</button>
    </div>
  )
}
export default DropDown;