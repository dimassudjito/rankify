import React from 'react';

const Bracket = ({ bracket }) => {
    return (
        <div className="row my-3 align-items-center">
            {bracket.map((list)=>{
                return (
                    <div className="col">
                        {list.map((item, index)=>{
                            return (
                            <div>
                                {index%2 == 0 ?
                                <div className="my-5">
                                    <div className="">
                                    <p className="border border-white d-inline-flex py-1 px-5 m-0">{list[index]}</p>
                                    </div>
                                    {list[index+1] != undefined ?
                                    <div className="d-inline-flex px-5 text-center">|</div>
                                    : ""}
                                    <div>
                                        {list[index+1] !== undefined ?
                                        <p className="border border-white d-inline-flex py-1 px-5 m-0">{list[index+1]}</p> 
                                        : ""}
                                    </div>
                                </div>
                                : ""}
                            </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Bracket;