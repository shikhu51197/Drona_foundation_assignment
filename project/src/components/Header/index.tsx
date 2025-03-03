import React, { useState } from 'react'
import styles from './Header.module.scss'

interface HeaderProps {
  onMenuClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <button className={styles.menuButton} onClick={onMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.welcomeText}>
          <h2>Hello Priyam!</h2>
          <p>Welcome to Skill College</p>
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <button className={styles.searchButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
        
        <div className={styles.notifications}>
          <div className={styles.iconBadge}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className={styles.badge}>2</span>
          </div>
        </div>
        
        <div className={styles.messages}>
          <div className={styles.iconBadge}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className={styles.badge}>5</span>
          </div>
        </div>
        
        <div className={styles.profileContainer}>
          <div className={styles.profile} onClick={toggleProfileMenu}>
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className={styles.profileImage} />
            <span className={styles.profileText}>Student Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          
          {profileMenuOpen && (
            <div className={styles.profileMenu}>
              <ul>
                <li>Profile Settings</li>
                <li>Account</li>
                <li>Preferences</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header