import React from 'react'
import "./QuizPage.css"
import { useState } from 'react'

const QuizApp = () => {
    return(
        <>
            <div className="quizPage">
                
                <button className='prevBtn'>Previous</button>

                <div className="score">7/10</div>

                <div className="questionCard">
                    <div className="timerCount">
                        30
                    </div>
    
                    <div className="question">
                        <h5>In what year did the United States host the FIFA World Cup for the first time ?</h5>
                    </div>
                </div>
            
                <div className="options">
                    <div className="option">
                        1986
                    </div>
                    <div className="option">
                        1994
                    </div>
                    <div className="option">
                        2002
                    </div>
                    <div className="option">
                        2010
                    </div>
                </div>

                <button className='nextBtn'>Next</button>

            </div>
        </>
    )
}

export default QuizApp