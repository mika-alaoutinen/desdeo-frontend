import { Coordinate } from 'misc/dataTypes'
import {
  ADD_COORDINATES, CLEAR_SELECTED, SELECT_COORDINATES, SELECT_COORDINATE,
  CoordinateAction, CoordinateState
} from './coordinateTypes'

const coordinates = (state: CoordinateState = [], action: CoordinateAction): CoordinateState => {
  switch (action.type) {

    case ADD_COORDINATES:
      return addDataReduce(action.data, state)

    case CLEAR_SELECTED:
      return clearSelectedReduce(state)

    case SELECT_COORDINATES:
      return selectDataReduce(action.data, state)

    case SELECT_COORDINATE:
      return selectDatumReduce(action.datum, state)

    default:
      return state
  }
}

// Export these for easier testing
const addDataReduce = (newData: Coordinate[], data: Coordinate[]): Coordinate[] =>
  data.concat(newData)

const clearSelectedReduce = (data: Coordinate[]): Coordinate[] =>
  data.map(datum => setSelected(datum, false))

const selectDataReduce = (selected: Coordinate[], data: Coordinate[]): Coordinate[] => {
  const selectedIDs = selected.map(datum => datum.id)
  return data.map(datum => mapSelected(selectedIDs, datum))
}

const selectDatumReduce = (selected: Coordinate, data: Coordinate[]): Coordinate[] =>
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

export {
  addDataReduce, clearSelectedReduce, selectDataReduce, selectDatumReduce
}

export default coordinates