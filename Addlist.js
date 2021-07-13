import {FaChevronDown} from 'react-icons/fa'
import { useState } from 'react'

const Addlist = ({onAdd}) => {
    const [list, setList] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        if(!list) {
            alert('please add a list')
            return
        }
        onAdd({text:list, completed:false, edit:false})

        setList('');
    }

    return ( 
        <form onSubmit={onSubmit}>
                    <div className='icons'>
                    <FaChevronDown className='arrow-icon' />
                    <input className='head'
                    type="text"
                    placeholder="What needs to be done?"
                    value={list}
                    onChange={(e) => setList(e.target.value)} />           
                    </div>                 
                </form>
     );
}
 
export default Addlist;