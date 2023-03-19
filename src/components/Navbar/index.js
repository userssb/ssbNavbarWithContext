import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickToggleTheme = () => {
        toggleTheme()
      }
      return (
        <>
          {isDarkTheme ? (
            <div className="navbar-dark-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="light-logo"
              />
              <ul className="middle-links-cont">
                <li className="list-item">
                  <Link to="/" className="light-link-item">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="light-link-item">
                    About
                  </Link>
                </li>
              </ul>
              <button
                className="theme-button"
                type="button"
                onClick={onClickToggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          ) : (
            <div className="navbar-light-cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="light-logo"
              />
              <ul className="middle-links-cont">
                <li className="list-item">
                  <Link to="/" className="dark-link-item">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/about" className="dark-link-item">
                    About
                  </Link>
                </li>
              </ul>
              <button
                className="theme-button"
                type="button"
                onClick={onClickToggleTheme}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="theme-image"
                />
              </button>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
