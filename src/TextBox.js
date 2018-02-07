import React from 'react';

const TextBox = (props) =>{

    return(
    <div>
        <form>
            <label>
                Type text here: 
                <input 
                type="text" 
                name="Text" 
                value={props.data} 
                onChange={(event) =>{
                    props.handleChange(event.target.value) 
                }} />
            </label>
            <input 
            type="submit" 
            value="Submit" />
        </form>
    </div>
    );
}





export default TextBox;