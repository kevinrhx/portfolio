import cardArray from '../CardArray'
import CreateBox from './CreateBox'


function CreateBoxes(){
    return <div className="flex">{cardArray.map(CreateBox)}</div>
}
export default CreateBoxes;