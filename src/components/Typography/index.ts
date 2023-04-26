import { ComponentProps } from 'react'

import { styled } from '../../themes/stitches.config'

export const Typography = styled(`p`, {
  lineHeight: `$default`,
  margin: `0`,
  fontVariantNumeric: `tabular-nums`,
  display: `block`,

  variants: {
    color: {
      primary: { color: '$textPrimary' },
      secondary: { color: '$textSecondary' },
    },
    size: {
      '12': {
        fontSize: `$12`,
      },
      '14': {
        fontSize: `$14`,
      },
    },
    weight: {
      regular: {
        fontWeight: 'regular',
      },
    },
    align: {
      left: {
        textAlign: `left`,
      },
      center: {
        textAlign: `center`,
      },
      right: {
        textAlign: `right`,
      },
      inherit: {
        textAlign: `inherit`,
      },
    },
  },
  defaultVariants: {
    size: `11`,
    weight: `light`,
    color: `primary`,
    align: undefined,
  },
})

export type TypographyProps = ComponentProps<typeof Typography>
