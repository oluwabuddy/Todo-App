import { useState } from 'react'
import Header from './Header'
import Body from './Body'
import List from './List'
import Footer from './Footer'




function App() {
  const [lists, setLists] = useState([
   
])
const [status, setStatus] = useState('all');


// edit list
const handleEdit = (id, lists) => {
  const handledList = lists.map(list => {
    if( id === list.id) {
      return {...list, lists}
    }
    return list;
  });
  setLists(handledList);
}



// add list
const addList = (list) => {
 const id = Math.floor(Math.random() * 10000) + 1;
 const newList = { id, ...list};
 setLists([...lists, newList]);
}

const handleStatus = (value) => {
setStatus(value);
}

// delete list
const deleteList = (id) => {
  setLists(lists.filter((list) => list.id !==
   id))
}

// clear list 
const clearList = () => {
  setLists([]);
}

const handleFilteredList = () => {
  let currentList;
  switch(status){
    case "completed":
   currentList = lists.filter((list) => list.completed)
   break;
   case "active":
    currentList = lists.filter((list) => !list.completed)
    break;
   default:
     case 'all':
     currentList = [...lists];

  }

  return currentList;
}
 
  return (
    <div className="App">
       <Header />
      <List lists={handleFilteredList()} onDelete={deleteList}
       onAdd={addList}  setLists={setLists} 
       handleEdit={handleEdit}/>
      {lists.length > 0 && <Body  lists={lists} 
      clearList={clearList}
      handleStatus={handleStatus}
      status={status}/>}
       <Footer />

    </div>
  );
}

export default App;
