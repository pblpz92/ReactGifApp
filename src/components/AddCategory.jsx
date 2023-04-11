import { useState } from "react"

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {              
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length > 2) {            
            setCategories(inputValue.trim());
        }

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type = "text" 
                placeholder = "Search gifs"            
                value = {inputValue}
                onChange = {onInputChange}
            />    
        </form>
    )
}
