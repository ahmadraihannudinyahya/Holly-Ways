import { useEffect, useState } from 'react';
import './FormRaiseFund.css'

function FormRaiseFund(props){
  const {postFund } = props;
  const [state, setState] = useState({
    isLoading : false, 
    description : '',
    title : '',
    goal : '',
  });
  const [alert , setStateAlert] = useState(null);
  const setAlert = (message) =>{
    setStateAlert(message);
  }
  const handleChange = (e) =>{
    setState({...state, [e.target.name] : e.target.value});
  }
  useEffect(()=>{
    if(props.fund){
      setState({...state,
        description : props.fund.description, 
        title : props.fund.title,
        goal : props.fund.goal
      });
    }
  }, [props, alert])
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
    if(fileSelector.files[0]){
      formData.append('thumbnail', fileSelector.files[0]);
    }
    setState({...state, isLoading : true});
    await postFund(formData, setAlert);
    setState({...state, isLoading : false});
  }
  return(
    <form action="" className="formraisefund">
      <h2>Make Raise Fund</h2>
      {alert? <span>{alert}</span>: <></>}
      <input type="text" placeholder="Title" name='title' onChange ={handleChange} value = {state.title}/>
      <label htmlFor="thumbnail">Attache Thumbnail</label>
      <input type="file" id="thumbnail" style={{display:"none"}}/>
      <input type="number" placeholder="Goals Donations" name = 'goal' onChange = {handleChange} value = {state.goal}/>
      <textarea placeholder="Description" name = 'description'onChange ={handleChange} value = {state.description}></textarea>
      <div>
        <button onClick = {handleSubmitClick} disabled={state.isLoading}>Public Fundraising</button>
      </div>
    </form>
  )
}

export default FormRaiseFund;