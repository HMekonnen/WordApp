import axios from "axios";
import React, {useEffect, useState} from "react";

 import { useNavigate } from "react-router-dom";
import './styles/RandomWords.css'

// Initial purpose of this component is invalid - will repurpose to use as heroku random word component. 
const RandomWords = ({setData})=>{

  const[apiResponse, setApiResponse]= useState({})

  const[currentRandomWord, setCurrentRandomWord]= useState("")

  const fetchRandomWord= async ()=>{
    const response =  await axios.get('https://random-word-api.herokuapp.com/word')
    console.log(`Random Words, log response:`)
    console.log(response)

    // Need to add a condition here to check "word" w/ dictionary API, if found, setAPIResponse(response.data),
    // else find another word / restart the function <- how to get it to refresh and find another word - word api is an array, run with that
 

    //Take 1: Once word is found, set word to myData, then invoke setData(myData), in words.js - if myData = found/True->
    //set apiresponse in randomwords.js to response.data, if false, call word API again to render a new word. 

if (response.data)

 // response -> sent to words.js -> if true, set api response to response.data if false, call get request again. 
    setApiResponse(response.data)
  // console.log(`Response Data ${response.data}`)
 // useless console.log(` current rand word: ${currentRandomWord}`)
  
}  

const myData = apiResponse
//  apiResponse


  useEffect(()=>{
    fetchRandomWord()
    setData(myData)

    
}, [currentRandomWord])

// ^^ fetchRandomWord() // recommended to merge w/ words use effect and move into app.js by Jade outside of useEffect and move into handler function so its triggered by the button


const handleSubmit = (event) =>{
  // fetchRandomWord() Works fine without fetc randomWord 
  //  event.preventDefault()         
  setCurrentRandomWord(myData)
  console.log(myData)
  
}


    const testing = "Random Word!"

return (
    <div className="RandomWords">
<h1> Random Word!</h1>

     <div className="RWord">

<h3>Test RWord</h3>
    
     </div>
     
<button className="RandButton" onClick={handleSubmit}>Click to Generate a Random Word!</button>
    
    </div>
  )
}

export default RandomWords