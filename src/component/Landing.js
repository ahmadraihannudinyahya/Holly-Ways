import './Landing.css'

function Landing(props){
  const {handleShowModal} = props
  return (
    <div className="landing">
      <div>
        <div>
          <h1>While you are still standing, try to reach out to the people who are falling.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <button id='login' onClick={handleShowModal}>Donate Now</button>
        </div>
        <div>
          <img src="/image/13405547181.png" alt="banjir" />
        </div>
      </div>
      <div>
        <div>
          <img src="/image/13405547182.png" alt="kebakaran" />
        </div>
        <div>  
          <h1>Your donation is very helpful for people affected by forest fires in Kalimantan.</h1>
          <div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing;