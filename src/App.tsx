import React, { useState } from 'react'

import { MonthRangePicker } from './MonthRangePicker'
import { RangeParams } from './MonthRangePicker/types'

function App() {
  const [initialDate, setInitialDate] = useState<string>('')
  const [finalDate, setFinalDate] = useState<string>('')

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
    <div className="App">
      <MonthRangePicker
        onRangeSelect={onRangeSelect}
        columns={1}
        initialYear={2020}
        locale="en-US"
      />
      <div>
        <h1>{initialDate}</h1>
        <h1>{finalDate}</h1>
      </div>
    </div>
  )
}

export default App
