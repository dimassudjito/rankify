import React from 'react';

const Card = ({item}) => {

    return (
        <div className="d-flex justify-content-center">
            <div 
                className="card m-5 border border-white border-5 bg-transparent" 
                style={{
                    width: "18rem",
                }}
            >
                <div className="card-body">
                    <h1 className="card-title text-center">{item}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;