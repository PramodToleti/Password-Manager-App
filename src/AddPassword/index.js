import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class AddPassword extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordsList: [],
    isShowPasswordChecked: false,
    passwordsCount: 0,
    passwordSearchText: '',
    cardFocus: false,
  }

  onShowPasswords = () => {
    this.setState(prevState => ({
      isShowPasswordChecked: !prevState.isShowPasswordChecked,
    }))
  }

  onRemovePassword = id => {
    const passwordsListFromStorage = JSON.parse(
      localStorage.getItem('passwords'),
    )
    const filteredPasswords = passwordsListFromStorage.filter(
      each => each.id !== id,
    )
    localStorage.setItem('passwords', JSON.stringify(filteredPasswords))
    localStorage.setItem('passwordCount', filteredPasswords.length)
    this.setState(prevState => ({
      passwordsList: filteredPasswords,
      passwordsCount: prevState.passwordsCount - 1,
    }))
  }

  onAddPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const backgroundColorClassName = `user-profile-icon ${
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ]
      }`
      const newPassword = {
        id: uuidv4(),
        website,
        username,
        password,
        backgroundColorClassName,
      }
      const localStorageDetails = JSON.parse(localStorage.getItem('passwords'))
      localStorage.setItem(
        'passwords',
        JSON.stringify([...localStorageDetails, newPassword]),
      )
      const passList = JSON.parse(localStorage.getItem('passwords'))
      localStorage.setItem('passwordCount', passList.length)
      this.setState(prevState => ({
        website: '',
        username: '',
        password: '',
        passwordsList: [...prevState.passwordsList, newPassword],
        passwordsCount: prevState.passwordsCount + 1,
      }))
    }
  }

  onChangeWebsite = event => {
    this.setState({
      website: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSearchPassword = event => {
    this.setState({
      passwordSearchText: event.target.value,
    })
  }

  renderPasswords = () => {
    const {passwordSearchText, isShowPasswordChecked} = this.state

    let LocalStoragePasswordsList = JSON.parse(
      localStorage.getItem('passwords'),
    )
    if (LocalStoragePasswordsList === null) {
      localStorage.setItem(
        'passwords',
        JSON.stringify([]),
        'passwordCount',
        JSON.stringify(0),
      )
      LocalStoragePasswordsList = JSON.parse(localStorage.getItem('passwords'))
    }
    const filteredPasswordsList = LocalStoragePasswordsList.filter(each =>
      each.website.toLowerCase().includes(passwordSearchText.toLowerCase()),
    )

    if (filteredPasswordsList.length === 0) {
      return (
        <>
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1670253846/quirky-social-media-management-1_y2iwlk.png"
            alt="password images"
            className="password-images-1"
          />
          <img
            src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1670253265/quirky-key-opening-a-lock-1_lnj1m3.png"
            alt="password images"
            className="password-images-2"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="no passwords"
            className="no-passwords-image"
          />
          <p className="no-passwords-text">No Passwords</p>
        </>
      )
    }

    localStorage.getItem('passwords')

    return (
      <>
        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox"
            onClick={this.onShowPasswords}
            id="checkbox"
          />
          <label htmlFor="checkbox" className="show-passwords-text">
            Show Passwords
          </label>
        </div>
        <ul className="passwords-container">
          {filteredPasswordsList.map(each => (
            <PasswordItem
              passwordDetails={each}
              key={each.id}
              onRemovePassword={this.onRemovePassword}
              isShowPasswordChecked={isShowPasswordChecked}
            />
          ))}
        </ul>
      </>
    )
  }

  onFocusInput = () => {
    this.setState({
      cardFocus: true,
    })
  }

  onBlurInput = () => {
    this.setState({
      cardFocus: false,
    })
  }

  render() {
    const passwordCountFromStorage = JSON.parse(
      localStorage.getItem('passwordCount'),
    )
    const {website, username, password, cardFocus} = this.state
    const cardClassName = cardFocus
      ? 'focus-password-input-container'
      : 'password-input-container'
    return (
      <>
        <div className="add-password-container">
          <div className="password-manager-icon"> </div>
          <div className={cardClassName}>
            <h1 className="add-password-heading">Add New Password</h1>
            <img
              src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1670155122/3d-fluency-user-shield_wpfmjr.png"
              alt="password-icon"
              className="password-icon"
            />
            <form className="form-container" onSubmit={this.onAddPassword}>
              <div className="input-field-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-icon"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-bar"
                  onChange={this.onChangeWebsite}
                  value={website}
                  onFocus={this.onFocusInput}
                  onBlur={this.onBlurInput}
                />
              </div>
              <div className="input-field-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-icon"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-bar"
                  onChange={this.onChangeUsername}
                  value={username}
                  onFocus={this.onFocusInput}
                  onBlur={this.onBlurInput}
                />
              </div>
              <div className="input-field-container">
                <div className="icon-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-icon"
                  />
                </div>

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-bar"
                  onChange={this.onChangePassword}
                  value={password}
                  onFocus={this.onFocusInput}
                  onBlur={this.onBlurInput}
                />
              </div>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>

        <div className="show-passwords-container">
          <div className="header">
            <div className="passwords-count-container">
              <h1 className="your-passwords-heading">Your Passwords</h1>
              <p className="password-count-style">{passwordCountFromStorage}</p>
            </div>
            <div className="password-search-container">
              <div className="search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="password-search-bar"
                placeholder="Search"
                id="checkBox"
                onChange={this.onSearchPassword}
              />
            </div>
          </div>
          <hr className="separator" />

          {this.renderPasswords()}
        </div>
      </>
    )
  }
}

export default AddPassword
