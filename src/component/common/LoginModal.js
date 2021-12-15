import './LoginModal.css'

function LoginModal(){
  return (
    <div className="modalBackdrop">
      <div className="modal">
        <form action="">
          <h1>Login</h1>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password"/>
          <button>Login</button>
          <p>Don't have an account ? Klik Here</p>
        </form>
      </div>
    </div>
  )
}
export default LoginModal;