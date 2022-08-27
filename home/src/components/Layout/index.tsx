import React, { PropsWithChildren } from 'react'
// import Footer from './Footer'
// import Header from './Header'

const defaultTitle = 'Multi Zone Home | Nextjs App'
const defaultDescription = 'TBD'

interface Props extends PropsWithChildren {
  description?: string
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = defaultTitle,
  description = defaultDescription
}) => (
  <>
    {/* Primary SEO */}
    <title>{title}</title>
    <meta content={title} name="title" />
    <meta content={description} name="description" />
    {/* <Header /> */}
    <main>{children}</main>
    {/* <Footer /> */}
  </>
)

export default Layout
