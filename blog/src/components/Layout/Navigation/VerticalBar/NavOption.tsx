import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import INavOption from './interfaces/navOption'
import styles from './styles/navOption.module.scss'

interface Props extends INavOption {
  selected?: boolean
}

const NavOption: FunctionComponent<Props> = ({ destination, icon, title, selected }) => (
  <a className={clsx(styles.navOption, selected && styles.active)} href={destination}>
    <span className={styles.icon}>{icon}</span>
    <span className={styles.title}>{title}</span>
  </a>
)

export default NavOption
