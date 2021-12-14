import './Navbar.css'

function Navbar(){
  return (
    <div className="navbar">
      <img src="/Icon.png" alt="icon" />
      <div>
        <button id="login">Login</button>
        <button id="register">Register</button>
      </div>
    </div>
  )
}

export default Navbar