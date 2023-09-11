import React from 'react'

export const GistsItem = ({gists}) => {

    const { owner, html_url, description, created_at, updated_at, gists_url } = gists;

    const dateConvert = (str) => { return Date(str).substring(0, 15); }


  return  (
    <div className='gist-ctnr'>
        <div>
         <div>
            <img src= {owner?.avatar_url} style={{maxWidth: '45px', borderRadius: '50%'}}/>
            <p className='gist-name'>{owner?.login}</p>

         </div>
        </div>
        <div>
            <div>
                <a href= {html_url}>gist Url</a>
            </div>
          
            <p style={{fontSize: '75%'}}> Created on : {dateConvert(created_at)} </p>
            <p style={{fontSize: '75%'}}>Updated On : {dateConvert(updated_at)}</p>

        </div>
    </div>
   
   
  )
}
