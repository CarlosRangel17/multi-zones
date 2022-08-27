import { useEffect } from 'react'
import { useRouter } from 'next/router'
// import waitForGlobal from '~utils/waitForGlobal'

const useRouteTracking = () => {
  const router = useRouter()

  /** NOTE: Comment out for handling SPA route changes for Google Analytics */
  // const handleRouteChange = (url: string) => {
  //   // @ts-ignore global variable
  //   if (typeof window?.utag_data !== 'undefined') {
  //     setUdoDomVariables(url)
  //     fireViewAnalytics(getViewAnalytics(url))
  //   }
  // }

  // const handlePopState = () => {
  //   const { Pathname, Referrer } = UtagDomAttribute
  //   setUdoAttribute(Referrer, window.utag_data[Pathname])
  // }

  /** NOTE: the following should set the dom.referrer appropriately on back/forward browser button clicks */
  // useEffect(() => {
  //   window.addEventListener('popstate', handlePopState)
  //   return () => window.removeEventListener('popstate', handlePopState)
  // }, [])

  /** NOTE: Waits for window attributes to be available on DOM, waits until route is ready  */
  useEffect(() => {
    const { isReady } = router
    if (isReady) {
      /** NOTE: Comment out for handling SPA route changes for Google Analytics */
      // waitForGlobal('utag', () => {
      //   const url = `${window.location.pathname}${window.location.search}`
      //   handleRouteChange(url)
      // })
    }
  }, [router])
}

export default useRouteTracking
