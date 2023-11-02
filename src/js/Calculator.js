import '../css/Calculator.css';
import React, {useState} from 'react';

function Calculator(){
    const [display, setDisplay] = useState('');
    const buttons = [
        {symbol: 'C', type: 'clear'},
        {symbol: '()', type: 'parenthesis'},
        {symbol: '%', type: 'operator'},
        {symbol: '/', type: 'operator'},
        {symbol: '7', type: 'number'},
        {symbol: '8', type: 'number'},
        {symbol: '9', type: 'number'},
        {symbol: 'x', type: 'operator'},
        {symbol: '4', type: 'number'},
        {symbol: '5', type: 'number'},
        {symbol: '6', type: 'number'},
        {symbol: '-', type: 'operator'},
        {symbol: '1', type: 'number'},
        {symbol: '2', type: 'number'},
        {symbol: '3', type: 'number'},
        {symbol: '+', type: 'operator'},
        {symbol: '+/-', type: 'plusminus'},
        {symbol: '0', type: 'number'},
        {symbol: '.', type: 'decimal'},
        {symbol: '=', type: 'equal'},
    ]

    const onButtonClick = (symbol, type) => {
        switch(type){
            case 'clear':
                setDisplay('');
                return;
        }

        
        setDisplay(display + symbol);
    };


    return(
            <div className="calculator">
                <div className="display">
                    <div className="display-text">{display}</div>
                </div>
                <div className="buttons">
                    {buttons.map((button, index) => (
                        <button key={index} className='button' id={button.type} onClick={() => onButtonClick(button.symbol, button.type)}>{button.symbol}</button>
                    )
                    )}
                </div>
            </div>            
        );
    
}

export default Calculator;