 import React, {useEffect, useState} from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles/Words.css'
import RandomWords from "./RandomWords";


const Words = ({data})=>{

    const testing = "Words is up!"

    const [wordData, setWordData]= useState({
// phonetic: "",
//meanings:[{
    // partOfSpeech: "",
  definition: "",     //[{definition: ""}],
  // synonyms: ""
  // antonyms: [""],
  // examples:""
//}]
    })


    const [apiResponse, setapiResponse] = useState({})

    const [currentWord, setCurrentWord] = useState("Hello")



    const fetchData = async ()=>{
      
      
         const response =  await axios.get(` https://api.dictionaryapi.dev/api/v2/entries/en/${data}`) // Note to future self: current word will be randomly generated from heroku API of random words 
         console.log(`Word Test: ${data}`)
           
         console.log(response.data)

      
         setapiResponse(response.data)
    }

 useEffect(()=>{

  fetchData()
  //  setCurrentWord()
   
 },[])

 // OPTION: fetchData() - merge w/ fetch random word and move into handler function in app.js
 //Handler 
 
const handleSubmit = (event) =>{
  fetchData()
  event.preventDefault()
  setCurrentWord()
  console.log(data)
  console.log(currentWord)
  

  
  
}



return (
    <div className="Words">
     1
     <div className="DefinitionDisplay"> 
     {/* {[data]}  */}
     </div>

     <div className="Word">
        
      
{/* 
      {Object.keys(currentWord).length > 0 ? definition.currentWord : null}
      <p>
        Definition: {
          Object.keys(currentWord).length > 0 ?
            currentWord.definition.map((definition) => {
              return (
                <>
                  {wordData.definition.currentWord}, 
                </>
              )
            })
            : null
        }
      </p>


 */}


        
     
    
     </div>
     
      <button className="WordButton" onClick={handleSubmit}> Word button!</button> 
         
     
    </div>
  )
}

export default Words