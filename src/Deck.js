import React, {useState} from 'react';
import Card from "./Card"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

const Deck = () => {
    const [items, setItems] = useState(numbers);
    const [better, setBetter] = useState([]);
    const [worse, setWorse] = useState([]);
    
    const [num, setNum] = useState(3);
    const [pivot, setPivot] = useState();
    const [index, setIndex] = useState(0);

    const randomIndex = () => {
        return Math.floor(Math.random()*items.length);
    }

    /* main logic */
    const start = () => {
        //choose a pivot
        let temp_pivot = items[randomIndex()]
        setPivot(temp_pivot);
        // move pivot from items to better array
        setItems(items.filter((item)=>{
            return item != temp_pivot;
        }))
        setBetter(oldBetter => [...oldBetter, temp_pivot])
    }

    const pushBetter = (item) => {
        // move item from original to better
        setBetter(oldBetter => [...oldBetter, item])
        // update index
        if (index != items.length-1){
            // not the last item
            setIndex(index+1);
        } else {
            // reset index
            setIndex(0);
        }
    }

    const pushWorse = (item) => {
        // move item from original to better
        setWorse(oldWorse => [...oldWorse, item]);
                // update index
        if (index != items.length-1){
            // not the last item
            setIndex(index+1);
        } else {
            // reset index
            setIndex(0);
        }
    }

    const reset = () => {
        // now we're entering the last item of items
        // update array since everything is checked
        if (better.length == num){
            alert("we found it: "+better);
        } else if (better.length < num){
            alert("need to find more contenders")
            setItems(worse);
            setWorse([]);
            // start();
        } else if (better.length > num){
            alert("still too much contenders")
            setItems(better);
            setBetter([])
            setWorse([])
            // start();
        }
    }
    
    return (
    <div className="">
        {/* debug dashboard */}
        <div className="row">
            <div className="col">
                <button onClick={start}>start</button>
                <h1>{pivot}</h1>
                {items.map((item)=>{
                    return <p>{item}</p>
                })}
                <button onClick={reset}>next</button>
            </div>
            <div className="col">
                <button onClick={()=>pushBetter(items[index])}>better</button>
                {better.map((item)=>{
                return <p className="text-white">{item}</p>
                })}
            </div>
            <div className="col">
                <button onClick={()=>pushWorse(items[index])}>worse</button>
                {worse.map((item)=>{
                return <p className="text-primary">{item}</p>
                })}
            </div>
        </div>
        <hr/>
        <div>
            <h1 className="d-flex justify-content-center">Is the following item better than {pivot}?</h1>
            <Card item={items[index]}/>
            {/* <h2>{items[index]}</h2> */}
        </div>
    </div>
    );
}

export default Deck;