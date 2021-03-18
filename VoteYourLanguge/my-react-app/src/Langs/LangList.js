import React from 'react'
import LangItem from './LangItem'

const langsList = [
    {name:"C#", voteCount:100},
    {name:"JS", voteCount:0},
    {name:"PHP", voteCount:99},
    {name:"Ruby", voteCount:0},
    {name:"C++", voteCount:0},
    {name:"Python", voteCount:0},
    {name:"Java", voteCount:0},
]

const LangList = () => {
    return(
        <div>
            {langsList.map(item =>{
                return(
                    <LangItem 
                        name={item.name}
                        voteCount={item.voteCount} 
                    />
                )
            })}
        </div>
    )
}

export default LangList;