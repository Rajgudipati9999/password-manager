import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import Passwords from '../Passwords'
import './index.css'

const backgroundColors = [
  '#94a3b8',
  '#b6c3ca',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c'
]

const PasswordManager = () => {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [color,setColor] = useState('')
  const [passwordList, setPasswordsList] = useState([])
  const [error,setError] = useState('')

  const onChangeWebsite = event => {
    setWebsite(event.target.value)
  }
  const onChangeUsername = event => {
    setUsername(event.target.value)
  }
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const submitForm = event => {
    event.preventDefault()
    if (!website || !username || !password) {
      setError('*Please fill out all fields.');
      return;
    }
    const userDetails = {id: uuidv4(), website, username, password , color}
    // console.log(userDetails)
    const lengthOfList = backgroundColors.length - 1
    const randomBgColor = Math.ceil(Math.random(lengthOfList) * lengthOfList) 
    const bgColor = backgroundColors[randomBgColor]
    setColor(bgColor)
    setPasswordsList(preState => [...preState, userDetails])
    setWebsite('')
    setUsername('')
    setPassword('')
    setError('')
  }

  const removeItem = (idToRemove) => {
    setPasswordsList((prevState) => prevState.filter((item) => item.id !== idToRemove));
  };

  return (
    <div>
       <img
      className="app-logo"
      src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      alt="app logo"
    />
      <div className="password-manager-container">
        <form className="form-container" onSubmit={submitForm} value={passwordList}>
          <h1 className="form-heading">Add New Password</h1>
          <div className="input-container">
            <div className="input-logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-logo"
              />
            </div>
            <input
              onChange={onChangeWebsite}
              value={website}
              className="input"
              type="text"
              placeholder="Enter Website"
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="input-logo"
            />
            <input
              onChange={onChangeUsername}
              value={username}
              className="input"
              type="text"
              placeholder="Enter Username"
            />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="input-logo"
            />
            <input
              onChange={onChangePassword}
              value={password}
              className="input"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="btn-container">
            <p className='error'>{error}</p>
            <div>
            <button className="add-btn" type="submit">
              Add
            </button>
            </div>
          </div>
        </form>
        <div className="password-manager-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-lg-logo"
          />
           <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-sm-logo"
          />
        </div>
      </div>
      <Passwords passwordList={passwordList} removeItem={removeItem}/>
</div>
  )
}
export default PasswordManager

