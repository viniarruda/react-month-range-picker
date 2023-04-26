import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Flex } from '../components/Flex'

import { MonthRangePicker } from '.'
import { MonthRangePickerProps, RangeParams } from './types'

export default {
  title: 'Forms/MonthRangePicker',
  component: MonthRangePicker,
} as Meta<MonthRangePickerProps>

const Template: StoryFn<MonthRangePickerProps> = args => {
  const [initialDate, setInitialDate] = useState<string>()
  const [finalDate, setFinalDate] = useState<string>()

  const onRangeSelect = ({
    startMonth,
    startYear,
    endMonth,
    endYear,
  }: RangeParams) => {
    setInitialDate(`${startMonth}/${startYear}`)
    setFinalDate(`${endMonth}/${endYear}`)
  }

  return (
    <Flex
      css={{ height: 500, backgroundColor: '#d9d9d9' }}
      direction="column"
      justify="center"
      align="center"
      p="12"
    >
      <MonthRangePicker
        onRangeSelect={onRangeSelect}
        columns={args.columns}
        initialYear={2020}
        locale="en-US"
      />
      <h1>{initialDate}</h1>
      <h1>{finalDate}</h1>
    </Flex>
  )
}

export const Default = Template.bind({})
Default.args = {
  columns: 1,
}

const TemplateTwoColumns: StoryFn<MonthRangePickerProps> = () => {
  const [initialDate, setInitialDate] = useState<string>()
  const [finalDate, setFinalDate] = useState<string>()

  const onRangeSelect = ({
    startMonth,
    startYear,
    endMonth,
    endYear,
  }: RangeParams) => {
    setInitialDate(`${startMonth}/${startYear}`)
    setFinalDate(`${endMonth}/${endYear}`)
  }

  return (
    <Flex
      css={{ height: 500, backgroundColor: '#d9d9d9' }}
      direction="column"
      justify="center"
      align="center"
      p="12"
    >
      <MonthRangePicker
        onRangeSelect={onRangeSelect}
        columns={2}
        initialYear={2020}
        locale="en-US"
      />
      <h1>Initial: {initialDate}</h1>
      <h1>Final: {finalDate}</h1>
    </Flex>
  )
}

export const TwoColumns = TemplateTwoColumns.bind({})
TemplateTwoColumns.args = {
  columns: 2,
}
