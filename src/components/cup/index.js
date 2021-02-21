import React, {useState} from 'react';
import Bracket from './Bracket'
import Debug from './Debug'

// hard-code data for testing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cities = ["tokyo", "las vegas", "bali", "shanghai", "singapore", "vancouver", "paris", "taipei", "havana", "bangkok"]
const text_numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9"

const Cup = () => {
    const [items, setItems] = useState(cities);
    const [survivors, setSurvivors] = useState([])
    const [bracket, setBracket] = useState([items])

    const [index, setIndex] = useState(0);

    /* main logic */
    const pushSurvivor = (item) => {
        // add item to survivors list
        setSurvivors(oldSurvivors => [...oldSurvivors, item]);
        // update index by 2 two move on to the next pair
        setIndex(index+2);
    }

    const reset  = () => {
        // check if a winner is selected
        if (survivors.length == 1){
            alert("winner is selected: "+survivors[0])
        }
        // move survivors to items
        setItems(survivors);
        // reset survivors and index
        setSurvivors([]);
        setIndex(0);
        // set brackets
        setBracket(oldBracket => [...oldBracket, survivors])
        console.log(bracket)
    }

    return (
        <div>
            {/* <Debug items={items} survivors={survivors}/> */}
            <div className="text-center">
                <h1 
                    onClick={()=>{pushSurvivor(items[index])}}
                    className="border border-white px-5 py-2 d-inline-flex"
                >
                    {items[index]}
                </h1>
                <h4>Vs.</h4>
                <h1 
                    onClick={()=>{pushSurvivor(items[index+1])}}
                    className="border border-white px-5 py-2 d-inline-flex"
                >
                    {items[index+1]}
                </h1>
            </div>
            <div className="text-center">
                <button className="btn btn-light" onClick={reset}>continue</button>
            </div>
            <Bracket bracket={bracket}/>
        </div>
    );
}

export default Cup;