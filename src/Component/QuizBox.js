import React, { useState, useEffect, useRef } from 'react'
import '../Quiz.css'
import Time from './Time'
import Line from './Line'




const QuizBox = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) => {
   
    const [selected, setSelected] = useState('');
    // const [error, seterror] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);


    const changeHandler = (e) => {
        setSelected(e.target.value);
    }
    const nextClickHandler = (e) => {
        if (selected === '') {

        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
           onSetStep(4);
        }
               
    }




    return (
        <div className="quiz_box">
            <header>
                <div className="title">Awesome Quiz Application</div>
                <div className="timer">
                    <div className="time_text">Time Left</div>
                    <div className="timer_sec" ><Time /></div>
                </div>
                <div className="time_line"><Line /></div>
            </header>
            <section>
            <div className="que_text">
                        <span>
                        {data.question}
                        </span>
                    </div>

                    <div className="option_list" ref={radiosWrapper}>
                    <div className="option">
                  
             {data.choices.map((choice, i) => (
              <label className="radio has-background-light" key={i}>
                <input type="radio" name="answer" value={choice} onChange={changeHandler} />
               
                {choice}
              </label>
            ))}
          </div>
          </div>
            </section>
            {/* Quiz bos Footer */}
            <footer>
                <div className="total_que">
                    {/* <span><p>2</p>Of<p>5</p>Questions</span> */}
                </div>
                <button className="next_btn" onClick={nextClickHandler}>Next Que</button>
            </footer>

        </div>
    )
}

export default QuizBox;