import React from 'react'

import Logo from '../../assets/logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.css'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrapper}>
                <img
                    src={Logo}
                    alt="Wealth Health logo"
                    className={styles.logo}
                />
                <h2 className={styles.logoName}>Wealth Health</h2>
            </div>
            <h1 className={styles.appName}>HRNet</h1>
            <button className={styles.exit}>
                <FontAwesomeIcon icon={faPowerOff} />
            </button>
        </header>
    )
}

export default Header
