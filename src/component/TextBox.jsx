import React from 'react';
function TextBox(props){
    //const theYear =new Date().getFullYear()
    
    return<div className = "textBox">
        <h1>
            {props.title}
        </h1>
        <p>
            {props.note}
        </p>
    </div>
    
    }
    
    export default TextBox;