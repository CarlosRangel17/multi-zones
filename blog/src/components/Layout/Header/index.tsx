import React from 'react'
import defaultConfigs from '~consts/defaultConfigs'
import styles from './header.module.scss'

const Header: React.FunctionComponent = () => (
  <header className={styles.header} data-testid="header">
    <a aria-label="home" data-testid="logo-link" href={defaultConfigs.baseUrl}>
      Home
    </a>
  </header>
)

export default Header
