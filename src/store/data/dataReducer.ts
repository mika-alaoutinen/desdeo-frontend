import { Coordinate } from 'desdeo-components/build/types/dataTypes'
import {
  ADD_DATA, CLEAR_SELECTED, SELECT_DATA, SELECT_DATUM,
  DataAction, DataState
} from './dataTypes'

const data = (state: DataState = [], action: DataAction): DataState => {
  switch (action.type) {

    case ADD_DATA:
      return addDataReduce(action.data, state)

    case CLEAR_SELECTED:
      return clearSelectedReduce(state)

    case SELECT_DATA:
      return selectDataReduce(action.data, state)

    case SELECT_DATUM:
      return selectDatumReduce(action.datum, state)

    default:
      return state
  }
}

// Export these for easier testing
export const addDataReduce = (newData: Coordinate[], data: Coordinate[]): Coordinate[] =>
  data.concat(newData)

export const clearSelectedReduce = (data: Coordinate[]): Coordinate[] =>
  data.map(datum => setSelected(datum, false))

export const selectDataReduce = (selected: Coordinate[], data: Coordinate[]): Coordinate[] => {
  const selectedIDs = selected.map(datum => datum.id)
  return data.map(datum => mapSelected(selectedIDs, datum))
}

export const selectDatumReduce = (selected: Coordinate, data: Coordinate[]): Coordinate[] =>
  data.map(datum => datum.id === selected.id
    ? editSelected(selected)
    : datum)

// Utility functions
const editSelected = (datum: Coordinate): Coordinate =>
  datum.isSelected === undefined
    ? setSelected(datum, true)
    : setSelected(datum, !datum.isSelected)

const mapSelected = (selectedIDs: string[], datum: Coordinate): Coordinate =>
  selectedIDs.includes(datum.id)
    ? setSelected(datum, true)
    : datum

const setSelected = (datum: Coordinate, isSelected: boolean): Coordinate => ({
  ...datum,
  isSelected
})

export default data