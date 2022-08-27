import clsx from 'clsx'
import React, { FunctionComponent } from 'react'
import INavOption from './interfaces/navOption'
import IVerticalBarProps from './interfaces/verticalBar'
import { defaultLowerNavOptions, defaultUpperNavOptions } from './consts/navigation'
import NavOption from './NavOption'
import Avatar from './Avatar'

import styles from './styles/verticalBar.module.scss'

const VerticalBar: FunctionComponent<IVerticalBarProps> = ({
  activeNavOption = '',
  adjustForHorizontalBar = false,
  avatarDetail = null,
  bodyContent,
  fixed = false,
  height,
  lowerNavOptions = defaultLowerNavOptions,
  lowerSectionWrapperClass,
  upperNavOptions = defaultUpperNavOptions,
  upperSectionWrapperClass,
  wrapperClass,
  ...rest
}) => {
  const verticalClasses = clsx(
    styles.vertical,
    adjustForHorizontalBar && styles.adjustForHorizontalBar,
    fixed && styles.fixed,
    wrapperClass
  )

  if (typeof bodyContent !== 'undefined') {
    return (
      <header className={styles.vertical} data-testid="vertical-bar" {...rest}>
        {bodyContent}
      </header>
    )
  }

  const mapNavOption = (navOption: INavOption) => (
    <NavOption key={navOption.title} selected={selectedNavOption?.title === navOption.title} {...navOption} />
  )

  const selectedNavOption =
    lowerNavOptions?.concat(upperNavOptions || [])?.find((navOption) => navOption.title === activeNavOption) || null

  const upperSectionClasses = clsx(styles.upperSection, upperSectionWrapperClass)
  const lowerSectionClasses = clsx(styles.lowerSection, lowerSectionWrapperClass)
  return (
    <nav className={verticalClasses} data-testid="vertical-bar" style={{ height: `${height}` }} {...rest}>
      {upperNavOptions?.length > 0 && <div className={upperSectionClasses}>{upperNavOptions.map(mapNavOption)}</div>}
      {lowerNavOptions?.length > 0 && (
        <div className={lowerSectionClasses}>
          {lowerNavOptions.map(mapNavOption).concat(<Avatar key="avatar" {...avatarDetail} />)}
        </div>
      )}
    </nav>
  )
}

export default VerticalBar
