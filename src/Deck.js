import React, {useState} from 'react';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

const Deck = () => {
    const [items, setItems] = useState(numbers);
    const [better, setBetter] = useState([]);
    const [worse, setWorse] = useState([]);
    
    const [num, setNum] = useState(3);
    let pivot = 0;

    const randomIndex = () => {
        return Math.floor(Math.random()*items.length);
    }

    /* main logic */
    const compare = () => {
        //choose a pivot
        pivot = items[randomIndex()]
        // move pivot from items to better array
        setItems(items.filter((item)=>{
            return item != pivot;
        }))
        setBetter(oldBetter => [...oldBetter, pivot])
    }
    
    return (
    <div className="">
        <button onClick={compare}>test</button>
        {items.map((item)=>{
            return <p>{item}</p>
        })}
        {better.map((item)=>{
            return <p className="text-white">{item}</p>
        })}
        <h1>Is the following item better than {pivot}</h1>
    </div>
    );
}

export default Deck;