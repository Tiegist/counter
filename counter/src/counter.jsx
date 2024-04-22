import React, { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div className="councontainer ">
            <div className='cardtext '>
                <div className='card'>
                <h1>Counter App</h1>
                <div className='bodydiv'>
                    <h2 className='h2'>{count}</h2>
                    <button className='btnin' onClick={()=> setCount(count +1)}>Increament</button>
                    <button className='btnre' onClick={()=> setCount(0)}>Reset</button>
                    <button className='btnde' onClick={()=> setCount(count -1)}>Decreament</button>
                   
                </div>
                </div>
            </div>
      
        </div>
    );
}
export default Counter;