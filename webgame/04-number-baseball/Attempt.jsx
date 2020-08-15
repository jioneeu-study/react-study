import React, { memo } from 'react';

const Attempt = memo(({value}) => {
    return (
        <li> 
            <div>
                {value.attempt}
            </div>
            <div>
                {value.result}
            </div>
        </li>
    )
});

export default Attempt;