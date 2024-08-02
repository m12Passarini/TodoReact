import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.css'

const InputTodo = ({ newValue }) => {
    
    const escKeyBoard = 27
    const enterKeyBoard = 13

    const [value, setValue] = useState("");

    
    const onChange = (event) => {
        setValue(event.target.value)
    }
        
    const onKeyDown = (event) => {
        if((event.which === enterKeyBoard) && value !== '') {
            newValue(value)
            setValue("")
        } else if (event.which === escKeyBoard) {
            setValue("")
        }
    }
        
    return (
        <div>
            <input 
                className="new-todo" 
                placeholder='Eu preciso...'  
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}/>
        </div>
    )
}

InputTodo.propTypes = {
    newValue: PropTypes.func.isRequired,
}

export default InputTodo;