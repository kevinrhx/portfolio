//import react from 'react';
import TextBox from './TextBox';
import ImageBlock from './ImageBlock';

function CreateBox(card){
    
    return <div className = 'note'>
    <TextBox
        //css = {props.text}
        note = {card.noteText}
        title = {card.titleText}
    /> 
    <ImageBlock
        id = {card.id}
        title = {card.title}
        note= {card.note}
        image={card.image}
        image2={card.image2}
    />
    </div>
}


    export default CreateBox;