import { useState } from 'react';
import './ImcCalc.css'
import Button from './Button';
const ImcCalc = () => {

    
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");

    const clearForms = (e)=>{
        e.preventDefault();
        setWeight("");
        setHeight("");
    }

    const validDigits = (text)=>{
        return text.replace(/[^0-9,]/g, "");
    }
    const handleHeightChange = (e)=>{
        const updatedValue = validDigits(e.target.value);
        setHeight(updatedValue);
    }

    const handleWeightChange = (e)=>{
        const updatedValue = validDigits(e.target.value);
        setWeight(updatedValue);
    }
    return (
        <div id="calc-container">
            <h2>Calculadora de IMC</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor='height'>Altura</label>
                        <input
                            type="text"
                            name='height'
                            id='height'
                            placeholder='Exemplo: 1,72'
                            onChange={(e)=>handleHeightChange(e)}
                            value={height}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor='weight'>Peso</label>
                        <input
                            type="text"
                            name='weight'
                            id='weight'
                            placeholder='Exemplo:70,5'
                            onChange={(e)=> handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                </div>
                <div className="action-control">
                    <Button id="calc-btn" text="Calcular" />
                    <Button id="clear-btn" text="Limpar" action={clearForms} />
                </div>
            </form>

        </div>
    )
}

export default ImcCalc