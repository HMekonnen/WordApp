
import './styles/App.css';
 import { Route, Routes, useNavigate } from 'react-router-dom';
 import { useState } from 'react';
 import axios from 'axios';
 import { useEffect } from 'react';
import Header from './Header';
import Words from './Words';
import WordHistory from './WordHistory';
import RandomWords from './RandomWords';






function App() {
//   const navigate = useNavigate()
// const [currentWords, setCurrentWords] = useState({})

const testing = ""

const [data, setData] = useState('')

// const fetchIndivData = async(url)=>{
//   const response = await axios.get(url)
//   setCurrentWords(response.data)
//   navigate('/play')
// }


  return (
    <div className="App">
   
     
    <h1>  {testing} </h1>
      <Header/>
      <RandomWords setData={setData}/>
      <Words data={data}/>
      <WordHistory/>
     
 {/* <Routes>

<Route path ="/" element={<App fetch={fetchIndivData}/>}/> 


<Route path ="/play" element={<Words current={currentWords}/>}/> 

</Routes>  */}

    </div>
  );
}

export default App;
