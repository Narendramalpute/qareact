import React from 'react'
import '../Quiz.css'

const Start = ({onQuizStart})=>{
 return(
 
  <div className="start_btn">
 <button onClick={onQuizStart}>Start Quiz</button>
      </div>

)
}

export default Start;