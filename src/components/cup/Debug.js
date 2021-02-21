import React from 'react';

const Debug = ({items, survivors}) => {
    return (
        <div className="row">
                <div className="col">
                {/* all participant */}
                {items.map((item)=><p>{item}</p>)}
                </div>
                <div className="col">
                {/* all participant */}
                {survivors.map((item)=><p>{item}</p>)}
                </div>
                <hr/>
        </div>
    );
}

export default Debug;