import './App.css'
import AddPassword from './AddPassword'

const App = () => (
  <div className="bg-container">
    <div className="body">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
        className="app-logo"
      />
      <AddPassword />
    </div>
  </div>
)

export default App
