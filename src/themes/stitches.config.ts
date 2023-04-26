import {
  createStitches,
  CSS as StitchesCSS,
  PropertyValue,
  ScaleValue,
} from '@stitches/react'

import defaultTheme from './default'

export const {
  styled,
  css,
  config,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
} = createStitches({
  theme: {
    colors: defaultTheme.colors,
    space: defaultTheme.space,
    fontSizes: defaultTheme.fontSizes,
    radii: defaultTheme.radii,
  },
  media: defaultTheme.media,
  utils: {
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    bg: (value: PropertyValue<'background'>) => ({
      background: value,
    }),
    bgColor: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
    alignAll: (value: PropertyValue<'alignItems'>) => ({
      alignItems: value,
      justifyContent: value,
    }),
    b: (value: PropertyValue<'border'>) => ({
      border: value,
    }),
    borderSmall: (value: PropertyValue<'borderColor'>) => ({
      border: `1px solid ${value}`,
    }),
    br: (value: PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
  },
})

type Config = typeof config

export type CSS = StitchesCSS<Config>
export type Color = ScaleValue<'colors', Config>
