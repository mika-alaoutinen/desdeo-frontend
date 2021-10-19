import { Grid } from '@material-ui/core'

export const createGrid = (...components: JSX.Element[]): JSX.Element => (
  <Grid container justify='center'>
    {components.map((component, index) => wrapComponentInGrid(component, index))}
  </Grid>
)

const wrapComponentInGrid = (component: JSX.Element, key: number): JSX.Element => (
  <Grid key={key} item>
    {component}
  </Grid>
)
