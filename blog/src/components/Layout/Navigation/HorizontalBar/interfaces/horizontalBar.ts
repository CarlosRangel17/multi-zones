
interface IHorizontalBarProps {
  /** Provide the body element to override all markup in the horizontal bar element (disables all body content related props) */
  bodyContent?: JSX.Element
  /** Add "fixed" positioning to the horizontal bar */
  fixed?: boolean
  /** Overrides search input styles */
  searchFormClass?: string
  /** Overrides wrapper styles */
  wrapperClass?: string
  /** Handle search input submission */
  handleSearchSubmit?: () => void
  [rest: string]: unknown // ...rest property
}

export default IHorizontalBarProps