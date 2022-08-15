
import './styles/App.css';
 import { Route, Routes, useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import axios from 'axios';
 import { useEffect } from 'react';
import Header from './Header';
import Words from './Words';
import WordHistory from './WordHistory';
import RandomWords from './RandomWords';
// import Flashcard from './Flashcard';

// C:\Users\mekon\Desktop\wordsapp\src\components\styles




function App() {


const testing = ""

const [data, setData] = useState('');





  return (
    
    <div className="App">
   
     
    <h1>  {testing} </h1>
      <Header/>
      <RandomWords setData={setData}/>
      <Words data={data}/>
      <WordHistory/>
     
 

    </div>
  );
}

export default App;

