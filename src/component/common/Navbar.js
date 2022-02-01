import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import DropDown from './DropDown';
import './Navbar.css'

function Navbar(props){
  const {modalHandle,  isLogin, setIsLogin} = props;
  const [profileImage, setProfileImage] = useState('/image/profile.png');
  const [state, setState] = useState({
    dropdownStatus:false,
  })

  const history = useHistory();
  useEffect(()=>{
    if(isLogin){
      getProfileImage();
    }else{
      setProfileImage('/image/profile.png');
    }
  }, [isLogin]);

  const getProfileImage = async () => {
    try {
      const response = await props.getProfile();
      if(response.data.data.user.image){
        setProfileImage(response.data.data.user.image);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleIconClick = (e)=>{
    e.preventDefault();
    history.push('/')
    setState(prevState => ({dropdownStatus : false}))
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
        {isLogin? <img src={profileImage} alt="avatar" onClick={togleDropdown}/>: <><button id="login" onClick={handleTogleModalLogin}>Login</button><button id="register" onClick={handleTogleModalRegister}>Register</button> </>}
        {state.dropdownStatus?<DropDown handleMoveToProfilePage={handleMoveToProfilePage} handleMoveToFundPage={handleMoveToFundPage} togleDropdown = {togleDropdown} setIsLogin = {setIsLogin}/>:<></>}
      </div>
    </div>
  )
}

export default Navbar