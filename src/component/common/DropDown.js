import './DropDown.css'

function DropDown(props){
  const {handleMoveToProfilePage, handleMoveToFundPage} = props;
  const handleProfileClick =(e)=>{
    e.preventDefault();
    handleMoveToProfilePage();
  }
  const handleRaiseFundClick = (e) =>{
    e.preventDefault();
    handleMoveToFundPage();
  }
  return(
    <div className="dropdown-menu">
      <button onClick={handleProfileClick}>Profile</button>
      <button onClick={handleRaiseFundClick}>Raise Fund</button>
      <hr />
      <button>Logout</button>
    </div>
  )
}
export default DropDown;