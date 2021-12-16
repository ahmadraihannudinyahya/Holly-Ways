import React from 'react';
import './Progress.css'

function Progress(props){
  const {value} = props;
  const width = `${value}%`
  return(
    <div className="progres-container">
      <div className="progres" style={{width}}></div>
    </div>
  )
}
export default Progress;