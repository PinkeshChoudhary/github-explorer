import axios from 'axios'
import React, { useEffect, useState } from 'react'

const dialogStyle = {
    bottom: '0px',
    top: '0px',
    right: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '99',
    backgroundColor: 'rgb(0,0,0, 0.4)',
    borderRadius: '10px',
    minWidth: '40%'
  }
  const gitLink = {
    color: 'blue',
    padding: '0 13px 5px 13px',
    textDecoration: 'none',
    fontSize: '14px'
  }
  const gitLinkButton = {
    margin: '5px 10px 5px 10px', backgroundColor: 'lightgrey',
    width: 'max-content', textAlign: 'center',
    border: '1px solid rgb(125,160,185)'
  }
  
  const flexbox = {
    display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    zIndex : '3',
    position : 'fixed'
  }
  
  const modelContent = {
    minWidth: 'fit-content',
    border: '1px solid grey',
    borderRadius: '10px',
    margin: 'auto',
    padding: '10px',
    width: '40%',
    height: '42vh',
    backgroundColor: 'white',
  }
  const closebtn = {
    width: '30px',
    height: '30px',
    border: '1px solid rgb(215, 215, 280)',
    borderRadius: '50%',
    backgroundColor: 'rgb(215, 215, 280)',
    fontSize: 'x-large',
    textDecoration: 'none',
    hover: {
      backgroundColor: "#ff0000",
      color: "#ffffff"
    }
  }

export const UserDialog = ({dialogUser,toggoleDialog}) => {
    const[userData, setUserData] = useState([])
    const userName = dialogUser  
    
        
    useEffect(() => {
        async function fetchUser() {
            console.log("fetch users")
            if(dialogUser === "") return
            await axios.get(`https://api.github.com/users/${userName}`)
            .then(res => setUserData(res.data))
        }
        fetchUser()
    
    },[userName])

    console.log(userData)
  return (
    // <div className="dialogstyle" style={dialogStyle}>
    <>
    <div className='backdrop' style={{position: 'fixed', height: '100vh', width: '100%', backgroundColor : '#4f4b4bbf', top: '0', left: '0', zIndex: '2'}}></div>

        <div className="flexbox" style={flexbox}>
          <div className='modelcontant' style={modelContent}>
 
            <div style={{ textAlign: 'right', paddingTop: '0px' }}>
              <button style={closebtn} onClick={toggoleDialog} >X</button>
            </div>

            <div style={{ padding: '0 15px 15px 15px', alignItems: 'center' }}>
              <h3 style={{
                padding: '0 0 10px 0', margin: '0px',
                fontFamily: 'inherit', fontSize: 'initial', fontWeight: '400'
              }}>{userData.login}</h3>

              <div style={{ textAlign: 'center', marginLeft: '5px', width: 'auto', height: '21vh' }}>
                <img src={userData.avatar_url} alt='NOT FOUND' className='divUsrImg' style={{ height: 'inherit' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row', marginTop: '2vh' }}>
                <div style={{ display: 'flex', flexDirection: 'column', paddingRight: '30px' }}>
                  <h3 style={{
                    margin: '1px', textAlign: 'center',
                    fontSize: '3vh', fontWeight: '400'
                  }}>
                    {userData.following}
                  </h3>
                  <p style={{ margin: '0px', fontSize: 'small' }}>followers</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                  <h3 style={{ margin: '1px', textAlign: 'center', fontSize: '3vh', fontWeight: '400' }}>

                    {userData.followers}
                  </h3>

                  <p style={{ margin: '0px', fontSize: 'small' }}> following </p>
                </div>
                <div style={gitLink}>
                  <a href={userData.html_url} target='blank' style={gitLinkButton}>github Link </a> </div>

              </div>

            </div>


          </div>

        </div>

      {/* </div> */}
    </>
  )
}
