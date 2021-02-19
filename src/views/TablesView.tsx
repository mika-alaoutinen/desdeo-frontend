import React from 'react'

import CoordinateTable from 'components/visualizations/table/CoordinateTable'
import DataTable from 'components/visualizations/table/DataTable'
import { createGrid } from 'views/viewUtils'

const TablesView: React.FC = () => (
  <div className='TablesView'>
    <h2>Tables</h2>
    {createGrid(<CoordinateTable />, <DataTable />)}
  </div>
)

export default TablesView
