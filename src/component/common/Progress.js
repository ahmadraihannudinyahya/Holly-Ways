import React from 'react';
import './Progress.css'

function Progress(props){
  const value = props.value > 100?100 :props.value;
  const width = `${value}%`
  return(
    <div className="progres-container">
      <div className="progres" style={{width}}></div>
    </div>
  )
}
export default Progress;