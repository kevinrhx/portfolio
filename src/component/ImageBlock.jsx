import React from 'react';
function ImageBlock(props){
    //const theYear =new Date().getFullYear()
    
    return<div className = "imageBlock">
        <img className="circle-img" src={props.image}
          onMouseOver={e => (e.currentTarget.src = props.image2)}
          onMouseOut={e => (e.currentTarget.src = props.image)}
          alt="portfolio_img"/>
        <h1>
            {props.title}
        </h1>
        <p>{props.note}</p>
    </div>
    
    }
    
    export default ImageBlock;