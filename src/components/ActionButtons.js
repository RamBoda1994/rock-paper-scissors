import React from 'react';
import {useState, useEffect} from 'react';
import rock from '../images/rock.png';
import paper from '../images/paper.png';
import scissors from '../images/scissors.png';

export default function ActionButtons({winner, handleSelection}) {

    const [currentSelection, setCurrentSelection] = useState('');
    const [result, setResult] = useState('');

    useEffect(()=> {
        setResult(winner);
    },[winner]);

    const handleUserSelection = selection => {
        setCurrentSelection(selection);
        handleSelection(selection);
        setTimeout(() => setCurrentSelection(''),500);
    }

    const handleClasses = () => {
        if(result === 'user')
            return 'highlight-win';
        else if(result === 'computer')
            return 'highlight-lose';
        else if(result === 'draw')
            return 'highlight-draw';
    }

    return (
        <div className="action-buttons">
            <div 
                className={`button ${currentSelection && currentSelection === 'r' && handleClasses()}`}
                id="rock" 
                onClick={() => handleUserSelection("r")}>
                <img src={rock} alt="image"/>
            </div>
            <div 
                className={`button ${currentSelection && currentSelection === 'p' && handleClasses()}`}
                id="paper" 
                onClick={() => handleUserSelection("p")}>
                <img src={paper} alt="image"/>
            </div>
            <div 
                className={`button ${currentSelection && currentSelection === 's' && handleClasses()}`}
                id="scissors" 
                onClick={() => handleUserSelection("s")}>
                <img src={scissors} alt="image"/>
            </div>
        </div>
    )
}
