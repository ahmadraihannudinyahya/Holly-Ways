import './DropDown.css'

function DropDown(props){
  const {handleMoveToProfilePage, handleMoveToFundPage, togleDropdown, setIsLogin} = props;
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