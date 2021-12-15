import './RegisterModal.css'

function RegisterModal(){
  return(
    <div className="modalBackdrop">
      <div className="modal">
        <form action="">
          <h1>Register</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password"/>
          <input type="text" placeholder="Fullname"/>
          <button>Register</button>
          <p>Already have an account ? Klik Here</p>
        </form>
      </div>
    </div>
  )
}
export default RegisterModal;