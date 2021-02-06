import { Coordinate } from 'data/dataTypes'
import { SELECT_SET, SetAction } from './setTypes'

const init: Coordinate = {
  id: '1',
  x: 0,
  y: 0
}

// Temporary reducer used to display a selected coordinate on the UI
const selectedSet = (state: Coordinate = init, action: SetAction): Coordinate => {
  switch (action.type) {

    case SELECT_SET:
      return action.datum

    default:
      return state
  }
}

export default selectedSet