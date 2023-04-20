 import React from 'react'
 import { useContext } from 'react'
 import { UserContext } from '../context/UserContext'



  const Profile = () => {
    
    const { userData, logout } = useContext(UserContext)
  
    const handleLogout = () => {
      logout()
    }
  
    return (
      <div>
        {userData ? (
          <div>
            <p>Bienvenido {userData.name}!</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </div>
        ) : (
          <p>No estás logueado</p>
        )}
      </div>
    )
  }
  
  export default Profile