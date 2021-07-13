


const Body = ({lists, clearList, handleStatus, status}) => {
    
    //   const setData = () => {
    //       let obj = {'list': list}
    //       localStorage.setItem('myData', JSON.stringify(obj));
    //       let data =localStorage.getItem('myData');
    //       data = JSON.parse(data);
    //       console.log(data);
    //   }
    
    
    return ( 

            <div className='bottom'>
                <nav className='inner-bottom'>
                   <span> {lists.length } items left</span>
                    <ul className='innermost-bottom'>
                    <span className={`filter ${status === 'all' ? "active" : ""}`} onClick={() => handleStatus('all')}>All</span>
                    <span className={`filter ${status === 'active' ? "active" : ""}`} onClick={() => handleStatus('active')}>Active</span>
                    <span className={`filter ${status === 'completed' ? "active" : ""}`} onClick={() => handleStatus('completed')} >Completed</span>  
                    </ul>                 
                    <span onClick={clearList} className='clear'>Clear Completed</span>
                </nav>
                </div>
            
        
     );
}
 
export default Body;