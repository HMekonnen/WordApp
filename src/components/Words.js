 import React, {useEffect, useState} from "react";
 import axios from "axios";
import { useNavigate } from "react-router-dom";
import './styles/Words.css'
import RandomWords from "./RandomWords";


const Words = ({data})=>{ // N.T.S: Data here is utilized as a prop - passed into a component - handled outside component and handed into component.

  useEffect(()=>{

    fetchData()
  
     
   },[data]) 
   

 


    const testing = "Words is up!"




    const [apiResponse, setapiResponse] = useState({})

    // const [details, setDetails]= useState({apiResponse})



  
    

      const fetchData = async ()=>{
      
      
        const response =  await axios.get(` https://api.dictionaryapi.dev/api/v2/entries/en/${data}`)      
       const deets = response.data
        console.log(`Logging Words - response:`)
       console.log(response)
        console.log(`Word Test- logging "data": ${data}`)
         console.log(`response.data AKA wordie:`)
        console.log(deets) 

        

       
     
        setapiResponse(deets)
     
   }



     


 
const handleSubmit = (event) =>{
  fetchData()
  event.preventDefault()
  // setCurrentWord(data)  attempt #3424324- this line appears to serve no purpose. // test with Data and without data as argument- i think adding data did the trick
  console.log(`HandleSubmit Words: Data= ${data}`)
  console.log(apiResponse)
  
  

  
  
}



return (
    <div className="Words">
     1 
     <div className="DefinitionDisplay"> 
      OOOFFF
     
      


     
 
     </div>
     

     <div className="Word">
        
      
    
     </div>
     
      <button className="WordButton" onClick={handleSubmit}> Word button!</button> 
         
     
    </div>
  )
}

export default Words