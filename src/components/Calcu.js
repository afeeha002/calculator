import React, { useState } from 'react';
import './Calcu.css';

const Calcu = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleButtonClick = (value) => {
        setInput((prev) => prev + value);
    };

    const handleCalculate = () => {
        try {
            const sanitizedInput = input.replace(/\b0+(\d+)/g, '$1');
            setOutput(eval(sanitizedInput).toString());
        } catch (error) {
            setInput('Error');
            setOutput('');
        }
    };

    const handleClear = () => {
        setInput('');
        setOutput('');
    };

    return (
        <div className="calculator">
            <div className="display">
                <div className="input">{input}</div>
                <div className="output">{output}</div>
            </div>

            <div className="buttons">
                <button className="number" onClick={() => handleButtonClick('7')}>7</button>
                <button className="number" onClick={() => handleButtonClick('8')}>8</button>
                <button className="number" onClick={() => handleButtonClick('9')}>9</button>
                <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
                <button className="number" onClick={() => handleButtonClick('4')}>4</button>
                <button className="number" onClick={() => handleButtonClick('5')}>5</button>
                <button className="number" onClick={() => handleButtonClick('6')}>6</button>
                <button className="operator" onClick={() => handleButtonClick('*')}>*</button>
                <button className="number" onClick={() => handleButtonClick('1')}>1</button>
                <button className="number" onClick={() => handleButtonClick('2')}>2</button>
                <button className="number" onClick={() => handleButtonClick('3')}>3</button>
                <button className="operator" onClick={() => handleButtonClick('-')}>-</button>
                <button className="number" onClick={() => handleButtonClick('0')}>0</button>
                <button className="number" onClick={() => handleButtonClick('.')}>.</button>
                <button className="equals" onClick={handleCalculate}>=</button>
                <button className="operator" onClick={() => handleButtonClick('+')}>+</button>
                <button className="clear" onClick={handleClear}>C</button>
            </div>
        </div>
    );
};

export default Calcu;
