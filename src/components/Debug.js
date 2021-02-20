import React from 'react'

const Debug = ({pivot, items, better, worse}) => {
    return (
        <div>
            <h1>Debug</h1>
            <div className="row">
            <div className="col">
                <h1>Main</h1>
                <h3>Pivot: {pivot}</h3>
                {items.map((item)=>{
                    return <p>{item}</p>
                })}
            </div>
            <div className="col">
                <h1>Better</h1>
                {better.map((item)=>{
                return <p>{item}</p>
                })}
            </div>
            <div className="col">
                <h1>Worse</h1>
                {worse.map((item)=>{
                return <p>{item}</p>
                })}
            </div>
        </div>
        <hr/>
        </div>
    );
}

export default Debug;