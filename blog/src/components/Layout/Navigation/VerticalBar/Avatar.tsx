import React, { FunctionComponent } from 'react'
import { getSessionStorageItem } from './hooks/useSessionStorage'
import { AVATAR_DETAIL_KEY } from './consts/avatar'
import IAvatarDetail from './interfaces/avatar'
import { mockAvatarDetail } from './mocks'

import styles from './styles/avatar.module.scss'

interface Props extends IAvatarDetail {}

const getInitials = (fullName: string) => {
  const allNames = fullName.trim().split(' ')
  const initials = allNames.reduce((acc, curr, index) => {
    let previousValue = acc
    if (index === 0 || index === allNames.length - 1) {
      previousValue = `${previousValue}${curr.charAt(0).toUpperCase()}`
    }
    return previousValue
  }, '')
  return initials
}

const Avatar: FunctionComponent<Props> = ({ name = '', title = '', storageKey = AVATAR_DETAIL_KEY }) => {
  const sessionStorageAvatarDetail: IAvatarDetail = getSessionStorageItem<IAvatarDetail>(storageKey, mockAvatarDetail)
  const avatarName = name || sessionStorageAvatarDetail?.name || mockAvatarDetail.name
  const avatarTitle = title || sessionStorageAvatarDetail?.title
  const initials = getInitials(avatarName)

  return (
    <div className={styles.container}>
      <span className={styles.circle}>{initials}</span>
      <span className={styles.name}>{avatarName}</span>
      <span className={styles.title}>{avatarTitle}</span>
    </div>
  )
}

export default Avatar
