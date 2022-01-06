import { useState } from 'react';
import './FormRaiseFund.css'

function FormRaiseFund(props){
  const {postFund } = props;
  const [state, setState] = useState({
    alert : null,
    isLoading : false  
  });
  const setAlert = (message) =>{
    setState({alert : message});
  }
  const handleSubmitClick = async (e) =>{
    e.preventDefault()
    const descriptionEll = e.target.parentElement.previousElementSibling;
    const goalDonationEll = descriptionEll.previousElementSibling;
    const fileSelector = goalDonationEll.previousElementSibling;
    const labelEll = fileSelector.previousElementSibling;
    const titleEll = labelEll.previousElementSibling;
    const formData = new FormData();
    formData.set('title', titleEll.value);
    formData.set('description', descriptionEll.value);
    formData.set('goal', goalDonationEll.value);
    formData.append('thumbnail', fileSelector.files[0]);
    setState({isLoading : true});
    await postFund(formData, setAlert);
    setState({isLoading : false});
  }
  return(
    <form action="" className="formraisefund">
      <h2>Make Raise Fund</h2>
      {state.alert? <span>{state.alert}</span>: <></>}
      <input type="text" placeholder="Title" value = {props.fund?props.fund.title:null}/>
      <label htmlFor="thumbnail">Attache Thumbnail</label>
      <input type="file" id="thumbnail" style={{display:"none"}}/>
      <input type="number" placeholder="Goals Donations" value = {props.fund?props.fund.goal:null}/>
      <textarea placeholder="Description" value = {props.fund?props.fund.description:null}></textarea>
      <div>
        <button onClick = {handleSubmitClick} disabled={state.isLoading}>Public Fundraising</button>
      </div>
    </form>
  )
}

export default FormRaiseFund;