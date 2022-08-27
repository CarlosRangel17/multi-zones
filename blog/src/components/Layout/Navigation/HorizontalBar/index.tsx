import clsx from 'clsx'
import React, { FunctionComponent } from 'react'

import IHorizontalBarProps from './interfaces/horizontalBar'
import styles from './horizontalBar.module.scss'

const HorizontalBar: FunctionComponent<IHorizontalBarProps> = ({
  bodyContent,
  fixed = false,
  // searchFormClass,
  wrapperClass,
  // handleSearchSubmit,
  ...rest
}) => {
  const horizontalClasses = clsx(styles.horizontal, fixed && styles.fixed, wrapperClass)

  if (typeof bodyContent !== 'undefined') {
    return (
      <header className={styles.horizontal} data-testid="horizontal-bar" {...rest}>
        {bodyContent}
      </header>
    )
  }
  return (
    <header className={horizontalClasses} data-testid="horizontal-bar" {...rest}>
      <div className={styles.settingsSection}>
        <div className={styles.userSection}>
          <span className={styles.name}>Bucky Barnes</span>
        </div>
      </div>
    </header>
  )
}

export default HorizontalBar
