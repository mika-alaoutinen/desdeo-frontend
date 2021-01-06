import { Datum } from 'desdeo-components/build/types/dataTypes'
import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM,
  DataAction, DataState
} from './dataTypes'

const data = (state: DataState = [], action: DataAction): DataState => {
  switch (action.type) {

    case ADD_DATA:
      return addData(action.data, state)

    case CLEAR_SELECTED:
      return clearSelected(state)

    case SELECT_DATA:
      return selectData(action.data, state)

    case SELECT_DATUM:
      return selectDatum(action.datum, state)

    default:
      return state
  }
}

// Export these for easier testing
export const addData = (newData: Datum[], data: Datum[]): Datum[] =>
  data.concat(newData)

export const clearSelected = (data: Datum[]): Datum[] =>
  data.map(datum => setSelected(datum, false))

export const selectData = (selected: Datum[], data: Datum[]): Datum[] => {
  const selectedIDs = selected.map(datum => datum.id)
  return data.map(datum => mapSelected(selectedIDs, datum))
}

export const selectDatum = (selected: Datum, data: Datum[]): Datum[] =>
  data.map(datum => datum.id === selected.id
    ? editSelected(selected)
    : datum)

// Utility functions
const editSelected = (datum: Datum): Datum =>
  datum.isSelected === undefined
    ? setSelected(datum, true)
    : setSelected(datum, !datum.isSelected)

const mapSelected = (selectedIDs: string[], datum: Datum): Datum =>
  selectedIDs.includes(datum.id)
    ? setSelected(datum, true)
    : datum

const setSelected = (datum: Datum, isSelected: boolean): Datum => ({
  ...datum,
  isSelected
})

export default data