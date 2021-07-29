import React from 'react'
import '../Quiz.css'

const Instruction = ({onStart,onQuit})=>{
 return(
 
    <div className="info_box">
    <div className="info_title">
        <span>Some Rule of this Quiz.</span>
    </div>
    <div className="info_list">
        <div className="info">
        1. You will have only <span>20 Seconds </span>Per each question.
        </div>
        <div className="info">
           2. You can't select any option once time goes off.
        </div>
        <div className="info">
          3.  You can't exit from the quiz while you're Playing.
        </div>
        <div className="info">
           4. You'll get points on the basic on your correct answers.
        </div>
        
    </div>
    <div className="buttons">
        <button className="quit" onClick={onQuit} >Exit Quiz</button>
        <button className="restart" onClick={onStart}>Continue</button>
    </div>
</div>


)
}

export default Instruction;