import DeleteList from './Deletelist'
import { useState } from 'react'

const Todo = ({lists, onDelete, setLists, handleEdit, list, handleCheck}) => {
const [editMode, setEditMode] = useState(false);
const handleOnBlur = (e, list) =>  {
    const foundIndex = lists.findIndex((item)=> item.id === list.id)
    const updatedList = [...lists]
    updatedList[foundIndex].text = e.target.value;
    setEditMode(false);
    setLists(updatedList);
}

    
    return ( 
        <div className='output' >     
        <div className='innermost-output'>
        {!editMode && <input type="checkbox" className='list-output' defaultChecked={list.completed} 
        onClick={handleCheck}  />}
       <div className='edit'>
        { !editMode ? <span className={` text ${list.completed ? "completed" : ""}`} 
        onDoubleClick={()=>setEditMode(true)}>{list.text}</span> :
       <input className='edit-text' type="text"
       autoFocus onBlur={(e)=>handleOnBlur(e, list)}/>}
        </div>
        </div>
       {!editMode && <DeleteList id={list.id}  onDelete={onDelete}/>}
        </div>
     );
}
 
export default Todo;