import React, { useState } from "react";
import './Search.css'
const Search = ({inputURL}) => {
    const [URL, setURL] = useState('');
    const searchTextHandeler=(val)=>{
        setURL(val)
    }
    return (
        <div className="search-container">
            <form onSubmit={(event) => {event.preventDefault();inputURL(URL)}}>

                <input
                    type="text"
                    placeholder="Type or paste link/URL"
                    value={URL}
                    onChange={(e) => searchTextHandeler(e.target.value)}
                    className="input-field"
                />
                {(URL===undefined||URL==='')?'':<button type="submit" className="download-button" >Download</button>}
            </form>
        </div>
        
    );
}

export default Search;
