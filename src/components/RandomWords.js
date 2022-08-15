import axios from "axios";
import React, {useEffect, useState} from "react";

 import { useNavigate } from "react-router-dom";
// import './styles/RandomWords.css'


const RandomWords = ({setData})=>{

  const[apiResponse, setApiResponse]= useState([])

  const[currentRandomWord, setCurrentRandomWord]= useState("")

  const fetchRandomWord= async ()=>{
    const response =  await axios.get('https://random-word-api.herokuapp.com/word?number=20')
    console.log(`Random Words, log response:`)
    console.log(response)

   
if (response.data)

    setApiResponse(response.data)
  
}  

const myData = apiResponse


  useEffect(()=>{
    fetchRandomWord()
    setData(myData)

    
}, [currentRandomWord])



const handleSubmit = (event) =>{
  setCurrentRandomWord(myData)
  console.log(myData)
  
}


    const testing = "Random Word!"

return (
    <div className="RandomWords">


<button className="RandButton" onClick={handleSubmit}>Click to Generate a Random Word + Definition!</button>
    
    </div>
  )
}

export default RandomWords