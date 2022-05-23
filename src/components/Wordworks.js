// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import './styles/Words.css'
// import RandomWords from "./RandomWords";


// const Words = ({data})=>{ // N.T.S: Data here is utilized as a prop - passed into a component - handled outside component and handed into component.

//    const testing = "Words is up!"

// //     const [wordData, setWordData]= useState({
// // // phonetic: "",
// // // meanings:[{
// // //    partOfSpeech: "",
// // //   definition: "",     //[{definition: ""}],
// // //   synonyms: "",
// // //   antonyms: "",
// // //    examples:""
// // // }]
// //    })


//    const [apiResponse, setapiResponse] = useState({})

//    const [currentWord, setCurrentWord] = useState(data)



//    const fetchData = async ()=>{
     
     
//         const response =  await axios.get(` https://api.dictionaryapi.dev/api/v2/entries/en/${data}`) // Note to future self: current word will be randomly generated from heroku API of random words 
     
//         console.log(`Logging Words - response:`)
//        console.log(response)
//         console.log(`Word Test- logging "data": ${data}`)
//        // If $data exists in dictionary API proceed to set api response to response.data if not, fetch another word $data and try again.    
//         console.log(`response.data:`)
//         console.log(response.data) 

     
//         setapiResponse(response.data)
     
//    }

// useEffect(()=>{

//  fetchData()
//  //  setCurrentWord()
  
// },[data]) // with state dependency [data] - it rendered the definition and word but almost as though it was in a loop. 

// // OPTION: fetchData() - merge w/ fetch random word and move into handler function in app.js
// //Handler 

// const handleSubmit = (event) =>{
//  fetchData()
//  event.preventDefault()
//  // setCurrentWord(data)  attempt #3424324- this line appears to serve no purpose. // test with Data and without data as argument- i think adding data did the trick
//  console.log(`HandleSubmit Words: Data= ${data}`)
//  console.log(apiResponse)
 
 

 
 
// }



// return (
//    <div className="Words">
//     1
//     <div className="DefinitionDisplay"> 
//     {/* {[data]}  */} 
    

//     </div>

//     <div className="Word">
       
     
// {/* 
//      {Object.keys(currentWord).length > 0 ? definition.currentWord : null}
//      <p>
//        Definition: {
//          Object.keys(currentWord).length > 0 ?
//            currentWord.definition.map((definition) => {
//              return (
//                <>
//                  {wordData.definition.currentWord}, 
//                </>
//              )
//            })
//            : null
//        }
//      </p>


// */}


       
    
   
//     </div>
    
//      <button className="WordButton" onClick={handleSubmit}> Word button!</button> 
        
    
//    </div>
//  )
// }

// export default Words