import React from 'react';

const Bracket = ({ bracket }) => {
    return (
        <div className="row">
            {bracket.map((list)=>{
                return (
                    <div className="col">
                        {list.map((item)=>{
                            return <p>{item}</p>
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Bracket;