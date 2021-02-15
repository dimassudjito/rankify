import React, {useState} from 'react';
const numbers = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10];

const Deck = () => {
    const [items, setItems] = useState(numbers);
    const [num, setNum] = useState(3);
    const [better, setBetter] = useState([]);
    const [worse, setWorse] = useState([]);

    const randomIndex = () => {
        return Math.floor(Math.random()*items.length);
    }

    /* main logic */
    while (true){
        const pivot = items[randomIndex()]
        // remove item for the original list to better list
        
    }
    
    return (
    <div className="">
        <h1>{randomIndex()}</h1>
    </div>
    );
}

export default Deck;