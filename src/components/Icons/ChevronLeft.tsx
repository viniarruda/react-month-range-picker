import React from 'react'

import { Flex } from '@components'
import { IconProps } from './types'

const SvgChevronLeft = ({
  fontSize = '$24',
  fill = '$textPrimary',
}: IconProps) => {
  const componentName = 'SvgChevronLeft'
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
      <path fill="currentColor" d="m5 8 5-5 .7.7L6.4 8l4.3 4.3-.7.7-5-5Z" />
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

export default SvgChevronLeft
