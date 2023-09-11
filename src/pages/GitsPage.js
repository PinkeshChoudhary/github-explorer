import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { GistsItem } from '../MyComponents/gists/GistsItem'

export const GitsPage = () => {
    const[gists, setGists] = useState([])
    const[visible, setVisible] = useState(7)

    useEffect(() =>{
        async function fetchGits() {
            await axios.get('https://api.github.com/gists/public')
            .then(res =>  setGists(res.data)
            )
        }
        fetchGits()
    }, [])

    const loadMore =() =>{
        setVisible(visible+7)
    }

    const loadLess =() => {
        setVisible(visible-20)
    }
  return (
    <>
    <div className='gistList-ctnr'>
        
        {
            gists.slice(0, visible).map((gist) => {
                return(
                    <GistsItem key = {gist.id} gists = {gist}/>
                )     
            })
        }
        
    </div>
    {
    visible>gists.length-1?
    <div style={{textAlign: 'center'}}>
    <button style={{padding : '0.5rem', width: '100px', margin: '1rem', }} onClick={loadLess}>See Less</button>
   </div>:
   <div style={{textAlign: 'center'}}>
    <button style={{padding : '0.5rem', width: '100px', margin: '1rem'}} onClick={loadMore}>See More</button>
   </div>
}

</>
  )
}
