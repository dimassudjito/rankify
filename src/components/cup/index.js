import React, { useState } from 'react';
import Bracket from './Bracket'
import Debug from './Debug'

// hard-code data for testing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const cities = ["tokyo", "las vegas", "bali", "shanghai", "singapore", "vancouver", "paris", "taipei", "havana", "bangkok"]
const text_numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9"

const Cup = () => {
    const [items, setItems] = useState([]);
    const [survivors, setSurvivors] = useState([])
    const [bracket, setBracket] = useState([])

    const [index, setIndex] = useState(0);

    // array shuffle by daplie
    const shuffle = (arr) => {
        var currentIndex = arr.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = arr[currentIndex];
            arr[currentIndex] = arr[randomIndex];
            arr[randomIndex] = temporaryValue;
        }
        return arr;
    }

    /* main logic */
    const pushSurvivor = (item) => {
        // add item to survivors list
        setSurvivors(oldSurvivors => [...oldSurvivors, item]);
        // update index by 2 two move on to the next pair
        setIndex(index + 2);
    }

    const reset = () => {
        // check if a winner is selected
        if (survivors.length == 1) {
            alert("winner is selected: " + survivors[0])
        }
        // shuffle survivors and move them to items
        setItems(shuffle(survivors));
        // reset survivors and index
        setSurvivors([]);
        setIndex(0);
        // set brackets
        setBracket(oldBracket => [...oldBracket, survivors])
    }

    return (
        <div>
            {/* <Debug items={items} survivors={survivors}/> */}
            <div className="my-5">
                <label className="d-flex justify-content-center">
                    comma-separated options :
                <textarea className="mx-1" value={items} onChange={(e) => {
                        setItems(e.target.value.split(","))
                        setBracket([items])
                    }} />
                </label>
            </div>
            <div className="text-center">
                {items[index] != undefined ?
                <h1
                onClick={() => { pushSurvivor(items[index]) }}
                className="border rounded-pill border-white px-5 py-2 d-inline-flex"
                >
                    {items[index]}
                </h1>
                : ""}
                {items[index + 1] != undefined ?
                <div>
                    <h4>Vs.</h4>
                    <h1
                    onClick={() => { pushSurvivor(items[index + 1]) }}
                    className="border rounded-pill border-white px-5 py-2 d-inline-flex"
                    >
                        {items[index + 1]}
                    </h1>
                </div>
                : ""}
            </div>
            <div className="text-center my-2">
                <button className="btn btn-light" onClick={reset}>continue</button>
            </div>
            <Bracket bracket={bracket} />
        </div>
    );
}

export default Cup;