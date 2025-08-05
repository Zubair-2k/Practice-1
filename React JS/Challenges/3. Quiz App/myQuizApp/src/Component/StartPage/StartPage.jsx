import React from 'react'
import "./StartPage.css"
import { useState } from 'react'

const StartPage = () => {
    const [nameValue,setNameValue] = useState("")
    const [diffValue,setDiffValue] = useState("easy")
    const [categoryValue,setCategoryValue] = useState("1")


    const handleChange=(e)=>{
        setNameValue(e.target.value)
    }

    const handleDifficulty=(e)=>{
        setDiffValue(e.target.value)
    }

    const handleCategory=(e)=>{
        setCategoryValue(e.target.value)
    }

    console.log(nameValue)
    console.log(diffValue)
    console.log(categoryValue)


    const handleSubmitName = (e) =>{
        e.preventDefault()
    }


    // https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple


    return (
        <>
            <div className="QuizApp">

                <div className="startQuiz">

                    <div className="logoName">
                        <h6 className='logo1'>Quiz</h6>
                        <span className='logo2'>Play</span>    
                    </div>

                    <form action="" className='nameForm'>
                        
                        <div className="userName">
                            
                            <label htmlFor="">
                                Enter your name 
                            </label>
                            
                            <input type="text" className='nameInput' onChange={()=>handleChange(event)} value={nameValue}/>
                        
                        </div>

                        <div className="diffLevel">
                            
                            <label htmlFor="">
                                    Select Your Difficulty Level 
                            </label>
                            
                            <select className='diffOption' onChange={handleDifficulty}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        
                        </div>

                        <div className="category">
                            
                            <label htmlFor="">
                                    Select Your Category 
                            </label>
                            
                            <select className='categoryOption' onChange={handleCategory}>
                                <option value="1">Any Category</option>
                                <option value="2">General Knowledge</option>
                                <option value="3">Entertainment : Books</option>
                                <option value="4">Entertainment : Film</option>
                                <option value="5">Entertainment : Music</option>
                                <option value="6">Entertainment : Musicals And Theatres</option>
                                <option value="7">Entertainment : Television</option>
                                <option value="8">Entertainment : Video Games</option>
                                <option value="9">Entertainment : Board Games</option>
                                <option value="10">Science And Nature</option>
                                <option value="11">Science : Computers</option>
                                <option value="12">Science : Mathematics</option>
                                <option value="13">Mythology</option>
                                <option value="14">Sports</option>
                                <option value="15">Geography</option>
                                <option value="16">History</option>
                                <option value="17">Politics</option>
                                <option value="18">Art</option>
                                <option value="19">Celebrities</option>
                                <option value="20">Animals</option>
                                <option value="21">Vehicles</option>
                                <option value="22">Entertainment : Comics</option>
                                <option value="23">Science : Gadgets</option>
                                <option value="24">Entertainment : Japanese Anime And Manga</option>
                                <option value="25">Entertainment : Cartoon And Animations</option>
                            </select>
                        
                        </div>

                        <button className='submitName' onClick={handleSubmitName}>Start</button>
                    
                    </form>

                </div>


            </div>
        </>
    )
  
}

export default StartPage