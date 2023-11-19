import { useState } from 'react';
import './App.css';
import Search from './component/Search';
function App() {
  const [searchURL,setSearchURL]=useState('')

  return (
    <div className="App">
      <h1><i class="fa fa-youtube-play" aria-hidden="true" style={{color:'red'}}></i> <i class="fa fa-facebook-official" aria-hidden="true" style={{color:'#4267B2'}}></i> VIDEO DOWNLOADER</h1>
      <Search inputURL={(val)=>setSearchURL(val)}/>
      {
        (searchURL===undefined || searchURL === "")?<h2 style={{color:"GrayText"}}><i class="fa fa-exclamation-circle" aria-hidden="true"></i>{"Type or paste link/URL "}</h2>:<iframe id="widgetApi" title='download box' width="100%" height="100%" src={`https://api.vevioz.com/apis/widgetv2?url=${searchURL}`} allowtransparency="true" ></iframe>
      }
     <div>
      <h4>Designed and developed by <br/><a href="https://knowaboutayan.000webhostapp.com/" target='_blank'>Creationology</a></h4>
     </div>
     </div>
  );
}

export default App;
