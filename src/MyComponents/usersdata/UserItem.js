import React from 'react'
import { ItemCard } from '../../styled';

export const UserItem = ({user, toggoleDialog,}) => {
    const { login, avatar_url, html_url  } = user;
      
      return (
    <ItemCard>
        <div className='image-ctnr'>
            <img src= {avatar_url} className='avatar-image'/>
        </div>
        <div style={{marginLeft: '1rem'}}>
        <p style= {{marginTop: '0', marginBottom: '0'}}>{login}</p>
        <button onClick={() => toggoleDialog(login)} className='findmore-btn'>Find More</button>
        </div>
    </ItemCard>
  )
}
