import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./styles/Words.css";
import RandomWords from "./RandomWords";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

const Words = ({ data }) => {
  // N.T.S: Data here is utilized as a prop - passed into a component - handled outside component and handed into component.

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
    // event.preventDefault()
    // setCurrentWord(data)  attempt #3424324- this line appears to serve no purpose. // test with Data and without data as argument- i think adding data did the trick
    console.log(`HandleSubmit Words: Data= ${data}`);
    console.log(apiResponse);
  };

  return (
    <div className="Words">
      1
      <div>
         {apiResponse?.map((content,index)=>
        <div className="cards" key={index}>


  {content.word}
  {content?.meanings?.[0]?.partOfSpeech}
  {content?.meanings?.[0]?.definitions?.[0]?.definition}
  {content?.meanings?.[0]?.synonyms?.[0]}
  
  
 
        </div>
        
        )} 

      </div>
      <button className="WordButton" onClick={handleSubmit}>
        {" "}
        Word button!
      </button>
    </div>
  );
};

export default Words;
