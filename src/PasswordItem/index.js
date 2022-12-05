import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onRemovePassword, isShowPasswordChecked} = props
  const {
    id,
    website,
    username,
    password,
    backgroundColorClassName,
  } = passwordDetails

  const onDeletePassword = () => {
    onRemovePassword(id)
  }
  return (
    <li className="password-details-container">
      <div className="main-details">
        <div className={backgroundColorClassName}>
          {username.charAt(0).toUpperCase()}
        </div>
        <div className="website-password-details">
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {isShowPasswordChecked ? (
            <p className="password">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="stars-image"
            />
          )}
        </div>
      </div>

      <button
        className="delete-button"
        type="button"
        onClick={onDeletePassword}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
