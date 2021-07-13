import {  FaTimes } from 'react-icons/fa'

const Deletelist = ({id, onDelete}) => {
    return ( 
         //<div className='delete'>
            <FaTimes className='delete-icon'
             onClick={() => onDelete(id)} />
        // </div>
     );
}
 
export default Deletelist;