import React, { useState } from 'react';

function Footer(){
    function Clock(){
        setInterval(updateTime, 1000);    
        const now= new Date().toLocaleTimeString();
        const [time,setTime]=useState(now);
    
        function updateTime(){
            const newTime = new Date().toLocaleTimeString();
            setTime(newTime);
        }
        return time;
    }
    const theYear =new Date().getFullYear();
    const timeNow = Clock();
    return<footer>
        <p>
            <span>Copyright © {theYear} </span>
            <span className='lText'>Current time: {timeNow}</span>
        </p>
    </footer>
}

export default Footer;