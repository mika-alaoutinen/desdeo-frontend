import { Coordinate } from 'misc/dataTypes'
import {
  ADD_COORDINATES, CLEAR_SELECTED, SELECT_COORDINATES, SELECT_COORDINATE,
  CoordinateAction, CoordinateState
} from './coordinateTypes'

const coordinates = (state: CoordinateState = [], action: CoordinateAction): CoordinateState => {
  switch (action.type) {

    case ADD_COORDINATES:
      return state.concat(action.data)

    case CLEAR_SELECTED:
      return state.map(coordinate => setSelected(coordinate, false))

    case SELECT_COORDINATES:
      return state.map(coordinate => {
        const selectedIDs = action.data.map(selected => selected.id)
        return mapSelected(selectedIDs, coordinate)
      })

    case SELECT_COORDINATE:
      return state.map(coordinate =>
        coordinate.id === action.datum.id ?
          editSelected(action.datum)
          : coordinate
      )

    default:
      return state
  }
}

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

export default coordinates