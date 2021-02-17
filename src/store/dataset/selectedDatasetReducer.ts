import { Value } from 'misc/dataTypes'
import { SELECT_DATUM, DatasetAction } from './datasetTypes'

const init: Value = {
  id: '1',
  isSelected: false,
  value: 0
}

// Temporary reducer used to display a selected coordinate on the UI
const selectedDataset = (state: Value = init, action: DatasetAction): Value => {
  switch (action.type) {

    case SELECT_DATUM:
      return action.datum

    default:
      return state
  }
}

export default selectedDataset