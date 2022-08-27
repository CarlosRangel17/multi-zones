import React, { FunctionComponent } from 'react'
import HorizontalBar from './HorizontalBar'
import IHorizontalBarProps from './HorizontalBar/interfaces/horizontalBar'
import VerticalBar from './VerticalBar'
import IVerticalBarProps from './VerticalBar/interfaces/verticalBar'

interface Props {
  /** Horizontal Bar props */
  horizontalBarProps?: IHorizontalBarProps
  /** Vertical Bar props */
  verticalBarProps?: IVerticalBarProps
  [rest: string]: unknown // ...rest property
}

const Navigation: FunctionComponent<Props> = ({ horizontalBarProps, verticalBarProps, ...rest }) => (
  <>
    <HorizontalBar {...horizontalBarProps} {...rest} />
    <VerticalBar activeNavOption={verticalBarProps?.activeNavOption || 'Home'} {...verticalBarProps} {...rest} />
  </>
)

export default Navigation
