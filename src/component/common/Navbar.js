import { useState } from 'react';
import { useHistory } from 'react-router';
import DropDown from './DropDown';
import './Navbar.css'

function Navbar(props){
  const {modalHandle,  isLogin, setIsLogin} = props;

  const [state, setState] = useState({
    dropdownStatus:false,
  })

  const history = useHistory();

  const handleIconClick = (e)=>{
    e.preventDefault();
    history.push('/')
  }
  const handleMoveToProfilePage=()=>{
    history.push('/profile')
  }
  const handleMoveToFundPage = ()=>{
    history.push('/fund');
  }
  const togleDropdown=()=>{
    setState(prevState => ({dropdownStatus : !prevState.dropdownStatus}))
  }
  const handleTogleModalLogin = e =>{
    e.preventDefault();
    modalHandle('loginModal');
  }
  const handleTogleModalRegister = e =>{
    e.preventDefault();
    modalHandle('registerModal')
  }
  return (
    <div className="navbar">
      <img src="/Icon.png" alt="icon" onClick = {handleIconClick}/>
      <div>
        {isLogin? <img src="/image/Rectangle12.png" alt="avatar" onClick={togleDropdown}/>: <><button id="login" onClick={handleTogleModalLogin}>Login</button><button id="register" onClick={handleTogleModalRegister}>Register</button> </>}
        {state.dropdownStatus?<DropDown handleMoveToProfilePage={handleMoveToProfilePage} handleMoveToFundPage={handleMoveToFundPage} togleDropdown = {togleDropdown} setIsLogin = {setIsLogin}/>:<></>}
      </div>
    </div>
  )
}

export default Navbar