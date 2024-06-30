// import { useState } from 'react'
import './index.css'
// console.log(randomBgColor)
const PasswordItem = ({eachItem , removeItem,showPwd}) => {
  const {website,username,password,color,id} = eachItem
  console.log(showPwd)
  const firstLetterOfSite = website[0].toUpperCase()
  const activeId = () => {
      removeItem(id)
  }
  return (
    <div className="password-item-container">
      <div className="item-container">
        <div className="first-letter" style={{'backgroundColor':color}}>{firstLetterOfSite}</div>
        <ul className="password-list">
          <li className="website-name">{website}</li>
          <li className="username">{username}</li>
          <li>
          {showPwd ? <span className='password'>{password}</span> : <img className='stars' src='https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png' alt='stars'/>}
          </li>
        </ul>
      </div>
      <div data-testid='delete'>
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          onClick={activeId}
        />
      </div>
    </div>
  )
}

export default PasswordItem

