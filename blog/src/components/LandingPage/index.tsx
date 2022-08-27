import Link from 'next/link'
import React from 'react'
import styles from './landingPage.module.scss'

const LandingPage = () => {
  const sampleLinks = [
    { id: '1', title: 'Post 1' },
    { id: '2', title: 'Post 2' },
    { id: '3', title: 'Post 3' },
    { id: '4', title: 'Post 4' }
  ]

  return (
    <div className={styles.container} data-testid="container">
      <h1 className={styles.title}>👋 Welcome to our Blog!</h1>
      <div className={styles.tileWrapper}>
        <div className={styles.innerTileWrapper}>
          <ul className={styles.innerTileWrapper}>
            {sampleLinks.map((sampleLink) => (
              <li key={sampleLink.id} className={styles.tile}>
                <Link href={`/post/${sampleLink.id}`}>
                  <a>{sampleLink.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
