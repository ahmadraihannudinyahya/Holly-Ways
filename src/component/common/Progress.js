import React from 'react';
import './Progress.css'

class Progress extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="progres-container">
        <div className="progres" style={{width : '50%'}}></div>
      </div>
    )
  }
}
export default Progress;