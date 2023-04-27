export type RangeParams = {
  startMonth: number
  startYear: number
  endMonth: number
  endYear: number
}

export type MonthRangePickerProps = {
  onRangeSelect: (params: RangeParams) => void
  columns?: 1 | 2
  initialYear?: number
  locale?: string
  calendarClassname?: string
  headerClassname?: string
  monthClassname?: string
}
