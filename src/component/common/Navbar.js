import { useHistory } from 'react-router';
import './Navbar.css'

function Navbar(props){
  const {handleTogleModalLogin, handleTogleModalRegister, isLogin} = props;
  const history = useHistory();
  const handleIconClick = (e)=>{
    e.preventDefault();
    history.push('/')
  }
  return (
  <div className="navbar">
      <img src="/Icon.png" alt="icon" onClick = {handleIconClick}/>
      <div>
        {isLogin? <img src="/Icon.png" alt="avatar" />: <><button id="login" onClick={handleTogleModalLogin}>Login</button><button id="register" onClick={handleTogleModalRegister}>Register</button> </>}
      </div>
    </div>
  )
}

export default Navbar