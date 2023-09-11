import React, { useState } from 'react'
import { UserItem } from './UserItem'
import { UserDialog } from './UserDialog'
import { Usersctnr } from '../../styled'
export const Users = ({users}) => {
    const[dialogUser, setDialogUser] = useState("")
    const[isDialogOpen, setIsDialogOpen] = useState(false)
    const[visible, setVisible] = useState(12)
    const[hasMore, sethasMore] = useState(true)

    const toggoleDialog = (dialogUser) => {
        console.log(dialogUser, 'user')
        if(dialogUser===null){
            setDialogUser("")
            setIsDialogOpen(!isDialogOpen)
            console.log("bye dialog");
        }else {
          setDialogUser(dialogUser)
          setIsDialogOpen(!isDialogOpen)

        }

    }

    const loadMore = () => {
      setVisible(visible+12)
    }

    const loadLess =() => {
        setVisible(visible-20)
    }


  return (
    <>
    
    <div>
        <Usersctnr>
    {users.slice(0, visible).map((user) =>{
        return(
            <>
                <UserItem user = {user}
                toggoleDialog = {toggoleDialog}
                
                />
            </>
        )
    })}

</Usersctnr>
   {

    visible> users.length-1 ? 
           <div style={{textAlign: 'center'}}>
            <button onClick={loadLess} style={{padding : '0.5rem', width: '100px'}}>See Less</button>
          </div> 
        : users.length> 1 && (
        <div style={{textAlign: 'center'}}>
            <button onClick={loadMore} style={{padding : '0.5rem', width: '100px'}}>See More</button>
        </div>
    )
   } 
   </div>

    {
        isDialogOpen && (
         <UserDialog dialogUser={dialogUser} 
            toggoleDialog = {toggoleDialog}
        />)
    }

   
    </>
  )
}
