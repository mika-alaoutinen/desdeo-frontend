import React from 'react'
import { DataTableComponent } from 'desdeo-components'

import { useDataset } from 'hooks/selectors'

const DataTable: React.FC = () => {
  const data = useDataset()

  const onClick = (n: number): void => {
    console.log('clicked', n)
  }

  return (
    <DataTableComponent
      data={data}
      onClick={onClick}
    />
  )
}

export default DataTable