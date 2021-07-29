import React from 'react'
import '../Quiz.css'
import * as FaIcons from 'react-icons/fa'

const Result = ({  onReset, onQuit})=> {
    
   

    return (
        <div className="result_box">
        <div className="icon">
     <FaIcons.FaCrown/>
        </div>
        <div className="complete_text">You're Completed the Quiz!</div>
        <div className="score_text">
           
        </div>
        <div className="buttons">
            <button className="restart" onClick={onReset}>Restart</button>
            <button className="quit" onClick={onQuit}>Quit Quiz</button>
        </div>
    </div>
        
    )
}

export default Result;