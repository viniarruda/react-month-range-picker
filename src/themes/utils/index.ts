import { SpacingsTypes } from './types'

export const getSpacing = (key: SpacingsTypes) => ({
  0: { [key]: '$spacing0' },
  2: { [key]: '$spacing2' },
  4: { [key]: '$spacing4' },
  8: { [key]: '$spacing8' },
  12: { [key]: '$spacing12' },
  16: { [key]: '$spacing16' },
  24: { [key]: '$spacing24' },
  32: { [key]: '$spacing32' },
  40: { [key]: '$spacing40' },
  48: { [key]: '$spacing48' },
  56: { [key]: '$spacing56' },
  64: { [key]: '$spacing64' },
  80: { [key]: '$spacing80' },
  96: { [key]: '$spacing96' },
  128: { [key]: '$spacing128' },
  160: { [key]: '$spacing160' },
})
