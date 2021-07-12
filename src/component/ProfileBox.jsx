import React from 'react';
function ProfileBox(props){
    //const theYear =new Date().getFullYear()
    
    return<div className = "testCo">
        <img className="profImg" src={props.image}
          alt="portfolio_img"/>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.note}
        </p>
            <img className="icon" src={props.image}
                alt="portfolio_img"/>
            <img className="icon" src={props.image}
                alt="portfolio_img"/>
            <img className="icon" src={props.image}
                alt="portfolio_img"/>
    </div>
    
    }
    
    export default ProfileBox;