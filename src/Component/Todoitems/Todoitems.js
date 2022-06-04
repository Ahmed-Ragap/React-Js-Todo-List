import React from 'react'

const Todoitems = (props) => {
    const {items , deletItem} = props;
    let length = items.length;
    const List_item = length ? (
    items.map(item => {
        return(
            <div key={item.id}>
            <span className='name'>{item.name}</span>
            <span className='age'>{item.age}</span>
            <span className='action icon' onClick={() => deletItem(item.id)}>&times;</span>

            </div>
        )
    })
    ) : (  
        alert(' this is the last item are you sure you want to delete it') 
        
    )
    return(
        <div className='list_item'>
            <div>
                <span className='name title'>name</span>
                <span className='age title'>age</span>
                <span className='action title'>action</span>

            </div>
           {List_item}
        </div>
    ) 
}
export default Todoitems;