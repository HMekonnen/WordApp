import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import "./styles/Words.css";
import RandomWords from "./RandomWords";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import Flashcard from "./Flashcard";
import './styles/App.css';

const Words = ({ data }) => {
  // N.T.S: "data" here is utilized as a prop - passed into Words component - handled outside component then handed into component.

  useEffect(() => {
    fetchData();
  }, [data]);

  const testing = "Words is up!";

  const [apiResponse, setapiResponse] = useState([]);

  const fetchData = async () => {
    let temp = []
    for (let i = 0; i < data.length; i++) {
     
      try {
        const response = await axios.get(
          ` https://api.dictionaryapi.dev/api/v2/entries/en/${data[i]}`
        );
        const deets = response.data;

        console.log(`Logging Words - response:`);
        console.log(response);
        console.log(`Word Test- logging "data": ${data[i]}`);
        console.log(`response.data AKA wordie:`);
        console.log(deets);

temp.push(deets[0])

          
      
      } catch (e) {

        console.log(e);

      }
     
      
    

      
    }
    console.log("view Temp:")
    console.log(temp)
       setapiResponse(temp);

  };

  const handleSubmit = (event) => {
    fetchData();
   
    console.log(`HandleSubmit Words: Data= ${data}`);
    console.log(apiResponse);
  };

  return (
    <div >
      
      <div className="Words">
         {apiResponse?.map((content,index)=>
        <div className="Cards" key={index}>


 <h4><strong><ol> {content.word} </ol></strong></h4><br/>
 <div>
  {content?.meanings?.[0]?.partOfSpeech} <br/>
  {content?.meanings?.[0]?.definitions?.[0]?.definition}
  {/* {content?.meanings?.[0]?.synonyms?.[0]}  - NB commented out for conciseness, may uncomment later.  */}
  </div>
  
 
        </div>
        
        )} 

      </div>
    
    </div>
  );
};

export default Words;
