import { getSpacing } from '@themes/utils'
import { styled } from '@themes/stitches.config'

import { Box } from '@components'

export const Flex = styled(Box, {
  display: 'flex',
  fontFamily: `"Roboto", sans-serif`,

  variants: {
    gap: getSpacing('gap'),
    columnGap: getSpacing('columnGap'),
    rowGap: getSpacing('rowGap'),
    flex: {
      1: {
        flex: 1,
      },
      0: {
        flex: 0,
      },
      2: {
        flex: 2,
      },
      auto: {
        flex: 'auto',
      },
      initial: {
        flex: 'initial',
      },
      none: {
        flex: 'none',
      },
    },
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
    },
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
      baseline: {
        alignItems: 'baseline',
      },
    },
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
      around: {
        justifyContent: 'space-around',
      },
      evenly: {
        justifyContent: 'space-evenly',
      },
    },
    wrap: {
      noWrap: {
        flexWrap: 'nowrap',
      },
      wrap: {
        flexWrap: 'wrap',
      },
      wrapReverse: {
        flexWrap: 'wrap-reverse',
      },
    },
  },
})
