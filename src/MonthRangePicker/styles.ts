import { styled } from '@themes/stitches.config'
import { Flex, Column } from '@components'

export const Calender = styled(Column, {
  boxShadow: '2px 10px 12px 0.2',
  borderRadius: '$small',
  backgroundColor: '#fff',
  padding: '$spacing12',
})

export const Month = styled(Flex, {
  width: '25%',
  padding: '$spacing8',
  textAlign: 'center',
  fontSize: '14px',
  borderRadius: '$small',
  color: '$textSecondary',

  variants: {
    variant: {
      start: {
        backgroundColor: '$backgroundSecondary',
        borderTopRightRadius: 'initial',
        borderBottomRightRadius: 'initial',
      },
      end: {
        backgroundColor: '$backgroundSecondary',
        borderTopLeftRadius: 'initial',
        borderBottomLeftRadius: 'initial',
      },
      selected: {
        backgroundColor: '$backgroundPrimary',
        borderRadius: 'initial',
      },
      default: {
        '&:hover': {
          backgroundColor: '#e6e6e6',
        },
      },
    },
    disabled: {
      true: {
        cursor: 'default',
        opacity: '0.5',
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      false: {
        cursor: 'pointer',
        opacity: '1',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
    disabled: false,
  },
})

export const Arrow = styled(`div`, {
  fontWeight: 'bold',
  fontSize: '14px',
  cursor: 'pointer',
  height: '30px',
  width: '30px',
})
