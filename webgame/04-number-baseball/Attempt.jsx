import React from 'react';

const Attempt = ({value}) => {
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
};

export default Attempt;