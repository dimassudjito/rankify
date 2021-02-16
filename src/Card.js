import React from 'react';

const Card = ({item}) => {

    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h1 className="card-title">{item}</h1>
            </div>
        </div>
    );
}

export default Card;