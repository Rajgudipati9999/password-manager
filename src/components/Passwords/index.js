import { useState ,useEffect} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

const Passwords = props => {
  const {passwordList,removeItem} = props
  const [showPwd,setShowPasswords] = useState(false)
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const count = passwordList.length

  useEffect(() => {
    setFilteredPasswords(passwordList);
  }, [passwordList]);

  // console.log(passwordList)
  const showPasswords = (event) => {
    setShowPasswords(event.target.checked)
  }
  const onChangeList = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredList = passwordList.filter((item) =>
      item.website.toLowerCase().includes(searchTerm)
    );
    setFilteredPasswords(filteredList);
  };
  return (
    <div className="password-container">
      <div className="top-section">
        <div className="password-count-container">
          <h1 className="your-passwords-heading">Your Passwords</h1>
          <span className="passwords-count">{count}</span>
        </div>
        <div className="search-input-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
            alt="search"
            className="search-logo"
          />
          <input className="search-input" type="search" placeholder="Search" value={searchTerm} onChange={onChangeList}/>
        </div>
      </div>
      <hr />
      <div className="show-passwords-container">
        <div className='show-passwords'>
          <input className="checkbox" type="checkbox" id="checkbox" onChange={showPasswords}/>
          <label className="label" htmlFor="checkbox">
            Show Passwords
          </label>
        </div>
      </div>
      <div className='passwords-container'>
      {filteredPasswords.length === 0 ? 
      <div className='no-password-container'>
        <img className='no-passwords-image' src='https://assets.ccbp.in/frontend/react-js/no-passwords-img.png ' alt='no passwords'/>
        <h1 className='no-passwords-heading'>No Passwords</h1></div>:filteredPasswords.map(eachItem => (
        <PasswordItem key={eachItem.id} eachItem={eachItem} removeItem={removeItem} showPwd={showPwd}/>
      ))}
      </div>
    </div>
  )
}
export default Passwords

