import './DropDown.css'

function DropDown(props){
  const {handleMoveToProfilePage} = props;
  const handleProfileClick =(e)=>{
    e.preventDefault();
    handleMoveToProfilePage();
  }
  return(
    <div className="dropdown-menu">
      <button onClick={handleProfileClick}>Profile</button>
      <button>Raise Fund</button>
      <hr />
      <button>Logout</button>
    </div>
  )
}
export default DropDown;