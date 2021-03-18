import React, { useState } from 'react'

const LangItem = ({ voteCount, name }) => {
    const [count, setCount] = useState(voteCount);

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <div className="wrapper">
                <div className="item">{count}</div>
                <div className="item">{name}</div>
                 <button className="btn" onClick={handleClick}>Click Here!</button>
            </div>
        </div>
    )
}

export default LangItem;