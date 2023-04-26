import React from 'react'

import { Flex } from '../Flex'
import { IconProps } from './types'

const SvgChevronRight = ({
  fontSize = '$24',
  fill = '$textPrimary',
}: IconProps) => {
  const componentName = 'SvgChevronRight'
  const nameAttributes =
    componentName.replace('Svg', '').toLowerCase() + '-icon'
  const svg = (
    <svg
      data-icon={nameAttributes}
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      role="img"
      className={nameAttributes}
      data-testid={nameAttributes}
    >
      <path fill="currentColor" d="m11 8-5 5-.7-.7L9.6 8 5.3 3.7 6 3l5 5Z" />
    </svg>
  )
  return (
    <Flex
      css={{
        color: fill,
        fontSize,
      }}
    >
      {svg}
    </Flex>
  )
}

export default SvgChevronRight
