import './FormRaiseFund.css'

function FormRaiseFund(){
  return(
    <form action="" className="formraisefund">
      <h2>Make Raise Fund</h2>

      <input type="text" placeholder="Title"/>
      <label htmlFor="thumbnail">Attache Thumbnail</label>
      <input type="file" id="thumbnail" style={{display:"none"}}/>
      <input type="number" placeholder="Goals Donations"/>
      <textarea placeholder="Description"></textarea>
      <div>
        <button>Public Fundraising</button>
      </div>
    </form>
  )
}

export default FormRaiseFund;