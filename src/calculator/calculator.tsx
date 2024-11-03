import { useState } from 'react';

interface CalculatorProps {
    show: (value: boolean) => void;
    setShowCalc: (value: boolean) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ show, setShowCalc }) => {
    const [result, setResult] = useState('0');
    const [currentInput, setCurrentInput] = useState('');
    const [operation, setOperation] = useState<string | null>(null);
    const [previousInput, setPreviousInput] = useState('');

    const handleNumberClick = (value: string) => {
        const newInput = currentInput === '0' ? value : currentInput + value;
        setCurrentInput(newInput);

        if (operation) {
            setResult(`${previousInput} ${operation} ${newInput}`);
        } else {
            setResult(newInput);
        }
    };

    const handleOperatorClick = (op: string) => {
        if (!currentInput && previousInput) {
            setOperation(op);
            setResult(`${previousInput} ${op}`);
            return;
        }

        if (currentInput) {
            if (previousInput && operation) {
                calculate();
            } else {
                setPreviousInput(currentInput);
                setCurrentInput('');
                setOperation(op);
                setResult(`${currentInput} ${op}`);
            }
        }
    };

    const calculate = () => {
        if (operation && previousInput && currentInput) {
            const prev = parseFloat(previousInput);
            const curr = parseFloat(currentInput);
            let calcResult = '';

            switch (operation) {
                case '+':
                    calcResult = (prev + curr).toString();
                    break;
                case '-':
                    calcResult = (prev - curr).toString();
                    break;
                case 'x':
                    calcResult = (prev * curr).toString();
                    break;
                case '÷':
                    calcResult = (prev / curr).toString();
                    break;
                default:
                    return;
            }

            setResult(calcResult);
            setCurrentInput(calcResult);
            setOperation(null);
            setPreviousInput('');
        }
    };

    const handleClear = () => {
        setResult('0');
        setCurrentInput('');
        setPreviousInput('');
        setOperation(null);
    };

    const handleDeleteLast = () => {
        if (currentInput) {
            const updatedInput = currentInput.slice(0, -1) || '0';
            setCurrentInput(updatedInput);
            setResult(updatedInput);
        }
    };

    const handleSignChange = () => {
        if (currentInput) {
            const updatedValue = (parseFloat(currentInput) * -1).toString();
            setCurrentInput(updatedValue);
            setResult(operation ? `${previousInput} ${operation} ${updatedValue}` : updatedValue);
        }
    };

    const handleGoBack = () => {
        show(false);
        setShowCalc(false);
    };

    return (
        <>
            <div className="calc-cont">
                <span id='go-back-calc' onClick={handleGoBack}></span>
                <span id="display-calc">{result}</span>
                <div className="buttons-calc">
                    <button className="gray-btns" onClick={handleClear}>AC</button>
                    <button className="gray-btns" onClick={handleSignChange}>+/-</button>
                    <button className="gray-btns" onClick={handleDeleteLast}>C</button>
                    <button className="orange-btns" onClick={() => handleOperatorClick('÷')}>÷</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('7')}>7</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('8')}>8</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('9')}>9</button>
                    <button className="orange-btns" onClick={() => handleOperatorClick('x')}>x</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('4')}>4</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('5')}>5</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('6')}>6</button>
                    <button className="orange-btns" onClick={() => handleOperatorClick('-')}>-</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('1')}>1</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('2')}>2</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('3')}>3</button>
                    <button className="orange-btns" onClick={() => handleOperatorClick('+')}>+</button>
                    <button className="numbers-btns" id='zero-btn' onClick={() => handleNumberClick('0')}>0</button>
                    <button className="numbers-btns" onClick={() => handleNumberClick('.')}>.</button>
                    <button className="orange-btns" onClick={calculate}>=</button>
                </div>
            </div>
        </>
    )
}

export default Calculator;
