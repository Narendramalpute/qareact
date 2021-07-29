import React, { useState, useEffect } from 'react'
import '../Home.css'
import Start from '../Component/Start';
import Instruction from '../Component/Instruction';
import QuizBox from '../Component/QuizBox';
import quizData from '../data/quiz.json';
import Result from '../Component/Result'
import Modal from '../Component/Modal'
import Header from '../Component/Header'

let interval;

const Quiz = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        if (step === 4) {
            clearInterval(interval);
        }
    })


    const quizStartHandler = () => {
        setStep(2);

    }
    const quizStart = () => {
        setStep(3);

    }
    const quizClose = () => {
        setStep(1);
    }
    const startAgain = () => {
        setStep(2);
    }
    const closeAll = () => {
        setStep(1);
    }

    return (
        <>
            <div>
                 <Header/>
            
            </div>
            <div className="quiz">
                {step === 1 && <  Start onQuizStart={quizStartHandler} />}
                {step === 2 && <Instruction onStart={quizStart} onQuit={quizClose} />}
                {step === 3 && <QuizBox
                    data={quizData.data[activeQuestion]}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />}
                {step === 4 && <Result results={answers} onReset={startAgain} onQuit={closeAll}

                />}

                {showModal && <Modal
                    onClose={() => setShowModal(false)}
                    results={answers}
                    data={quizData.data}
                />}
            </div>
        </>
    )
}
export default Quiz;