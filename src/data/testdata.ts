import { AttributeSet, Coordinate, DataSet, InputDataSet } from 'data/dataTypes'

const coordinates: Coordinate[] = [
  { id: 'a', x: 10, y: 20, label: 'A', isSelected: true },
  { id: 'b', x: 20, y: 40, label: 'B', isSelected: false },
  { id: 'c', x: 30, y: 70, label: 'C' },
  { id: 'd', x: 40, y: 30, label: 'D', isSelected: true },
  { id: 'e', x: 50, y: 50, label: 'E' },
]

const dataset: DataSet[] = [
  {
    label: 'WQ Fishery',
    data: [
      { id: 'wq-fishery-0', isSelected: false, value: 6.042483 },
      { id: 'wq-fishery-1', isSelected: false, value: 5.758127 },
      { id: 'wq-fishery-2', isSelected: false, value: 6.287081 },
      { id: 'wq-fishery-3', isSelected: false, value: 6.134672 },
      { id: 'wq-fishery-4', isSelected: false, value: 5.610188 },
      { id: 'wq-fishery-5', isSelected: false, value: 5.231501 },
      { id: 'wq-fishery-6', isSelected: false, value: 6.34 },
      { id: 'wq-fishery-7', isSelected: false, value: 6.291364 },
      { id: 'wq-fishery-8', isSelected: false, value: 5.407513 },
      { id: 'wq-fishery-9', isSelected: false, value: 6.019503 },
    ],
  },

  {
    label: 'WQ City',
    data: [
      { id: 'wq-city-0', isSelected: false, value: 3.17527 },
      { id: 'wq-city-1', isSelected: false, value: 3.410843 },
      { id: 'wq-city-2', isSelected: false, value: 3.207926 },
      { id: 'wq-city-3', isSelected: false, value: 2.98383 },
      { id: 'wq-city-4', isSelected: false, value: 2.910456 },
      { id: 'wq-city-5', isSelected: false, value: 3.248641 },
      { id: 'wq-city-6', isSelected: false, value: 2.962557 },
      { id: 'wq-city-7', isSelected: false, value: 3.346416 },
      { id: 'wq-city-8', isSelected: false, value: 3.130143 },
      { id: 'wq-city-9', isSelected: false, value: 3.350959 },
    ],
  },

  {
    label: 'ROI',
    data: [
      { id: 'roi-0', isSelected: false, value: 6.090291 },
      { id: 'roi-1', isSelected: false, value: 6.887735 },
      { id: 'roi-2', isSelected: false, value: 2.992514 },
      { id: 'roi-3', isSelected: false, value: 5.507545 },
      { id: 'roi-4', isSelected: false, value: 7.082375 },
      { id: 'roi-5', isSelected: false, value: 7.352708 },
      { id: 'roi-6', isSelected: false, value: 0.321111 },
      { id: 'roi-7', isSelected: false, value: 2.847139 },
      { id: 'roi-8', isSelected: false, value: 7.254194 },
      { id: 'roi-9', isSelected: false, value: 6.195485 },
    ],
  },

  {
    label: 'City Tax',
    data: [
      { id: 'city-tax-0', isSelected: false, value: 2.444406 },
      { id: 'city-tax-1', isSelected: false, value: 8.989781 },
      { id: 'city-tax-2', isSelected: false, value: 2.758216 },
      { id: 'city-tax-3', isSelected: false, value: 0.581456 },
      { id: 'city-tax-4', isSelected: false, value: 0.216794 },
      { id: 'city-tax-5', isSelected: false, value: 3.951754 },
      { id: 'city-tax-6', isSelected: false, value: 0.377181 },
      { id: 'city-tax-7', isSelected: false, value: 5.67065 },
      { id: 'city-tax-8', isSelected: false, value: 2.057297 },
      { id: 'city-tax-9', isSelected: false, value: 6.173211 },
    ],
  },

  {
    label: 'Plant Resources',
    data: [
      { id: 'plant-resources-0', isSelected: false, value: 0.248895 },
      { id: 'plant-resources-1', isSelected: false, value: 0.346752 },
      { id: 'plant-resources-2', isSelected: false, value: 0.326688 },
      { id: 'plant-resources-3', isSelected: false, value: 0.259547 },
      { id: 'plant-resources-4', isSelected: false, value: 0.126336 },
      { id: 'plant-resources-5', isSelected: false, value: 0.295807 },
      { id: 'plant-resources-6', isSelected: false, value: 0.35 },
      { id: 'plant-resources-7', isSelected: false, value: 0.328574 },
      { id: 'plant-resources-8', isSelected: false, value: 0.228541 },
      { id: 'plant-resources-9', isSelected: false, value: 0.327455 },
    ],
  },
]

const filterData: AttributeSet[] = [
  {
    label: 'Alternative 1',
    attributes: [
      { id: 'wq-fishery-1', x: 'wq fishery', y: 5.758127 },
      { id: 'wq-city-1', x: 'wq city', y: 3.17527 },
      { id: 'roi-1', x: 'roi', y: 6.090291 },
      { id: 'city-tax-1', x: 'city tax', y: 2.444406 },
    ],
  },
  {
    label: 'Alternative 2',
    attributes: [
      { id: 'wq-fishery-2', x: 'wq fishery', y: 6.042483 },
      { id: 'wq-city-2', x: 'wq city', y: 3.410843 },
      { id: 'roi-2', x: 'roi', y: 6.887735 },
      { id: 'city-tax-2', x: 'city tax', y: 8.989781 },
    ],
  },
]

const input: InputDataSet = [
  {
    label: 'WQ Fishery',
    data: [
      6.042483, 5.758127, 6.287081, 6.134672, 5.610188, 5.231501, 6.34, 6.291364, 5.407513,
      6.019503,
    ],
  },

  {
    label: 'WQ City',
    data: [
      3.17527, 3.410843, 3.207926, 2.98383, 2.910456, 3.248641, 2.962557, 3.346416, 3.130143,
      3.350959,
    ],
  },

  {
    label: 'ROI',
    data: [
      6.090291, 6.887735, 2.992514, 5.507545, 7.082375, 7.352708, 0.321111, 2.847139, 7.254194,
      6.195485,
    ],
  },

  {
    label: 'City Tax',
    data: [
      2.444406, 8.989781, 2.758216, 0.581456, 0.216794, 3.951754, 0.377181, 5.67065, 2.057297,
      6.173211,
    ],
  },

  {
    label: 'Plant Resources',
    data: [
      0.248895, 0.346752, 0.326688, 0.259547, 0.126336, 0.295807, 0.35, 0.328574, 0.228541,
      0.327455,
    ],
  },
]

export { coordinates, dataset, filterData, input }
