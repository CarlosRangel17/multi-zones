import IAvatarDetail from "./avatar"
import INavOption from "./navOption"

interface IVerticalBarProps {
  /** Active nav option, should be a title of the nav options */
  activeNavOption?: string
  /** Recommended for using with the horizontal bar; Adjusted the side bar styling to account for upper horizontal bar */
  adjustForHorizontalBar?: boolean
  /** Avatar detail ie name and title */
  avatarDetail?: IAvatarDetail
  /** Provide the body element to override all markup in the vertical bar element (disables all body content related props) */
  bodyContent?: JSX.Element
  /** Add "fixed" positioning to the vertical bar */
  fixed?: boolean
  /** Height of vertical bar */
  height?: string
  /** Navigation options in the lower section */
  lowerNavOptions?: INavOption[]
  /** Overrides lower section wrapper styles */
  lowerSectionWrapperClass?: string
  /** Navigation options in the upper section */
  upperNavOptions?: INavOption[]
  /** Overrides wrapper styles */
  wrapperClass?: string
  /** Overrides upper section wrapper styles */
  upperSectionWrapperClass?: string
  [rest: string]: unknown // ...rest property
}

export default IVerticalBarProps