import React from 'react'
import styles from './landingPage.module.scss'

const LandingPage = () => {
  const sampleLinks = [{ source: '/blog', title: 'Blog' }]

  return (
    <div className={styles.container} data-testid="container">
      <h1 className={styles.title}>👋 Welcome to the Multi Zone App!</h1>
      <p className={styles.subtext}>
        This is the start of an awesome micro front end application. And it is also a test!
      </p>
      <div className={styles.tileWrapper}>
        <div className={styles.innerTileWrapper}>
          {sampleLinks.map((sampleLink) => (
            <a key={sampleLink.title} className={styles.tile} href={sampleLink.source}>
              {sampleLink.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
