import { Coordinate } from 'misc/dataTypes'
import { SELECT_SET, SetAction } from './datasetTypes'

const init: Coordinate = {
  id: '1',
  x: 0,
  y: 0
}

// Temporary reducer used to display a selected coordinate on the UI
const selectedDataset = (state: Coordinate = init, action: SetAction): Coordinate => {
  switch (action.type) {

    case SELECT_SET:
      return action.datum

    default:
      return state
  }
}

export default selectedDataset