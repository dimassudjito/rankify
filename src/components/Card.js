import React from 'react';

const Card = ({item}) => {

    return (
        <div className="d-flex justify-content-center">
            <div className="card m-5" style={{width: "18rem", color:"black"}}>
                <div className="card-body">
                    <h1 className="card-title text-center">{item}</h1>
                </div>
            </div>
        </div>
    );
}

export default Card;