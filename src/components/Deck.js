import React, {useState} from 'react';

import Card from "./Card"
import Debug from './Debug'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
const cities = ["tokyo", "las vegas", "bali", "shanghai", "singapore", "vancouver", "paris", "taipei", "havana", "bangkok"]

const Deck = () => {
    const [items, setItems] = useState(cities);
    const [better, setBetter] = useState([]);
    const [worse, setWorse] = useState([]);
    
    const [num, setNum] = useState(3);
    const [pivot, setPivot] = useState("(click start)");
    const [index, setIndex] = useState(0);

    const randomIndex = () => {
        return Math.floor(Math.random()*items.length);
    }

    const numChange = (event) => {
        setNum(event.target.value);
    }

    /* main logic */
    const start = () => {
        //choose a pivot
        let temp_pivot = items[randomIndex()]
        setPivot(temp_pivot);
        // move pivot from items to better array
        setItems(items.filter((item)=>{
            return item !== temp_pivot;
        }))
        setBetter(oldBetter => [...oldBetter, temp_pivot])
    }

    const pushBetter = (item) => {
        // move item from original to better
        setBetter(oldBetter => [...oldBetter, item])
        // update index
        if (index !== items.length-1){
            // not the last item
            setIndex(index+1);
        } else {
            // reset index
            setIndex(0);
            alert("click next")
        }
    }

    const pushWorse = (item) => {
        // move item from original to better
        setWorse(oldWorse => [...oldWorse, item]);
                // update index
        if (index !== items.length-1){
            // not the last item
            setIndex(index+1);
        } else {
            // reset index
            setIndex(0);
            alert("click next")
        }
    }

    const reset = () => {
        // now we're entering the last item of items
        // update array since everything is checked
        if (better.length == num){
            alert("we found it: "+better);
        } else if (better.length < num){
            alert("need to find more contenders, click start")
            setItems(worse);
            setWorse([]);
            // start();
        } else if (better.length > num){
            alert("still too much contenders, click start")
            setItems(better);
            setBetter([])
            setWorse([])
            // start();
        }
    }

    return (
    <div className="">
        <Debug pivot={pivot} items={items} better={better} worse={worse} />
        <div className="m-5">
            <label className="d-flex justify-content-center"> 
                # of top contenders : 
                <input className="mx-1" type="number" value={num} onChange={numChange}/>
            </label>
            <h1 className="d-flex justify-content-center mt-5">Is the following item better than {pivot}?</h1>
            <Card item={items[index]}/>
            <div className="d-flex justify-content-center">
                <button className="btn btn-light m-2" onClick={start}>start</button>
                <button className="btn btn-danger m-2" onClick={()=>pushWorse(items[index])}>worse</button>
                <button className="btn btn-success m-2" onClick={()=>pushBetter(items[index])}>better</button>
                <button className="btn btn-light m-2" onClick={reset}>next</button>
            </div>
        </div>
    </div>
    );
}

export default Deck;