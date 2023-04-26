# react-month-range-picker

React component that can select an range of months separated by year

# Examples

![default](https://github.com/viniarruda/react-month-range-picker/blob/main/assets/oneColumn.png?raw=true)

![two columns](https://github.com/viniarruda/react-month-range-picker/blob/main/assets/twoColumns.png?raw=true)



# Run

To run that demo on your own computer:

Clone this repository
yarn install
yarn storybook
Visit http://localhost:6006/

# Features

- Add `className` to Container
- Add `className` to Calendar
- Add `className` to Header
- Add `className` to MonthItem

# Props

| Props  | type | Info
| ------------- | ------------- | ------------- |
| columns  | 1 or 2  | Columns to show  |
| initialYear  | number  | The first initialYear |
| locale  | string  | ex: `en-US` |
| onRangeSelect  | function  | Pass an function to get the RangeParams |

```typescript

onRangeSelect: (params: RangeParams) => void

type RangeParams = {
  startMonth: number
  startYear: number
  endMonth: number
  endYear: number
}

`
