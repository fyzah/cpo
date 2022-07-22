import React from 'react';

export default function Search(props) {
    const { inputRef, setQuery } = props;
    return (
        <div className="input-group mb-3">
            <input ref={inputRef} type="text" className="form-control" placeholder="Search for..." onKeyDown={(e) => { if(e.key === 'Enter') { setQuery(e.target.value)}}} />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" 
                onClick={() => { setQuery(inputRef.current.value)}}>Go</button>
        </div>
    );
};