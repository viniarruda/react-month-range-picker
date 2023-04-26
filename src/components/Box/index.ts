import { getSpacing } from '../../themes/utils'

import { styled } from '../../themes/stitches.config'

export const Box = styled('div', {
  variants: {
    fontSize: {
      '12': {
        fontSize: `$12`,
      },
      '14': {
        fontSize: `$14`,
      },
    },
    backgroundColor: {
      primary: { backgroundColor: '$backgroundPrimary' },
      secondary: { backgroundColor: '$backgroundSecondary' },
    },
    color: {
      primary: { color: '$textPrimary' },
      secondary: { color: '$textSecondary' },
    },
    borderRadius: {
      small: {
        borderRadius: '$small',
      },
    },
    m: getSpacing('margin'),
    mt: getSpacing('marginTop'),
    mr: getSpacing('marginRight'),
    mb: getSpacing('marginBottom'),
    ml: getSpacing('marginLeft'),
    mx: getSpacing('mx'),
    my: getSpacing('my'),
    p: getSpacing('padding'),
    px: getSpacing('px'),
    py: getSpacing('py'),
    pt: getSpacing('paddingTop'),
    pr: getSpacing('paddingRight'),
    pb: getSpacing('paddingBottom'),
    pl: getSpacing('paddingLeft'),
  },
})
