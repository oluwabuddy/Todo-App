import Addlist from './Addlist'
import Todo from './Todo'


const List = ({ lists, onDelete, onAdd, setLists, handleEdit }) => { 
    
   

    const handleCheck = (index)=> {
      
        lists[index].completed = !lists[index].completed;
         setLists([...lists ])
     }

    return ( 
        <div className="container">
                
                <Addlist  onAdd={onAdd}/>
                    {lists.map((list, index) => (
                   <Todo key={list.id} handleCheck={()=> handleCheck(index)} onDelete={onDelete} setLists={setLists} 
                   lists={lists} list={list}/>
                
                    ))}        
            
            </div>

     );
}
 
export default List;