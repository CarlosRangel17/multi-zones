import React from 'react'
// import useRouteTracking from '~hooks/useRouteTracking'
import Navigation from '~components/Layout/Navigation'
import '~/styles/main.scss'

function MyApp({ Component, pageProps }) {
  // useRouteTracking()
  return (
    <>
      <Navigation
        horizontalBarProps={{ fixed: true }}
        verticalBarProps={{ fixed: true, adjustForHorizontalBar: true, activeNavOption: 'Blog' }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
