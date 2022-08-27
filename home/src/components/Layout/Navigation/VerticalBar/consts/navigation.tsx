import INavOption from '../interfaces/navOption'

// resource: https://emojipedia.org/
export const defaultUpperNavOptions: INavOption[] = [
  {
    title: 'Home',
    destination: '/',
    icon: '🏠'
  },
  {
    title: 'Blog',
    destination: '/blog',
    icon: '📰'
  }
]

export const defaultLowerNavOptions: INavOption[] = [
  {
    title: 'Settings',
    destination: '/settings',
    icon: '⚙️'
  }
]
