import React, { FunctionComponent, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { contextHookFactory } from '~contexts/contextHelpers'
import isClient from '~utils/isClient'

const WindowDimensionsCtx = createContext({
  innerWidth: 0,
  innerHeight: 0,
  outerWidth: 0,
  outerHeight: 0,
  isTablet: false,
  isSurfaceTablet: false,
  isDesktop: false,
  isMediumDesktop: false,
  isLandscape: false
})
WindowDimensionsCtx.displayName = 'Window Dimensions'

interface Props extends PropsWithChildren {
  isMobile?: boolean
  isSuraceTablet?: boolean
  isTablet?: boolean
  isDesktop?: boolean
  isMediumDesktop?: boolean
  isLandscape?: boolean
}

const WindowDimensionsProvider: FunctionComponent<Props> = ({
  children,
  isMobile = false,
  isSuraceTablet = false,
  isTablet = false,
  isDesktop = false,
  isMediumDesktop = false,
  isLandscape = false
}) => {
  const [dimensions, setDimensions] = useState(() => ({
    isMobile: isClient ? window.innerWidth < 600 : isMobile,
    isSurfaceTablet: isClient ? window.innerWidth < 767 && window.innerWidth >= 600 : isSuraceTablet,
    isTablet: isClient ? window.innerWidth > 767 && window.innerWidth < 1025 : isTablet,
    isDesktop: isClient ? window.innerWidth > 1024 && window.innerWidth < 1280 : isDesktop,
    isMediumDesktop: isClient ? window.innerWidth > 1280 : isMediumDesktop,
    isLandscape: isClient ? window.innerWidth > window.innerHeight : isLandscape,
    innerWidth: isClient ? window.innerWidth : 0,
    innerHeight: isClient ? window.innerHeight : 0,
    outerWidth: isClient ? window.outerWidth : 0,
    outerHeight: isClient ? window.outerHeight : 0
  }))

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      // Set dimensions to state
      setDimensions({
        isMobile: window.innerWidth < 600,
        isSurfaceTablet: window.innerWidth < 767 && window.innerWidth >= 600,
        isTablet: window.innerWidth > 767 && window.innerWidth < 1025,
        isDesktop: window.innerWidth > 1024 && window.innerWidth < 1280,
        isMediumDesktop: window.innerWidth >= 1280,
        isLandscape: window.innerWidth > window.innerHeight,
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight
      })
    }

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setDimensions({
      isMobile: window.innerWidth < 600,
      isSurfaceTablet: window.innerWidth < 767 && window.innerWidth >= 600,
      isTablet: window.innerWidth > 767 && window.innerWidth < 1025,
      isDesktop: window.innerWidth > 1024 && window.innerWidth < 1280,
      isMediumDesktop: window.innerWidth >= 1280,
      isLandscape: window.innerWidth > window.innerHeight,
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight
    })
  }, [dimensions.innerWidth, dimensions.innerHeight])

  return <WindowDimensionsCtx.Provider value={dimensions}>{children}</WindowDimensionsCtx.Provider>
}

export default WindowDimensionsProvider
export const useWindowDimensions = contextHookFactory(WindowDimensionsCtx, 'WindowDimensionsCtx')
