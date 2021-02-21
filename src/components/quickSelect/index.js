import React, {useState} from 'react';

import Card from "./Card"
import Debug from './Debug'
import Alert from './Alert'

// hard-code data for testing
const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];
const cities = ["tokyo", "las vegas", "bali", "shanghai", "singapore", "vancouver", "paris", "taipei", "havana", "bangkok"]
const text_numbers = "1, 2, 3, 4, 5, 6, 7, 8, 9"

const QuickSelect = () => {
    // setting up array
    const [items, setItems] = useState([]);
    const [better, setBetter] = useState([]);
    const [worse, setWorse] = useState([]);
    // setting up the computation variable
    const [num, setNum] = useState(3);
    const [pivot, setPivot] = useState();
    const [index, setIndex] = useState(0);
    // setting up the alert/status system
    const [status, setStatus] = useState("start");

    const randomIndex = () => {
        return Math.floor(Math.random()*items.length);
    }

    /* main logic */
    const start = () => {
        setStatus("progress");
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
            setStatus("check");
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
            setStatus("check");
        }
    }

    const reset = () => {
        // now we're entering the last item of items
        // update array since everything is checked
        if (better.length == num){
            setStatus("found")
        } else if (better.length < num){
            setStatus("continue")
            setItems(worse);
            setWorse([]);
        } else if (better.length > num){
            setStatus("continue")
            setItems(better);
            setBetter([])
            setWorse([])
        }
    }

    return (
    <div className="">
        {/* <Debug pivot={pivot} items={items} better={better} worse={worse} /> */}
        <Alert status={status} better={better} items={items}/>
        <div className="m-5">
            {status == "start"?
            <div className="my-5">
            <label className="d-flex justify-content-center"> 
            # of top contenders : 
            <input className="mx-1" type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
            </label> 
            <label className="d-flex justify-content-center"> 
            comma-separated options : 
            <textarea className="mx-1" value={items} onChange={(e)=>{setItems(e.target.value.split(","))}}/>
            </label>
            </div>
            : ""}
            {pivot != null ?
            <h1 className="d-flex justify-content-center mt-5">Is the following item better than {pivot}?</h1>
            : ""}
            {status != "start" ?
            <Card item={items[index]}/>
            : ""}
            <div className="d-flex justify-content-center">
                {status == "start" ? 
                <button className="btn btn-light m-2" onClick={start}>start</button> : ""}
                {status == "progress" ? 
                <button className="btn btn-danger m-2" onClick={()=>pushWorse(items[index])}>worse</button>: ""}
                {status == "progress" ? 
                <button className="btn btn-success m-2" onClick={()=>pushBetter(items[index])}>better</button>: ""}
                {status == "check" ? 
                <button className="btn btn-warning m-2" onClick={reset}>check</button>: ""}
                {status == "continue" ? 
                <button className="btn btn-light m-2" onClick={start}>continue</button>: ""}
                {status == "found" ?
                <button className="btn btn-light m-2" onClick={()=>{window.location.reload()}}>restart</button>: ""}
            </div>
        </div>
    </div>
    );
}

export default QuickSelect;